import { Trans, useTranslation } from "react-i18next";
import {
  Container,
  Content,
  LeftSide,
  ProfileName,
  ProfileProfession,
  ProfileInfo,
  RightSide,
  ProfileDescription,
  SocialNetworks,
  SocialNetworkItem,
  SocialNetworkLink,
  SectionInfo,
  SectionTitle,
  SectionDescription,
  SectionHighlight,
  SectionDate,
  ExperienceFormation,
  ExperienceFormationTitle,
  ExperienceFormationDescription,
  ExperienceFormationRole,
  ExperienceFormationContent,
  ProjectsList,
  ProjectItem,
  ProjectImage,
  Link,
} from "./styles";
import GithubLogo from "./../../assets/github.svg?react";
import EmailLogo from "./../../assets/gmail.svg?react";
import HackerrankLogo from "./../../assets/hackerrank.svg?react";
import LeetCodeLogo from "./../../assets/leetcode.svg?react";
import LinkedinLogo from "./../../assets/linkedin.svg?react";
import XLogo from "./../../assets/x.svg?react";
import ArrowOutward from "./../../assets/arrow-outward.svg?react";
import ArrowForward from "./../../assets/arrow-forward.svg?react";
import project from "../../data/projects.json";
import { SkillsList } from "../../components/SkillsList";

export function Home() {
  const { t } = useTranslation();

  const socialNetworks = [
    {
      name: "email",
      url: "mailto:contact@laerciorios.com",
      icon: <EmailLogo />,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/laerciorios/",
      icon: <LinkedinLogo />,
    },
    {
      name: "github",
      url: "https://github.com/LaercioSR",
      icon: <GithubLogo />,
    },
    {
      name: "x",
      url: "https://twitter.com/devlaercio",
      icon: <XLogo />,
    },
    {
      name: "hackerrank",
      url: "https://www.hackerrank.com/profile/LaercioRios",
      icon: <HackerrankLogo />,
    },
    {
      name: "leetcode",
      url: "https://leetcode.com/LaercioRios/",
      icon: <LeetCodeLogo />,
    },
  ];

  const experiences = [
    {
      name: "Geodatin",
      key: "geodatin",
      startDate: new Date("2021-02-01"),
      endDate: t("present"),
      skills: ["NodeJS", "TypeScript", "ReactJS", "PostgreSQL"],
      link: "https://geodatin.com/",
    },
    {
      name: "Golfarma",
      key: "golfarma",
      startDate: new Date("2020-01-01"),
      endDate: new Date("2021-02-01"),
      skills: ["PHP", "Laravel", "SQL Server"],
      link: "https://golfarma.com.br/",
    },
  ];

  const formations = [
    {
      name: "Universidade Estadual de Feira de Santana",
      key: "uefs",
      startDate: "2017",
      endDate: t("present"),
      link: "https://www.ecomp.uefs.br/",
    },
    {
      name: "SENAI",
      key: "senai",
      startDate: "2018",
      endDate: "2019",
      link: "https://www.senai.br/",
    },
  ];

  const projectsHighlight = project.filter((project) => project.highlight);

  return (
    <Container>
      <Content>
        <LeftSide>
          <ProfileInfo>
            <div>
              <ProfileName>Laercio Rios</ProfileName>
              <ProfileProfession>{t("profession")}</ProfileProfession>
            </div>
            <ProfileDescription>{t("description")}</ProfileDescription>
          </ProfileInfo>
          <SocialNetworks>
            {socialNetworks.map((socialNetwork) => {
              return (
                <SocialNetworkItem key={socialNetwork.name}>
                  <SocialNetworkLink href={socialNetwork.url} target="__blank">
                    {socialNetwork.icon}
                  </SocialNetworkLink>
                </SocialNetworkItem>
              );
            })}
          </SocialNetworks>
        </LeftSide>
        <RightSide>
          <SectionInfo>
            <SectionTitle>{t("about.title")}</SectionTitle>
            <SectionDescription>
              <Trans i18nKey="about.description">
                __ <SectionHighlight></SectionHighlight>.
              </Trans>
            </SectionDescription>
          </SectionInfo>
          <SectionInfo>
            <SectionTitle>{t("experiences.title")}</SectionTitle>
            {experiences.map((experience) => {
              return (
                <ExperienceFormation key={experience.key}>
                  <SectionDate>
                    {t("general.date.monthAbbNameYear", {
                      date: experience.startDate,
                    })}{" "}
                    -{" "}
                    {t("general.date.monthAbbNameYear", {
                      date: experience.endDate,
                    })}
                  </SectionDate>
                  <ExperienceFormationContent>
                    <ExperienceFormationTitle href={experience.link}>
                      {experience.name}
                      {experience.link && <ArrowOutward />}
                    </ExperienceFormationTitle>
                    <ExperienceFormationRole>
                      {t(`experiences.${experience.key}.position`)}
                    </ExperienceFormationRole>
                    <ExperienceFormationDescription>
                      {t(`experiences.${experience.key}.description`)}
                    </ExperienceFormationDescription>
                    <SkillsList skills={experience.skills} />
                  </ExperienceFormationContent>
                </ExperienceFormation>
              );
            })}
            <Link to={t("linkResume")} target="__blank">
              {t("seeResume")}
              <ArrowForward />
            </Link>
          </SectionInfo>
          <SectionInfo>
            <SectionTitle>{t("formations.title")}</SectionTitle>
            {formations.map((formation) => {
              return (
                <ExperienceFormation key={formation.key}>
                  <SectionDate>
                    {t("general.date.monthAbbNameYear", {
                      date: formation.startDate,
                    })}{" "}
                    -{" "}
                    {t("general.date.monthAbbNameYear", {
                      date: formation.endDate,
                    })}
                  </SectionDate>
                  <ExperienceFormationContent>
                    <ExperienceFormationTitle href={formation.link}>
                      {formation.name}
                      {formation.link && <ArrowOutward />}
                    </ExperienceFormationTitle>
                    <ExperienceFormationRole>
                      {t(`formations.${formation.key}.course`)}
                    </ExperienceFormationRole>
                    <ExperienceFormationDescription>
                      {t(`formations.${formation.key}.description`)}
                    </ExperienceFormationDescription>
                  </ExperienceFormationContent>
                </ExperienceFormation>
              );
            })}
          </SectionInfo>
          <SectionInfo marginBottom="1rem">
            <SectionTitle>{t("projects.title")}</SectionTitle>
            {projectsHighlight.length === 0 && (
              <SectionDescription>
                {t("projects.noProjects")}
              </SectionDescription>
            )}
            <ProjectsList>
              {projectsHighlight.map((project) => (
                <ProjectItem key={project.key}>
                  <ProjectImage src={`./img/projects/${project.image}`} />
                  <ExperienceFormationTitle href={project.link}>
                    {t(`projects.list.${project.key}.title`)}
                    {project.link && <ArrowOutward />}
                  </ExperienceFormationTitle>
                  <p>{t(`projects.list.${project.key}.description`)}</p>
                </ProjectItem>
              ))}
            </ProjectsList>
            <Link to="/projects">
              {t("projects.seeMore")}
              <ArrowForward />
            </Link>
          </SectionInfo>
        </RightSide>
      </Content>
    </Container>
  );
}
