import React, { useState } from "react";
import "./nav.css";

function Nav() {
  const [menu, setMenu] = useState(false);
  const [animationBurger, setAnimationBurger] = useState(false)
 

  const animationNavbar = () => {
    setAnimationBurger (!animationBurger)
    setMenu(!menu);
  }


  return (
    <>
      <div className={`burger ${animationBurger ? "open" : ""}`} onClick={animationNavbar}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav ${menu ? "nav-open" : ""}`} id="nav">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Empresa</a>
        </li>
        <li>
          <a href="#">Servicios</a>
        </li>
        <li>
          <a href="#">Estudio</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
          <a href="#">Administrar</a>
        </li>
      </nav>
    </>
  );
}

export default Nav;
