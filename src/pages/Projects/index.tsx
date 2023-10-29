import { useTranslation } from "react-i18next";
import {
  BulletDivisor,
  Container,
  Content,
  ListContainer,
  ProjectInfo,
  ProjectInfos,
  ProjectLink,
} from "./styles";
import { NestedList } from "../../components/NestedList";
import project from "../../data/projects.json";
import { SkillsList } from "../../components/SkillsList";

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
            <h4>{t("year")}: </h4>
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
        <h1>{t("projects.title")}</h1>
        <ListContainer>
          <NestedList items={items} />
        </ListContainer>
      </Content>
    </Container>
  );
}
