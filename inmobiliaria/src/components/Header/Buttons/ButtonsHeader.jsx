import React from "react";
import "./ButtonsHeader.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ButtonsHeader() {
  
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    console.log("apretaste login");
    navigate("/login");
  };
  const register = (e) => {
    e.preventDefault();
    navigate("/register");
  };
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="container-buttons">
      <button className="button-header" type="button" onClick={login}>
        INICIAR SESION
      </button>
      <button className="button-header" type="button" onClick={register}>
        REGISTRARSE
      </button>

      <button type="button" onClick={logout}>
        CERRAR SESIÓN
      </button>
    </div>
  );
}
export default ButtonsHeader;
