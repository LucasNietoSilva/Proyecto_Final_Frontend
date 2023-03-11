import React, { useState } from "react";
import "./registrationform.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { registrarUsuario } from "../../api/Rule_register";
import { toast } from "react-toastify";

// function RegistrationForm() {
//   const [firstName, setFirstName] = useState(null);
//   const [lastName, setLastName] = useState(null);
//   const [date, setDate] = useState(null);
//   const [email, setEmail] = useState(null);
//   const [password, setPassword] = useState(null);
//   const [confirmPassword, setConfirmPassword] = useState(null);

//   const InputChange = (e) => {
//     const { id, value } = e.target;
//     if (id === "firstName") {
//       setFirstName(value);
//     }
//     if (id === "lastName") {
//       setLastName(value);
//     }
//     if (id === "email") {
//       setEmail(value);
//     }
//     if (id === "date") {
//       setDate(value);
//     }
//     if (id === "departamento") {
//       setDepartamento(value);
//     }
//     if (id === "password") {
//       setPassword(value);
//     }
//     if (id === "confirmPassword") {
//       setConfirmPassword(value);
//     }
//   };

// const navHome = useNavigate();

// const register = async (e) => {
//   e.preventDefault();
//   await registrarUsuario({
//     email: email,
//     password: password,
//     nombre: firstName,
//     apellido: lastName,
//     fecha_nacimiento: date,
//     departamento: departamento,
//   })
//     .then((response) => {
//       navHome("/");
//     })
//     .catch((error) => {
//       alert(error);
//     });
// };

const RegistrationForm = () => {
  const [inputs, setInputs] = useState({
    nombre: "",
    apellido: "",
    email: "",
    fecha_nacimiento: "",
    password: "",
    confirmPassword: "",
  });

  const captureSelect = (e) => {
    setDepartamento(e.target.value);
    console.log(e.target.value);
  };

  const { nombre, apellido, email, fecha_nacimiento, password, confirmPassword } =
    inputs;

  const [departamento, setDepartamento] = useState(null);

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
    console.log(inputs);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {
        nombre,
        apellido,
        email,
        fecha_nacimiento,
        departamento,
        password,
        confirmPassword,
      };
      console.log(body);

      await registrarUsuario(body)
        .then((response) => {
          alert("Se ha registrado correctamente.");
        })
        .catch((error) => {
          console.log(error);
        });
     
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="div-tamaño">
      <Header />
      <form className="form" onSubmit={onSubmitForm}>
        <div className="form-body">
          <div className="username label-input">
            <label className="form__label" for="nombre">
              Nombre:
            </label>
            <input
              className="form__input"
              type="text"
              value={nombre}
              onChange={(e) => onChange(e)}
              id="nombre"
            />
          </div>
          <div className="lastname label-input">
            <label className="form__label" for="apellido">
              Apellido:
            </label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => onChange(e)}
              id="apellido"
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
              onChange={(e) => onChange(e)}
              id="email"
              className="form__input"
            />
          </div>
          <div className="date label-input">
            <label className="form__label" for="fecha_nacimiento">
              Fecha de Nacimiento:
            </label>
            <input
              type="date"
              value={fecha_nacimiento}
              onChange={(e) => onChange(e)}
              id="fecha_nacimiento"
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
              onChange={(e) => onChange(e)}
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
              onChange={(e) => onChange(e)}
              id="confirmPassword"
            />
          </div>
        </div>
        <div class="footer">
          <button type="submit" class="btn">
            Registrarse
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default RegistrationForm;
