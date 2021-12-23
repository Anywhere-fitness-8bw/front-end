import styled from "styled-components";

export const StyledH1 = styled.h1`
    color: white;
`;

export const StyledH2 = styled.h2`
    color: white;
`;

export const StyledH3 = styled.h3`
    color: white;
`;

export const StyledContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color:  #FE6862;
  margin: 2rem 2rem;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const StyledClassOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

export const StyledContainerL = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto 5%;
    text-align: center;
`;

export const StyledContainerR = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto 5%;
    text-align: center;
`;

export const StyledButton = styled.button`
  min-width: 13%;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  color: #FE6862;
  transition: all .2s;
  margin-top: 3%;
  margin-bottom: 3.5%;

  &&:hover {
      cursor: pointer;
      background-color: white;
      transform: scale(1.125);
      color: #FE6862;
      transition: ease-in-out .2s;
      box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledImgs = styled.img`
    transition: all .2s;
    width: 25rem;
    height: 20rem;
    margin-top: 10%;

    &&:hover {
      cursor: pointer;
      transform: scale(1.05);
      transition: ease-in-out .2s;
      box-shadow: 10px 10px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledClassContainers = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`;