import React, { useState } from "react";
import {
  DropdownLink,
  SideBarLink,
  SideIcon,
  SideText,
  SubSidebarText
} from "./SidebarElements";
import styled from "styled-components"



const MenuItem = ({ item }) => {
  const [subSidebar, setSubSidebar] = useState(false);

  const showSubSidebar = () => setSubSidebar(!subSidebar);
  const ArrowStyle = styled.div`
    margin-left: 50px;
    margin-top: 5px;
    @media screen and (max-width:768px) {
      margin-left: 10px;
    }
  `
  return (
    <>
      <SideBarLink to={item.path} onClick={item.subSidebar && showSubSidebar}>
        <div style={{display:"flex"}}>
          <SideIcon>{item.icon}</SideIcon>
          <SideText>{item.title}</SideText>
        </div>
        <ArrowStyle>
          {item.subSidebar && subSidebar
            ? item.iconOpened
            : item.subSidebar
            ? item.iconClosed
            : null}
        </ArrowStyle>
      </SideBarLink>

      {subSidebar &&
        item.subSidebar.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SubSidebarText>{item.title}</SubSidebarText>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default MenuItem;
