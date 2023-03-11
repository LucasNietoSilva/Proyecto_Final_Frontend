import React, { useState } from "react";
import "./login.css";
import Header from "../Header/Header";
import { login } from "../../api/Rule_auth";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

  const Login = ({setAuth}) => {
    const enter = useNavigate();
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const {email, password} = inputs;
    
    const onChange = e => {
        setInputs({...inputs, [e.target.name]: e.target.value});
        console.log(inputs);
    }; 

    const onSubmitForm = async(e) => {
        e.preventDefault();
         try {
             const body = {email, password};
             console.log(body);
             await login(body)
             .then((response) => {
               alert("Se ha logueado correctamente.");
             })
             .catch((error) => {
               console.log(error);
             });
     
        } catch (err) {
            console.error(err.message);
        }
        
       
    };

    

  return (
    <>
      <div className="fondo">
        <Header />
        <form className="form-login" onSubmit={onSubmitForm}>
          <h5>Ingresar</h5>

          <input
            className="holders"
            type="email"
            name="email"
            value={email}
            // pattern=".+@globex\.com"
            placeholder="Email..."
            required
            onChange={e => onChange(e)}
          />
          <input
            className="holders"
            type="password"
            name="password"
            value={password}
            placeholder="Contraseña..."
            required
            onChange={e => onChange(e)}
          />
          <button
            className="button-login"
            type="submit"
          >
            Ingresar
          </button>

          <p className="borde-blanco">
            ¿Eres nuevo?
            <a href="/register" id="registrate">
              ¡Regístrate!
            </a>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
