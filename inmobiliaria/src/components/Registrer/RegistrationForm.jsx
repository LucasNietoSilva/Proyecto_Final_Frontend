import React, { useState } from "react";
import "./registrationform.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { registrarUsuario } from "../../api/Rule_register";

function RegistrationForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [date, setDate] = useState(null);
  const [departamento, setDepartamento] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const captureSelect = (e) => {
    setDepartamento(e.target.value);
    console.log(e.target.value);
  };

  const InputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "date") {
      setDate(value);
    }
    if (id === "departamento") {
      setDepartamento(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const navHome = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    await registrarUsuario({
      email: email,
      password: password,
      nombre: firstName,
      apellido: lastName,
      fecha_nacimiento: date,
      departamento: departamento,
    })
      .then((response) => {
        navHome("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="div-tamaño">
      <Header />
      <div className="form">
        <div className="form-body">
          <div className="username label-input">
            <label className="form__label" for="firstName">
              Nombre:
            </label>
            <input
              className="form__input"
              type="text"
              value={firstName}
              onChange={(e) => InputChange(e)}
              id="firstName"
            />
          </div>
          <div className="lastname label-input">
            <label className="form__label" for="lastName">
              Apellido:
            </label>
            <input
              type="text"
              name=""
              value={lastName}
              onChange={(e) => InputChange(e)}
              id="lastName"
              className="form__input"
            />
          </div>
          <div className="email label-input">
            <label className="form__label" for="email">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => InputChange(e)}
              id="email"
              className="form__input"
            />
          </div>
          <div className="date label-input">
            <label className="form__label" for="date">
              Fecha de Nacimiento:
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => InputChange(e)}
              id="date"
              className="form__input fecha"
            />
          </div>
          <div className="departamento label-input">
            <label className="form__label" for="departamento">
              Departamento:
            </label>
            <select
              value={departamento}
              onChange={captureSelect}
              name="departamentos"
              id="dep"
            >
              <option value="Artigas">Artigas</option>
              <option value="Canelones">Canelones</option>
              <option value="Cerro Largo">Cerro Largo</option>
              <option value="Colonia">Colonia</option>
              <option value="Durazno">Durazno</option>
              <option value="Flores">Flores</option>
              <option value="Florida">Florida</option>
              <option value="Lavalleja">Lavalleja</option>
              <option value="Maldonado">Maldonado</option>
              <option value="Montevideo">Montevideo</option>
              <option value="Paysandu">Paysandú</option>
              <option value="Rio Negro">Río Negro</option>
              <option value="Rivera">Rivera</option>
              <option value="Rocha">Rocha</option>
              <option value="Salto">Salto</option>
              <option value="San Jose">San José</option>
              <option value="Soriano">Soriano</option>
              <option value="Tacuarembo">Tacuarembó</option>
              <option value="Treinta y Tres">Treinta y Tres</option>
            </select>
          </div>
          <div className="password label-input">
            <label className="form__label" for="password">
              Contraseña:
            </label>
            <input
              className="form__input"
              type="password"
              value={password}
              onChange={(e) => InputChange(e)}
              id="password"
            />
          </div>
          <div className="confirm-password label-input">
            <label className="form__label" for="confirmPassword">
              Confirmar contraseña:{" "}
            </label>
            <input
              className="form__input"
              type="password"
              value={confirmPassword}
              onChange={(e) => InputChange(e)}
              id="confirmPassword"
            />
          </div>
        </div>
        <div class="footer">
          <button onClick={register} type="submit" class="btn">
            Registrarse
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegistrationForm;
