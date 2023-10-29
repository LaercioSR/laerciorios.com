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

  @media (min-width: 1024px) {
    display: none;
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

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

export const ProjectLink = styled("a")`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  display: flex;
  gap: 0.25rem;
  align-items: center;

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

export const BulletDivisor = styled("span")`
  content: "";
  width: 0.3rem;
  height: 0.3rem;
  background-color: ${(props) => props.theme.text};
  border-radius: 50%;
`;

export const Table = styled("table")`
  display: none;
  border-collapse: collapse;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.text}CC;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.background};
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const TableRow = styled("tr")`
  border-bottom: 1px solid ${(props) => props.theme.text};
`;

export const TableHeader = styled("thead")``;

export const TableHeaderCell = styled("th")`
  padding-bottom: 1rem;
`;

export const TableBody = styled("tbody")``;

interface TableBodyCellProps {
  width?: string;
  align?: string;
}

export const TableBodyCell = styled("td")<TableBodyCellProps>`
  width: ${(props) => props.width ?? "auto"};
  padding: 1rem 0.5rem;
  align-self: ${(props) => props.align ?? "auto"};

  li {
    margin-top: 0.5rem;
  }
`;
