import React from "react";
import { useNavigate } from "react-router-dom";
import "./cuadradito.css";

function Cuadradito(props) {
  const estado = () => {
    if (props.propiedad.estado === "Alquiler") {
      return "ALQUILA";
    }
    if (props.propiedad.estado === "Venta") {
      return "EN VENTA";
    } else {
      return;
    }
  };

  const viviendas = useNavigate();
    const vivienda = (e) => {
      e.preventDefault();
      console.log("has hecho click en vivienda");
      viviendas(`/buscar/${props.propiedad.propiedad_id}`)
    };

  return (
    <div className="card" onClick={vivienda}>
      <div className="img">
        <div className="estado">{estado(props.propiedad.estado)}</div>
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
          <label id="info-precio">U$D {props.propiedad.precio}</label>
        </div>
      </div>
    </div>
  );
}

export default Cuadradito;
