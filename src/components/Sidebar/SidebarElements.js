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
  left: 0;
  overflow-y: scroll;
  z-index: 999;
  transition: 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
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
    color: grey;
  }
`;

export const SideBarWrapper = styled.div`
  color: white;
  margin-top: 30px;
`;
export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(12, 90px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(11, 70px);
  }
`;
export const SideBarLink = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5rem;
  width: 90%;
  font-weight: 400;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: white;
  margin: 5px 20px;
  padding: 0 30px;

  &:hover {
    background: #65bf76;
    border-radius: 10px;
    color: #01080a;
    transition: all 0.1s ease-in-out;
    font-weight: 600;
  }
`;
