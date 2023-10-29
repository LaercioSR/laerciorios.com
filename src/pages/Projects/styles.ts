import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  height: calc(100vh - 6rem);
  display: flex;
  justify-content: center;
`;

export const Content = styled("div")`
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem 2rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ListContainer = styled("div")`
  align-self: center;
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 6rem - 2rem - 2rem - 2rem);

  @media (min-width: 768px) {
    max-width: 650px;
  }
`;

export const ProjectInfos = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProjectInfo = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ProjectLink = styled("a")`
  text-decoration: none;
  color: ${(props) => props.theme.text};

  &:hover {
    text-decoration: underline;
  }
`;

export const BulletDivisor = styled("span")`
  content: "";
  width: 0.3rem;
  height: 0.3rem;
  background-color: ${(props) => props.theme.text};
  border-radius: 50%;
`;
