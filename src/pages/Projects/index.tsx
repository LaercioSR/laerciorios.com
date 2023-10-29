import { useTranslation } from "react-i18next";
import {
  BulletDivisor,
  Container,
  Content,
  ListContainer,
  ProjectInfo,
  ProjectInfos,
  ProjectLink,
  Table,
  TableBody,
  TableBodyCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "./styles";
import { NestedList } from "../../components/NestedList";
import project from "../../data/projects.json";
import { SkillsList } from "../../components/SkillsList";
import ArrowOutward from "./../../assets/arrow-outward.svg?react";

export function Projects() {
  const { t } = useTranslation();
  const items = project.map((item) => {
    return {
      key: item.key,
      title: <h3>{t(`projects.list.${item.key}.title`)}</h3>,
      content: (
        <ProjectInfos>
          <ProjectInfo>
            <h4>{t(`projects.type.${item.type}`)}</h4>
            {item.bond && (
              <>
                <BulletDivisor />
                <h4>{item.bond}</h4>
              </>
            )}
          </ProjectInfo>
          <ProjectInfo>
            <h4>{t("projects.columns.year")}: </h4>
            <p>{item.year}</p>
          </ProjectInfo>
          <ProjectInfo>
            <ProjectLink href={item.link} target="__blanket">
              {item.link}
            </ProjectLink>
          </ProjectInfo>
          <p>{t(`projects.list.${item.key}.description`)}</p>
          <SkillsList skills={item.skills} />
        </ProjectInfos>
      ),
    };
  });

  return (
    <Container>
      <Content>
        <h1>{t("projects.titlePage")}</h1>
        <ListContainer>
          <NestedList items={items} />
        </ListContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>{t("projects.columns.year")}</TableHeaderCell>
              <TableHeaderCell>{t("projects.columns.title")}</TableHeaderCell>
              <TableHeaderCell>{t("projects.columns.bond")}</TableHeaderCell>
              <TableHeaderCell>{t("projects.columns.link")}</TableHeaderCell>
              <TableHeaderCell>
                {t("projects.columns.description")}
              </TableHeaderCell>
              {/* <TableHeaderCell>{t("projects.columns.skills")}</TableHeaderCell> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {project.map((item) => {
              return (
                <TableRow key={item.key}>
                  <TableBodyCell>
                    <ProjectInfo>{item.year}</ProjectInfo>
                  </TableBodyCell>
                  <TableBodyCell width="180px" align="center">
                    <h4>{t(`projects.list.${item.key}.title`)}</h4>
                  </TableBodyCell>
                  <TableBodyCell align="center">
                    <ProjectInfo>
                      <p>{t(`projects.type.${item.type}`)}</p>
                      {item.bond && (
                        <>
                          <BulletDivisor />
                          <p>{item.bond}</p>
                        </>
                      )}
                    </ProjectInfo>
                  </TableBodyCell>
                  <TableBodyCell>
                    <ProjectLink href={item.link} target="__blanket">
                      {item.link}
                      <ArrowOutward />
                    </ProjectLink>
                  </TableBodyCell>
                  <TableBodyCell>
                    <p>{t(`projects.list.${item.key}.description`)}</p>
                    <SkillsList skills={item.skills} />
                  </TableBodyCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Content>
    </Container>
  );
}
