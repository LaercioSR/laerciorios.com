import { Link as ReactRouterDomLink } from "react-router-dom";
import styled from "styled-components";
import ChristmasCapIcon from "./../../assets/christmas-cap.svg?react";
import ExpandMore from "./../../assets/expand-more.svg?react";

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
  align-items: center;

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
  align-items: center;
  text-align: center;
  gap: 0.5rem;
`;

export const ProfileImageContainer = styled("div")`
  position: relative;
`;

export const ChristmasCap = styled(ChristmasCapIcon)`
  position: absolute;
  top: -1rem;
  left: 3.5rem;
`;

export const ProfileImage = styled("img")`
  border-radius: 50%;
  width: 15rem;
  border: 0.25rem solid ${(props) => props.theme.border};
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
  max-width: 30rem;
`;

export const SocialNetworks = styled("ul")`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    margin-bottom: 2rem;
  }
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

export const ExpandMoreButton = styled(ExpandMore)`
  fill: ${(props) => props.theme.text};
  opacity: 0.7;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const RightSide = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 2rem;
`;

interface SectionInfoProps {
  marginBottom?: string;
}

export const SectionInfo = styled("div")<SectionInfoProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "0")};
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

export const Link = styled(ReactRouterDomLink)`
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

export const ProjectsList = styled("ul")`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProjectItem = styled("li")`
  display: grid;
  gap: 0.5rem;

  a {
    grid-area: 1 / 1 / 2 / 2;
  }

  @media (min-width: 768px) {
    grid-template-columns: minmax(17.5rem, auto) 1fr;
    grid-column-gap: 1.5rem;

    a {
      grid-area: 1 / 2 / 2 / 3;
    }
  }
`;

export const ProjectImage = styled("img")`
  width: 100%;
  max-width: 17.5rem;
  height: 9.8rem;
  border-radius: 0.5rem;
  border: 0.09375rem solid ${(props) => props.theme.border};
  filter: brightness(80%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: brightness(100%);
  }

  @media (min-width: 768px) {
    grid-area: 1 / 1 / 3 / 2;
  }

  @media (min-width: 1024px) {
    width: 20rem;
    height: 11.25rem;
  }
`;
