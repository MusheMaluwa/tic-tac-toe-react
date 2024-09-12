import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 10px ${(props) => props.theme.colors.cream};
  height: 8rem;
  width: 8rem;
  cursor: pointer;
  padding: 1rem;


  &:hover {
    .IconX,
    .IconO{
      path {
        stroke: ${(props) => props.theme.colors.primary};
        stroke-width: 2;
      }
    }
  }
  &:hover {
    .outlineIconX,
    .outlineIconO{
      path {
        stroke: ${(props) => props.theme.colors.primary};
        stroke-width: 2;
      }
    }
  }
`;
