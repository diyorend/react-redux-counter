import React from "react";
import Search from "./search";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Nav = () => {
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <NavStyled>
      <h2>
        Counter hidden:
        <span>{` ${!isLogged}`}</span>
      </h2>
      <Search />
    </NavStyled>
  );
};

const NavStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    color: aliceblue;
    text-shadow: 0px 0px 10px #000;
  }
`;

export default Nav;
