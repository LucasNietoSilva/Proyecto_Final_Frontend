import React, { useState } from "react";
import { toast } from "react-toastify";
import './consultas.css';


function Consultas(setAuth) {

    const [inputsConsultas, setInputsConsultas] = useState ({
        firstLastName: "",
        email: "",
        consultaClient: ""
    });

    const {firstLastName, email, consultaClient} = inputsConsultas;

    const onChange = (e) => {
        setInputsConsultas({...inputsConsultas, [e.target.id]: e.target.value });
        console.log(inputsConsultas);
    };
        
    const onSubmitConsult = async (e) => {
        e.preventDefault();

        try {
            const bodyConsulta = {firstLastName, email, consultaClient};
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bodyConsulta),
            });

            const parseResponse = await response.json();

            if (parseResponse.token) {
                localStorage.setItem("token", parseResponse.token)

                setAuth(true);
                toast.succes(
                    `Gracias por enviarnos tu consulta, ${parseResponse.name
                        .charAt(0)
                        .toUpperCase()}${parseResponse.name.substring(1)}!`
                )
            } else {
                setAuth(false);
                toast.error(parseResponse);
            }
    

        }
        catch (err) {
            console.error(err.message);
        }


    };



  return (
    <>
      <div className="container-form" onSubmit={onSubmitConsult}>
        <h1>Preguntanos sobre este inmueble..</h1>
        <div className="container-inputs">
          <input
            className="inputs-consulta"
            type="text"
            value={firstLastName}
            placeholder="Nombre y Apellido"
            onChange={e => onChange(e)}
          />
          <input
            className="inputs-consulta"
            type="text"
            value={email}
            placeholder="Direccion de Email"
            onChange={e => onChange(e)}
          />
        </div>
        <input
          className="inputs-consulta"
          type="text"
          value={consultaClient}
          placeholder="Ingrese su consulta.."
          onChange={e => onChange(e)}
        />
        <button type="submit" class="btn">
            Enviar
        </button>
      </div>
    </>
  );
}

export default Consultas;
