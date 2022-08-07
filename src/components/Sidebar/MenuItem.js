import React from 'react'
import { SideBarLink, SideIcon, SideText  } from './SidebarElements';

const MenuItem = ({item}) => {
  return (
    <SideBarLink  to={item.path}>
      <SideIcon>{item.icon}</SideIcon>
      <SideText>{item.title}</SideText>
    </SideBarLink>
  );
}

export default MenuItem