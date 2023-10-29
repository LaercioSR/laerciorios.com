import {
  BackButton,
  Container,
  Content,
  LanguageButton,
  MenuLeftSide,
  MenuRightSide,
  ThemeButton,
} from "./styles";
import DarkModeIcon from "./../../assets/dark-mode.svg?react";
import LightModeIcon from "./../../assets/light-mode.svg?react";
import NavigateBeforeIcon from "./../../assets/navigate-before.svg?react";
import { useTheme } from "../../hooks/useTheme";
import i18next from "i18next";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  function handleToggleLanguage(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    const nextLanguage = currentLanguage === "en" ? "pt" : "en";
    i18next.changeLanguage(nextLanguage);
    setCurrentLanguage(nextLanguage);
  }

  function handleToggleTheme(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    toggleTheme();
  }

  function handleGoBack(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <Container>
      <Content>
        <MenuLeftSide>
          {location.pathname !== "/" && (
            <BackButton onClick={handleGoBack}>
              <NavigateBeforeIcon />
            </BackButton>
          )}
        </MenuLeftSide>
        <MenuRightSide>
          <LanguageButton onClick={handleToggleLanguage}>
            {currentLanguage === "en" ? "pt" : "en"}
          </LanguageButton>
          <ThemeButton onClick={handleToggleTheme}>
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </ThemeButton>
        </MenuRightSide>
      </Content>
    </Container>
  );
}
