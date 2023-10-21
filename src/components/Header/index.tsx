import { Container, Content, LanguageButton, ThemeButton } from "./styles";
import DarkModeIcon from "./../../assets/dark-mode.svg?react";
import LightModeIcon from "./../../assets/light-mode.svg?react";
import { useTheme } from "../../hooks/useTheme";
import i18next from "i18next";
import { useState } from "react";

export function Header() {
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

  return (
    <Container>
      <Content>
        <LanguageButton onClick={handleToggleLanguage}>
          {currentLanguage}
        </LanguageButton>
        <ThemeButton onClick={handleToggleTheme}>
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </ThemeButton>
      </Content>
    </Container>
  );
}
