import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  return (
    <div className="fondo">
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
        <button type="submit">Ingresar</button>

        <p>
          <a href="#">¿Olvidaste tu contraseña?</a>
        </p>
        <p className="borde-blanco">
          ¿Eres nuevo? 
          {/*         <Link to={sd}> */}
          <a href="#" id="registrate">
            ¡Regístrate!
          </a>
          {/*         </Link> */}
        </p>
      </section>
    </div>
  );
}

export default Login;
