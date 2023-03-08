import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./filter.css";
import { useState } from "react";

function Filter(props) {
  const animatedComponents = makeAnimated();
  const options = props.dormitorios.map((propiedad, indice) => {
    return { value: propiedad, label: propiedad };
  });
  /* options.push({ value: "all", label: "TODOS" }); */

  const [depto, setDepto] = useState("");
  const [inmueble, setInmueble] = useState("");
  const [estado, setEstado] = useState("");
  const [dormitorios, setDormitorios] = useState();

  const onChangeDepto = (e) => {
    setDepto(e.target.value);
  };
  const onChangeInmueble = (e) => {
    setInmueble(e.target.value);
  };
  const onChangeEstado = (e) => {
    setEstado(e.target.value);
  };
  const handleSelectChange = ({ value }) => {
    setDormitorios(value);
  };

  return (
    <div className="cont-filter">
      <select
        className="select"
        defaultValue="defecto"
        name="Departamento"
        onChange={onChangeDepto}
      >
        <option value="defecto" disabled>
          Departamento
        </option>
        {props.deptos.map((propiedad, indice) => {
          return <option value={propiedad}>{propiedad}</option>;
        })}
      </select>
      <select
        className="select"
        defaultValue="defecto"
        name="Inmueble"
        onChange={onChangeInmueble}
      >
        <option value="defecto" selected disabled>
          Inmueble
        </option>
        {props.inmuebles.map((propiedad, indice) => {
          return <option value={propiedad}>{propiedad}</option>;
        })}
      </select>
      <select
        className="select"
        defaultValue="defecto"
        name="Estado"
        onChange={onChangeEstado}
      >
        <option value="defecto" selected disabled>
          Estado
        </option>
        {props.estado.map((propiedad, indice) => {
          return <option value={propiedad}>{propiedad}</option>;
        })}
      </select>
      <Select
        /* defaultValue={options[3]} */
        /* isMulti */
        name="dormitorios"
        options={options}
        closeMenuOnSelect={false}
        components={animatedComponents}
        className="basic-multi-select select-class"
        classNamePrefix="select"
        placeholder="Dormitorios"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "grey" : "black",
          }),
        }}
        onChange={handleSelectChange}
      />
      <button
        className="boton-buscar"
        onClick={() => {
          props.filtrar(depto, inmueble, estado, dormitorios);
          console.log(dormitorios);
        }}
      >
        BUSCAR
      </button>
      <button
        className="boton-buscar"
        onClick={() => {
          props.resetear();
        }}
      >
        X
      </button>
    </div>
  );
}

export default Filter;
