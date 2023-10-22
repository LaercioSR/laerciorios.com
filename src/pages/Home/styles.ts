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
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    position: relative;
  }
`;

export const LeftSide = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 1024px) {
    min-width: 350px;
    width: 350px;
    height: calc(100vh - 6rem);
    justify-content: space-between;
    position: sticky;
    top: 6rem;
  }
`;

export const ProfileInfo = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

export const RightSide = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 2rem;
`;

export const SectionInfo = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionTitle = styled("h2")`
  margin-bottom: 0.125rem;
`;

export const SectionDescription = styled("p")`
  white-space: pre-line;
  opacity: 0.8;
`;

export const SectionHighlight = styled("span")`
  font-weight: 700;
`;

export const ExperienceFormation = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0.5rem;
  }
`;

export const ExperienceFormationContent = styled("div")``;

export const SectionDate = styled("p")`
  opacity: 0.8;
  text-transform: uppercase;
  font-weight: 700;

  @media (min-width: 768px) {
    min-width: 12rem;
  }
`;

export const ExperienceFormationTitle = styled("a")`
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  display: flex;
  gap: 0.25rem;
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease-in-out;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: ${(props) => props.theme.text};
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover {
    svg {
      opacity: 1;
    }
    text-decoration: underline;
  }
`;

export const ExperienceFormationRole = styled("p")`
  font-weight: 700;
  opacity: 0.7;
`;

export const ExperienceFormationDescription = styled("p")`
  white-space: pre-line;
  margin: 0.5rem 0;
`;

export const SkillsList = styled("ul")`
  list-style-type: none;
  display: flex;
  gap: 0.25rem;
`;

export const SkillItem = styled("li")`
  padding: 0.5rem 0.75rem;
  border-radius: 99999px;
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.buttonText};
`;

export const LinkResume = styled("a")`
  color: ${(props) => props.theme.text};
  text-decoration: underline;
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: opacity 0.2s ease-in-out;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: ${(props) => props.theme.text};
  }

  &:hover {
    opacity: 1;
  }
`;
