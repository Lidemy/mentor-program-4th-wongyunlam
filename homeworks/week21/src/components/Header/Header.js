import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const HeaderContainer = styled.div`
  background-color: white;
  height: 126px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0px 32px;
  box-sizing: border-box;
`;

const Brand = styled.div`
  font-size: 48px;
`;

const NavbarList = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

const Nav = styled(Link)`
  color: black;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;

  ${(props) => props.$active && `background: rgba(0, 0, 0, 0.1);`}

  & + & {
    margin-left: 8px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function App() {
  const location = useLocation();
  return (
    <HeaderContainer>
      <LeftContainer>
        <Brand>部落格</Brand>
        <NavbarList>
          <Nav to="/" $active={location.pathname === "/"}>
            首頁
          </Nav>
          <Nav to="/new-post" $active={location.pathname === "/new-post"}>
            發佈文章
          </Nav>
        </NavbarList>
      </LeftContainer>
      <NavbarList>
        <Nav to="/login" $active={location.pathname === "/login"}>
          登入
        </Nav>
      </NavbarList>
    </HeaderContainer>
  );
}
