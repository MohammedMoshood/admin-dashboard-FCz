import React from "react";
import {
  StatusCard1,
  StatusCard2,
  StatusCard3,
  StatusCard4,
} from "../StatusCards/StatusCardData";
import StatusCards from "../StatusCards/StatusCards";
import {
  StatusContainer,
  StatusTrendsContainer,
  TrendChartContainer,
  TrendTextWrap,
  TrendDateWrap,
  TrendText,
  CurrentDate,
  TodayWrap,
  ChartWrap ,
  TrendInfoContainer,TrendInfoRate,TrendInfoText,TrendItem , 
  OverallStatusTrendContainer
} from "./StatusSectionElements";

const StatusSection = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
    // var ampm = hours >= 12 ? "pm" : "am";
  const currentDate = new Date();
  const ampm = currentDate.getHours() >= 12 ? "PM" :"AM" ;
  const date = `as of ${currentDate.getDate()}th ${
    month[currentDate.getMonth()]
  } ${currentDate.getFullYear()} , ${currentDate.getHours()} : ${currentDate.getMinutes()}${ampm}`;

  return (
    <>
      <StatusContainer>
        <StatusCards {...StatusCard1}></StatusCards>
        <StatusCards {...StatusCard2}></StatusCards>
        <StatusCards {...StatusCard3}></StatusCards>
        <StatusCards {...StatusCard4}></StatusCards>
      </StatusContainer>
      <OverallStatusTrendContainer>
        <StatusTrendsContainer>
          <TrendChartContainer>
            <TodayWrap>
              <TrendTextWrap>
                <TrendText>Today's trends</TrendText>
              </TrendTextWrap>
              <TrendDateWrap>
                <CurrentDate>{date}</CurrentDate>
              </TrendDateWrap>
            </TodayWrap>
            <ChartWrap></ChartWrap>
          </TrendChartContainer>
          <TrendInfoContainer>
            <TrendItem>
              <TrendInfoText>Resolved</TrendInfoText>
              <TrendInfoRate>449</TrendInfoRate>
            </TrendItem>
            <TrendItem>
              <TrendInfoText>Recieved</TrendInfoText>
              <TrendInfoRate>426</TrendInfoRate>
            </TrendItem>
            <TrendItem>
              <TrendInfoText>Average first response timee </TrendInfoText>
              <TrendInfoRate>33m</TrendInfoRate>
            </TrendItem>
            <TrendItem>
              <TrendInfoText>Average response time</TrendInfoText>
              <TrendInfoRate>3h 8m</TrendInfoRate>
            </TrendItem>
            <TrendItem style={{ borderBottom: "0px" }}>
              <TrendInfoText>Resolution within SLA</TrendInfoText>
              <TrendInfoRate>94%</TrendInfoRate>
            </TrendItem>
          </TrendInfoContainer>
        </StatusTrendsContainer>
      </OverallStatusTrendContainer>
    </>
  );
};

export default StatusSection;
