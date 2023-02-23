import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <div className="image">
          <img src="" alt="" />
        </div>
        <div>
          <h1>INMOBILIARIA</h1>
        </div>
        <div id="burger" onClick="enable()">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="nav-div">
          <nav className="nav">
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
          </nav>
        </div>
        <div>
            <button type="button">
                Registrarse
            </button>
        </div>
      </header>
    </>
  );
}

export default Header;
