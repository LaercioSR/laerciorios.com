import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
`;

export const List = styled("ul")`
  list-style-type: none;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Item = styled("li")`
  padding: 0.5rem 0.75rem;
  border-radius: 99999px;
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.buttonText};
`;
