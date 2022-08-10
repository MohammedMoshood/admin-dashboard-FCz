import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 2280px;
  background: #f7fbff;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const LoginWrap = styled.img`
  width: 100%;
  margin: auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;
`;

export const LoginFormWrap = styled.div`
  width: 45%;
  height: 70%;
  justify-content: center;
  align-items: center;
  display: grid;
  border: 2px solid lightgreen;
  box-shadow: 10px 10px 70px 0 black;
  background: white;
  border-radius: 20px;
  position: absolute;
  @media screen and (max-width: 1900px) {
    width: 60%;
    justify-content: center;
    align-items: center;
    height: 70%;
  }
  @media screen and (max-width: 1280px) {
    width: 80%;
    justify-content: center;
    align-items: center;
    height: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    justify-content: center;
    align-items: center;
    height: 70%;
  }
`;

export const LoginTextWrap = styled.div`
  width: 100%;
  border: 2px dotted lightgreen;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  margin-top: 20px;
  @media screen and (max-width: 1280px) {
    width: 500px;
    height: 150px;
    justify-self: center;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1820px) {
    width: 500px;
    height: 150px;
    justify-self: center;
    justify-content: center;
    align-items: center;
  }
`;
export const LoginH = styled.h3`
  color: #01080a;
  padding-left: 20px;
  font-size: 36px;
  text-align: center;
  margin-top: 10px;
  @media screen and (max-width: 1280px) {
    text-align: left;
    font-size: 32px;
  }
  @media screen and (max-width: 1820px) {
    text-align: left;
    font-size: 32px;
  }
`;
export const LoginP = styled.p`
  padding-left: 20px;
  color: grey;
  font-size: 20px;
  text-align: center;
  @media screen and (max-width: 1280px) {
    text-align: left;
    font-size: 18px;
  }
  @media screen and (max-width: 1820px) {
    text-align: left;
    font-size: 18px;
  }
`;
export const LoginInputs = styled.form`
  width: fit-content;
  justify-content: center;
  align-items: center;
  display: grid;
  padding-bottom:100px;
`;
export const MailorMobileInput = styled.input`
  width: 800px;
  border: none;
  border-radius: 10px;
  border: 1px solid lightgrey;
  
  &:hover {
    border: solid 2px lightgreen;
  }
  @media screen and (max-width: 1280px) {
    width: 500px;
    height: 150px;
    justify-self: center;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1820px) {
    width: 500px;
    height: 150px;
    justify-self: center;
    justify-content: center;
    align-items: center;
  }
`;
export const PassInput = styled.input`
  width: 800px;
  border: none;
  border-radius: 10px;
  border: 1px solid lightgrey;
  &:hover {
    border: solid 2px lightgreen;
  }
  @media screen and (max-width: 1280px) {
    width: 500px;
    height: 150px;
    justify-self: center;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1820px) {
    width: 500px;
    height: 150px;
    justify-self: center;
    justify-content: center;
    align-items: center;
  }
`;

export const LoginButton = styled.button`
  width: 400px;
  height: 70px;
  border-radius: 50px;
  border: none;
  margin-left:  auto;
  margin-right: auto;
  margin-top: 80px;
  font-size: 30px;
  font-weight: 500;
  background: green;
  color: white;
  cursor: pointer;
  &:hover {
    background: lightgreen;
    color: #01080a;
    transition: 300ms ease-in-out all;
    border-radius: 50px solid white;
    width: 380px;
  }
`;
