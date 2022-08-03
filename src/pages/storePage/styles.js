import styled from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #282c34;
`;

export const StyledCard = styled.article`
  display: flex;
  background-color: white;
  flex-direction: column;
  border: solid black 3px;
  color: grey;
  margin: auto;
  margin-bottom: 2rem;
  width: 30%;
  height: 25rem;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  position: relative;

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledBtn = styled.button`
  background-color: white;
  border: black solid 3px;
  border-radius: 15px;
  position: absolute;
  bottom: 1rem;

  :hover {
    transform: scale(1, 1.2);
  }
`;

export const StyledImage = styled.img`
  height: 50%;
  width: 50%;
  object-fit: contain;
`;

export const StyledParagraph = styled.p`
  font-size: 1rem;
`;
