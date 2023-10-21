import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled("div")`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LeftSide = styled("div")`
  width: 400px;
  height: calc(100vh - 6rem);
`;

export const RightSide = styled("div")`
  width: 600px;
`;

export const ProfileInfo = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProfileName = styled("h1")`
  color: ${(props) => props.theme.text};
`;

export const ProfileProfession = styled("h2")`
  color: ${(props) => props.theme.text};
  opacity: 0.7;
`;

export const ProfileDescription = styled("p")`
  color: ${(props) => props.theme.text};
  opacity: 0.5;
`;
