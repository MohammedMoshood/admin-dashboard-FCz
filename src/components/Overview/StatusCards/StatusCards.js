import React from 'react'
import {StatusCardContainer , StatusCardWrapper, StatusRate, StatusText, StatusTextWrap} from "./StatusCardElements"

const StatusCards = ({status , rate}) => {
  return (
    <StatusCardContainer>
        <StatusCardWrapper>
            <StatusTextWrap>
                <StatusText> {status} </StatusText>
            </StatusTextWrap>
            <StatusRate>
                {rate}
            </StatusRate>
        </StatusCardWrapper>
    </StatusCardContainer>
  )
}

export default StatusCards