import React from "react";
import "./filter.css";

function Filter(props) {
  return (
    <div className="cont-filter">
      <select name="Departamento">
        <option value="defecto" selected disabled>
          Departamento
        </option>
        {props.deptos.map((propiedad, indice) => {
          return <option value="opcion">{propiedad}</option>;
        })}
      </select>
      <select name="Inmueble">
        <option value="defecto" selected disabled>
          Inmueble
        </option>
        {props.inmuebles.map((propiedad, indice) => {
          return <option value="opcion">{propiedad}</option>;
        })}
      </select>
      <select name="Estado">
        <option value="defecto" selected disabled>
          Estado
        </option>
        {props.estado.map((propiedad, indice) => {
          return <option value="opcion">{propiedad}</option>;
        })}
      </select>
      <select name="Dormitorios"></select>
    </div>
  );
}

export default Filter;
