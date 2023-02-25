import React, { useState } from "react";
import "./login.css";
import Header from "../Header/Header";
import { login } from "../../api/Rule_auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const enter = useNavigate();

  const validateAccess = async (e) => {
    e.preventDefault();
    await login({ email: email, password: password })
      .then((response) => {
        enter("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="fondo">
        <Header />
        <section className="form-login">
          <h5>Ingresar</h5>

          <input
            className="holders"
            type="email"
            name="email"
            value={email}
            pattern=".+@globex\.com"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="holders"
            type="password"
            name="contraseña"
            value={password}
            placeholder="Contraseña..."
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="button-login"
            type="submit"
            onClick={validateAccess}
          >
            Ingresar
          </button>

          <p>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </p>
          <p className="borde-blanco">
            ¿Eres nuevo?
            <a href="/register" id="registrate">
              ¡Regístrate!
            </a>
          </p>
        </section>
      </div>
    </>
  );
}

export default Login;
