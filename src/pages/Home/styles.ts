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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

export const SocialNetworks = styled("ul")`
  list-style-type: none;
  display: flex;
  gap: 0.25rem;
  margin-bottom: 2rem;
`;

export const SocialNetworkItem = styled("li")`
  width: 3rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.buttonHeader};

    svg {
      opacity: 0.9;
    }
  }
`;

export const SocialNetworkLink = styled("a")`
  svg {
    width: 2rem;
    fill: ${(props) => props.theme.text};
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
  }
`;
