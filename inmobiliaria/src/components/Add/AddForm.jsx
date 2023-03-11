import React, { useState } from "react";
import "./addForm.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registrarPublicacion } from "../../api/Rule_add";
/* import { agregarImg } from "../../api/Rule_add"; */

//ESTADOS
const AddForm = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    tipo: "",
    estado: "",
    dormitorios: "",
    barrio: "",
    departamento: "",
    precio: "",
  });

  const [tipo, setTipo] = useState(null);
  const [estado, setEstado] = useState(null);
  const [departamento, setDepartamento] = useState(null);
  const [image, setImage] = useState("");

  //CAPTURAR VALORES
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const captureSelectInm = (e) => {
    setTipo(e.target.value);
    console.log(e.target.value);
  };
  const captureSelectEst = (e) => {
    setEstado(e.target.value);
    console.log(e.target.value);
  };
  const captureSelectDepto = (e) => {
    setDepartamento(e.target.value);
    console.log(e.target.value);
  };

  const { dormitorios, barrio, precio } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
    console.log(inputs);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image", image);
    formData.append("tipo", tipo);
    formData.append("estado", estado);
    formData.append("dormitorios", dormitorios);
    formData.append("barrio", barrio);
    formData.append("departamento", departamento);
    formData.append("precio", precio);
    try {
      registrarPublicacion(formData).then((item) => {
        console.log(formData);
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="div-tamaño">
      <h1 className="add-title"> Agrega tu Publicación!</h1>
      <form className="form" onSubmit={onSubmitForm}>
        <div className="form-body">
          <div className="departamento label-input">
            <label className="form__label" for="inmueble">
              Inmueble:
            </label>
            <select
              className="form__label"
              name="Inmueble"
              id="dep"
              onChange={captureSelectInm}
            >
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Local Comercial">Local Comercial</option>
            </select>
          </div>
          <div className="departamento label-input">
            <label className="form__label" for="estado">
              Estado:
            </label>
            <select
              className="form__label"
              name="Estado"
              id="dep"
              onChange={captureSelectEst}
            >
              <option value="Venta">Venta</option>
              <option value="Alquiler">Alquiler</option>
            </select>
          </div>
          <div className="dorm label-input">
            <label className="form__label" for="dormitorios">
              Dormitorios:
            </label>
            <input
              type="number"
              value={dormitorios}
              onChange={(e) => onChange(e)}
              id="dormitorios"
              className="form__input"
            />
          </div>
          <div className="barrio label-input">
            <label className="form__label" for="barrio">
              Barrio:
            </label>
            <input
              type="text"
              value={barrio}
              onChange={(e) => onChange(e)}
              id="barrio"
              className="form__input"
            />
          </div>
          <div className="departamento label-input">
            <label className="form__label" for="departamento">
              Departamento:
            </label>
            <select
              value={departamento}
              onChange={captureSelectDepto}
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
          <div className="precio label-input">
            <label className="form__label" for="precio">
              Precio:
            </label>
            <input
              type="number"
              value={precio}
              onChange={(e) => onChange(e)}
              id="precio"
              className="form__input"
            />
          </div>
          <div className="imagen label-input">
            <label className="form__label" for="imagen">
              Imagen:
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImage}
              /* value={email} */
              /* id="email" */
              className="form__input"
            />
          </div>
        </div>
        <div class="footer">
          <button type="submit" class="btn">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
