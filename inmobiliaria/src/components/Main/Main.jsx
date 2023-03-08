import React from "react";
import "./main.css";
import Cuadradito from "./cuadradito/Cuadradito";

function Lista(props) {
  const msjLiVacia =
    "Tu búsqueda no coincide con ninguna de nuestras publicaciones!";

  return (
    <div>
      {props.listaPublicaciones.length === 0 ? (
        <p id="mensaje-lista-vacia">{msjLiVacia}</p>
      ) : (
        <div className="cont-lista">
          {props.listaPublicaciones.map((propiedad, indice) => {
            return <Cuadradito key={indice} propiedad={propiedad} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Lista;
