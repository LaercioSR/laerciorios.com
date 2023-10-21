import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
`;

export const Content = styled("div")`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.25rem;
`;

const HeaderButton = styled("button")`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 3rem;
  height: 3rem;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHeader};
  }
`;

export const ThemeButton = styled(HeaderButton)`
  svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-text);
  }
`;

export const LanguageButton = styled(HeaderButton)`
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
`;
