import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  min-height: calc(100vh - 6rem);
  display: flex;
  justify-content: center;
`;

export const Content = styled("div")`
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ListContainer = styled("div")`
  align-self: center;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 650px;
  }
`;
