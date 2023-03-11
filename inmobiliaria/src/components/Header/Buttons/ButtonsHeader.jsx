import React from "react";
import "./ButtonsHeader.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ButtonsHeader({ setAuth }) {
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

  const auth = localStorage.getItem('user');

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setAuth(false);
};


  return (
    <div className="container-buttons">

      
      <button type="button" onClick={login}>
        INICIAR SESION
      </button>
      <button type="button" onClick={register}>
        REGISTRARSE
      </button>
      
      <button type="button" onClick={e => logout(e)}>
        CERRAR SESIÓN
      </button>
  
     
    </div>
  );
}
export default ButtonsHeader;
