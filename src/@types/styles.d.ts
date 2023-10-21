import "styled-components";

type ThemeType = {
  background: string;
  text: string;
  button: string;
  buttonText: string;
};

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
