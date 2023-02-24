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
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="https://senpaiacademy.com/" target="_blank">EMPRESA</a>
        </li>
        <li>
          <a href="https://senpaiacademy.com/blog/" target="_blank">SERVICIO</a>
        </li>
        <li>
          <a href="#">ESTUDIO</a>
        </li>
        <li>
          <a href="https://senpaiacademy.com/#contact" target="_blank">CONTACTO</a>
        </li>
      </nav>
    </>
  );
}

export default Nav;
