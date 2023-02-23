import React from "react";
import "./cuadradito.css";

function Cuadradito(props) {
  return (
    <div className="card">
      <div className="img">
        <img
          className="imagenPub"
          src={`./imgs/${props.propiedad.imagen}`}
          alt="imagen"
        ></img>
      </div>
      <div className="cont-info">
        <div className="info-left">
          <h5>{props.propiedad.tipo}</h5>
          <h5>{props.propiedad.departamento}</h5>
          <h5>{props.propiedad.estado}</h5>
        </div>
        <div className="info-right">
          <h5>Dormitorios: {props.propiedad.dormitorios}</h5>
          <h5>{props.propiedad.barrio}</h5>
          <h5>{props.propiedad.precio}</h5>
        </div>
      </div>
    </div>
  );
}

export default Cuadradito;
