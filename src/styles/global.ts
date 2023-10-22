import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme["text"]};
    -webkit-font-smoothing: antialiased;
    transition: all 0.2s ease-in-out;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1 {
    color: ${(props) => props.theme["text"]};
  }

  a {
    text-decoration: none;
  }
`;
