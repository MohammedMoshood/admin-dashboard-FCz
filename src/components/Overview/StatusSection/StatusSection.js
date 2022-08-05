import React from 'react'
import { StatusCard1, StatusCard2 , StatusCard3 , StatusCard4 } from '../StatusCards/StatusCardData';
import StatusCards from '../StatusCards/StatusCards';
import { StatusContainer } from './StatusSectionElements';



const StatusSection = () => {
  return (
    <StatusContainer>
      <StatusCards {...StatusCard1}></StatusCards>
      <StatusCards {...StatusCard2}></StatusCards>
      <StatusCards {...StatusCard3}></StatusCards>
      <StatusCards {...StatusCard4}></StatusCards>
    </StatusContainer>
  );
}

export default StatusSection