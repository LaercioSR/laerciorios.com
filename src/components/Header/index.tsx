import { ButtonTheme, Container, Content } from "./styles";
import DarkModeIcon from "./../../assets/dark-mode.svg?react";
import LightModeIcon from "./../../assets/light-mode.svg?react";
import { useTheme } from "../../hooks/useTheme";

export function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  function handleToggleTheme(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    toggleTheme();
  }

  return (
    <Container>
      <Content>
        <ButtonTheme onClick={handleToggleTheme}>
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </ButtonTheme>
      </Content>
    </Container>
  );
}
