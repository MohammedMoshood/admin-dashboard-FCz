import styled from "styled-components";

import { MdClose } from "react-icons/md";
import { Link as LinkRouter } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  ::-webkit-scrollbar {
    width: 6px;
    background: #01080a;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #65bf76;
  }
  width: 17%;
  height: 100%;
  background-color: #01080a;
  display: grid;
  align-items: center;
  top: 0;
  overflow-y: scroll;
  z-index: 999;
  transition: 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (max-width: 1520px) {
    width: 30%;
    transition: 0.2s ease-in-out all;
  }
  @media screen and (max-width: 920px) {
    width: 40%;
    transition: 0.2s ease-in-out all;
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 0.6rem;
  right: 1.5rem;
  background: transparent;
  font-size: 3rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(MdClose)`
  color: white;
  &:hover {
    color: lightgreen;
  }
`;

export const SideBarWrapper = styled.div`
  margin-top: 60px;
  padding-bottom: 40px;
`;

export const SideBarLink = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5rem;
  width: 90%;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: grey;
  margin-top:20px;
  margin-left: 20px;
  padding:20px 30px;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-left: 15px;
  }

  &:hover {
    background: #65bf76;
    border-radius: 10px;
    color: #01080a;
    transition: all 0.1s ease-in-out;
    font-weight: 600;
  }
`;
export const SideIcon = styled.div`
  width: 20%;
  align-items: center;
  font-weight: 500;
  justify-self: flex-start;
  padding-top: 5px;
`;

export const SideText = styled.p`
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: left;
  margin-left: 30px;
  width: 80%;
  
`;

export const DropdownLink = styled(LinkRouter)`
  background-color: transparent;
  list-style: none;
  text-decoration: none;
  height: 60px;
  margin-top: 15px;
  padding-left: 6.5rem;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  &:hover {
    border-left: 5px solid lightgreen;
    background: #1f1f1e;
  }

  @media screen and (max-width: 768px) {
   width: 100%;
   padding-left: 5rem;
  }
`;
export const SubSidebarText = styled.span` 
  color: white;
  font-size: 20px ;
`;
