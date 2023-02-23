import React from "react";
import ButtonsHeader from "./Buttons/ButtonsHeader";
import "./header.css";
import Nav from "./nav_burger/Nav";
import NavList from "./nav_list/NavList";

function Header() {
  return (
    <>
      <header>
        <div className="image">
          <img src="./imgs/LogoSenpai_Inm_Blanco.png" alt="logo" />
        </div>
        {/* <div className="container-nav">
          <NavList />
        </div> */}
        <ButtonsHeader />
        <div className="container-nav">
          
          <Nav />
        </div>
      </header>
    </>
  );
}

export default Header;