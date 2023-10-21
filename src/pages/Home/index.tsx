import { useTranslation } from "react-i18next";
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
} from "./styles";
import { Header } from "../../components/Header";
import GithubLogo from "./../../assets/github.svg?react";
import EmailLogo from "./../../assets/gmail.svg?react";
import HackerrankLogo from "./../../assets/hackerrank.svg?react";
import LeetCodeLogo from "./../../assets/leetcode.svg?react";
import LinkedinLogo from "./../../assets/linkedin.svg?react";
import XLogo from "./../../assets/x.svg?react";

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

  return (
    <Container>
      <Header />
      <Content>
        <LeftSide>
          <ProfileInfo>
            <ProfileName>Laercio de Souza Rios</ProfileName>
            <ProfileProfession>{t("profession")}</ProfileProfession>
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil illo
          culpa magni labore animi reiciendis corporis odio quod vero beatae
          consequatur maxime iusto deleniti, dignissimos dolorem explicabo
          tempora quos? Corporis. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Nihil illo culpa magni labore animi reiciendis
          corporis odio quod vero beatae consequatur maxime iusto deleniti,
          dignissimos dolorem explicabo tempora quos? Corporis. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Nihil illo culpa magni
          labore animi reiciendis corporis odio quod vero beatae consequatur
          maxime iusto deleniti, dignissimos dolorem explicabo tempora quos?
          Corporis.
        </RightSide>
      </Content>
    </Container>
  );
}
