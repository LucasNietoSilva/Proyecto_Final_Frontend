import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Login() {
  const [password, setPassword] = useState("");
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
            pattern=".+@globex\.com"
            placeholder="Email"
            required
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
          <button className="button-login" type="submit">
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
      <Footer/>
    </>
  );
}

export default Login;
