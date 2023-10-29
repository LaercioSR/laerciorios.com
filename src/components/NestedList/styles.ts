import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.nestedList};
  overflow-y: scroll;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.nestedListHover};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.nestedList};
  }
`;

export const List = styled("ul")`
  list-style-type: none;
`;

export const Item = styled("li")`
  border-top: 1px solid ${(props) => props.theme.nestedListBorder};
  border-bottom: 1px solid ${(props) => props.theme.nestedListBorder};
`;

export const ItemTitle = styled("div")`
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  svg {
    fill: ${(props) => props.theme.text};
  }

  &:hover {
    background-color: ${(props) => props.theme.nestedListHover};
  }
`;

interface ItemContentProps {
  isOpen: boolean;
}

export const ItemContent = styled("ul")<ItemContentProps>`
  padding: 1rem 3rem;
  border-top: 1px solid ${(props) => props.theme.nestedListBorder};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;
