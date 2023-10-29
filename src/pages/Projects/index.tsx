import { useTranslation } from "react-i18next";
import { Container, Content, ListContainer } from "./styles";
import { NestedList } from "../../components/NestedList";
import project from "../../data/projects.json";

export function Projects() {
  const { t } = useTranslation();
  const items = project.map((item) => {
    return {
      key: item.key,
      title: <h3>{t(`projects.list.${item.key}.title`)}</h3>,
      content: <p>{t(`projects.list.${item.key}.description`)}</p>,
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
