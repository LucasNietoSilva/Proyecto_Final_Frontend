import React from "react";
import "./cuadradito.css";

function Cuadradito(props) {
  return (
    <div className="card">
      <h5>{props.propiedad.tipo}</h5>
      <h5>{props.propiedad.departamento}</h5>
      <h5>{props.propiedad.estado}</h5>
      <h5>Dormitorios: {props.propiedad.dormitorios}</h5>
      <h5>{props.propiedad.barrio}</h5>
      <h5>{props.propiedad.precio}</h5>
      <img
        className="imagenPub"
        src={`./imgs/${props.propiedad.imagen}`}
        alt="imagen"
      ></img>
    </div>
  );
}

export default Cuadradito;
