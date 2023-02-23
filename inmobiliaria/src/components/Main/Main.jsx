import React from "react";
import "./main.css";
import Cuadradito from "./cuadradito/Cuadradito";

function Lista(props) {
  return (
    <div className="cont-lista">
      {props.listaPublicaciones.map((propiedad, indice) => {
        return <Cuadradito key={indice} propiedad={propiedad} />;
      })}
    </div>
  );
}

export default Lista;
