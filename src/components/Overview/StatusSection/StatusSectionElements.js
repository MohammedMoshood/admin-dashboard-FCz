import styled from "styled-components";

export const StatusContainer = styled.div`
  width: 100%;
  max-width: 2280px;
  height: "500px";
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  @media screen and (max-width: 768px) {
    display: grid;
    padding-top: 50px;
    padding-bottom: 50px;
    align-items: center;
    justify-content: center;
    height: "1000px";
  }
`;
