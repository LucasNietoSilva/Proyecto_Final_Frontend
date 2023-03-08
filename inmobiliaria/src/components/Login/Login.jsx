import React, { useState } from "react";
import "./login.css";
import Header from "../Header/Header";
import { login } from "../../api/Rule_auth";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";

// function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [logueado, setLogueado] = useState("false");
  // const [body, setBody] = useState({email: '', password: ''});

  

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
            const response = await fetch("http://localhost:3000/login",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            );
                const parseRes = await response.json();

                if(parseRes.token) {
                    localStorage.setItem('token', parseRes.token);
                    setAuth(true);
                    toast.success(`Bienvenido, ${parseRes.name.charAt(0).toUpperCase()}${parseRes.name.substring(1,)}!`)
                } else {
                    setAuth(false);
                    toast.error(parseRes);
                }
              
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
            pattern=".+@globex\.com"
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

          <p>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </p>
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
