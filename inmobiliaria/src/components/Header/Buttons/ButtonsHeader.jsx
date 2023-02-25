import React from "react";
import "./ButtonsHeader.css";
import { useNavigate } from "react-router-dom";

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
  return (
    <div className="container-buttons">
      <button type="button" onClick={login}>
        INICIAR SESION
      </button>
      <button type="button" onClick={register}>
        REGISTRARSE
      </button>
    </div>
  );
}
export default ButtonsHeader;
