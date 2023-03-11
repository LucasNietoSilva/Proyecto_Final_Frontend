import React from "react";
import ButtonsHeader from "./Buttons/ButtonsHeader";
import "./header.css";
import Nav from "./nav_burger/Nav";
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <header>
        <div className="image">
          <Link to="/">
            <img className="img-header" src="/imgs/LogoSenpai_Inm_Blanco.png" alt="logo" />
          </Link>
        </div>
        <ButtonsHeader />
        <div className="container-nav">
          <Nav />
        </div>
      </header>
    </>
  );
}
export default Header;
