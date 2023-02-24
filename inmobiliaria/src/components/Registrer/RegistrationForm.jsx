import React, { useState } from "react";
import "./registrationform.css";
import Header from "../Header/Header";
import { registrarUsuario } from "../../api/Rule_register";

function RegistrationForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [date, setDate] = useState(null);
  const [departamento, setDepartamento] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

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

  const register = async (e) => {
    e.preventDefault();
    await login({ email: username, password: password })
      .then((response) => {
        history("/home");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <Header />
      <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="firstName">
              Nombre
            </label>
            <input
              className="form__input"
              type="text"
              value={firstName}
              onChange={(e) => InputChange(e)}
              id="firstName"
            />
          </div>
          <div className="lastname">
            <label className="form__label" for="lastName">
              Apellido
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
          <div className="email">
            <label className="form__label" for="email">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => InputChange(e)}
              id="email"
              className="form__input"
            />
          </div>
          <div className="date">
            <label className="form__label" for="date">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => InputChange(e)}
              id="date"
              className="form__input"
            />
          </div>
          <div className="departamento">
            <label className="form__label" for="departamento">
              Departamento
            </label>
            <select
              value={departamento}
              onChange={(e) => InputChange(e)}
              name="departamentos"
              id="dep"
            >
              <option value="artigas">Artigas</option>
              <option value="canelones">Canelones</option>
              <option value="cerroLargo">Cerro Largo</option>
              <option value="colonia">Colonia</option>
              <option value="durazno">Durazno</option>
              <option value="flores">Flores</option>
              <option value="florida">Florida</option>
              <option value="lavalleja">Lavalleja</option>
              <option value="maldonado">Maldonado</option>
              <option value="montevideo">Montevideo</option>
              <option value="paysandu">Paysandú</option>
              <option value="rionegro">Río Negro</option>
              <option value="rivera">Rivera</option>
              <option value="rocha">Rocha</option>
              <option value="salto">Salto</option>
              <option value="sanjose">San José</option>
              <option value="soriano">Soriano</option>
              <option value="tacuarembo">Tacuarembó</option>
              <option value="treintaytres">Treinta y Tres</option>
            </select>
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Contraseña
            </label>
            <input
              className="form__input"
              type="password"
              value={password}
              onChange={(e) => InputChange(e)}
              id="password"
            />
          </div>
          <div className="confirm-password">
            <label className="form__label" for="confirmPassword">
              Confirmar Contraseña{" "}
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
    </>
  );
}

export default RegistrationForm;
