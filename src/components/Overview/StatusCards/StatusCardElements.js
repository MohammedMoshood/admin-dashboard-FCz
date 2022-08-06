import styled from "styled-components";

export const StatusCardContainer = styled.div`
  width: 20%;
  background-color: lightgrey;
  height: 210px;
  margin: 0 60px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 1px solid lightgreen;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 80px;
    display: flex;
    margin: 40px;
  }
`;
export const StatusText = styled.h4`
  font-size: 30px;
  color: #c7c5c5;
  font-weight: 500;
  padding-top: 40px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    color: #c7c5c5;
    font-weight: 500;
    margin-bottom: 40px;
    padding-top: 20px;
  }
`;
export const StatusRate = styled.p`
  font-size: 60px;
  text-align: center;
  color: #01080a;
  font-weight: 600;
`;
export const StatusCardWrapper = styled.div`
  width: 100%;
  background-color: white;
  height: 210px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: 0.1rem solid lightgrey;
  @media screen and (max-width: 768px) {
    width: 398px;
    height: 88px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
 

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid #419652;
    color: #419652;

    ${StatusText}{
        color: #5de35d ;
    }
    ${StatusRate}{
        color: #5de35d ;
    }
  }
`;

export const StatusTextWrap = styled.div`
  height: 100px;
  text-align: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width:768px) {
    height: 100%;
    width: 60%;
    justify-self: flex-start;
    text-align: left;
    align-items: center;
  }
`;


