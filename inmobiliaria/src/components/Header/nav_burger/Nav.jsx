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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Item 2</a>
        </li>
        <li>
          <a href="#">Item 3 </a>
        </li>
        <li>
          <a href="#">Item 4</a>
        </li>
      </nav>
    </>
  );
}

export default Nav;
