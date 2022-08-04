import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  border-bottom: solid 3px black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #767b8d;
  padding: 1rem;
`;

export const StyledLink = styled(Link)`
  border: solid black 3px;
  text-decoration: none;
  margin: 0.5rem;
  color: black;
  padding: 0.5rem;
  text-align: center;
`;
