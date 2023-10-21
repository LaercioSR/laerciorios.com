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
} from "./styles";
import { Header } from "../../components/Header";

export function Home() {
  const { t } = useTranslation();

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
