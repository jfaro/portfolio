import React from "react";
import "./Header.css";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";

function Header() {
  return (
    <header>
      <HeaderLeft />
      <HeaderRight />
    </header>
  );
}

export default Header;
