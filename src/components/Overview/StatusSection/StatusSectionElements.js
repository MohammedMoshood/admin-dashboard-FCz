import styled from "styled-components";

export const StatusContainer = styled.div`
  width: 100%;
  max-width: 2280px;
  height: 100%;
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
export const OverallStatusTrendContainer = styled.div`
  height: 900px;
  @media screen and (max-width: 1280px) {
    height: 1320px;
  }
`;

export const StatusTrendsContainer = styled.div`
  width: 94%;
  max-width: 2280px;
  height: 850px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  background-color: white;
  border-radius: 15px;
  border: 1px lightgrey solid;
  display: flex;
  @media screen and (max-width: 1280px) {
    display: grid;
    height: 1300px;
  }
`;
export const TrendChartContainer = styled.div`
  width: 75%;
  height: 99%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  justify-content: center;
  align-items: center;
  border-right: lightgrey 1px solid;
  @media screen and (max-width: 1280px) {
  width: 100%;
  height: 700px ;
  border-right: none;

  }
`;
export const TodayWrap = styled.div`
  width: 100%;
  margin-top: 10px;
  display: grid;
  height: 20%;
`;
export const TrendTextWrap = styled.div`
  width: 30%;
  align-items: center;
  @media screen and (max-width: 1280px) {
    width: 50%;
  }
`;
export const TrendText = styled.h4`
  font-size: 36px;
  padding: 40px;
  font-weight: 500;
  color: #01080a;
 
`;
export const TrendDateWrap = styled.div`
  width: 30%;
  align-items: center;
  @media screen and (max-width: 1280px) {
    margin-top: 10px;
    width: 60%;
  }
`;
export const CurrentDate = styled.p`
  margin: -50px 40px;
  color: lightgrey;
  font-size: 18px;
`;

export const ChartWrap = styled.div``;
export const TrendInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 170px);
  text-align: center;
  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 120px);
    text-align: center;
  }
`;
export const TrendItem = styled.div`
  height: 100%;
  background-color: transparent;
  border-bottom: 1px solid lightgrey;
  width: 475px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  @media screen and (max-width: 1280px) {
    width: 100%;
    border-bottom: none;
    border-top: 1px solid lightgrey;
    border-top-right-radius: none;
    border-bottom-left-radius: 5px;
  }
`;
export const TrendInfoText = styled.h4`
  color: #b5b5b5;
  font-size: 26px;
  margin-top: 40px;
  font-weight: 400;
  @media screen and (max-width: 1280px) {
   margin-top: 20px;
  }
`;
export const TrendInfoRate = styled.p`
  color: #01080a;
  font-size: 36px;
  margin-top: 5px;
  font-weight: 500;
`;
