import React from "react";
import "./info_viviendas.css";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBuscarPub } from "../../../../api/Rule_publicacion";
import Carousel from "./Carousel/Carousel";
import Consultas from "./Consultas/Consultas";

function Infoviviendas() {
  const { id } = useParams();
  const [vivienda, setVivienda] = useState([]);
  console.log(vivienda);

  useEffect(() => {
    getBuscarPub(id).then((data) => {
      setVivienda(data);
    });
  }, [id]);

  return (
    <>
      <Header />
      <div id="container-father">
        <div className="container_img_vivienda">
          {vivienda[0] !== undefined ? (
            <Carousel
              img1={vivienda[0]?.img_1}
              img2={vivienda[0]?.img_2}
              img3={vivienda[0]?.img_3}
              img4={vivienda[0]?.img_4}
            />
          ) : null}
          <label className="info-precio-vivienda">
            USD {vivienda[0]?.precio}
          </label>
        </div>
        <div className="container_info_vivienda">
          <div className="container_caracteristicas">
            <h1>CARACTERISTICAS</h1>
            <ul className="infoviviendas-ul">
              <li>
                Tipo de Opreación:{" "}
                <span className="span-li"> {vivienda[0]?.estado} </span>
              </li>
              <li>
                Tipo de Inmueble:{" "}
                <span className="span-li"> {vivienda[0]?.tipo} </span>
              </li>
              <li>
                Departamento:{" "}
                <span className="span-li"> {vivienda[0]?.departamento} </span>
              </li>
              <li>
                Barrio: <span className="span-li"> {vivienda[0]?.barrio} </span>
              </li>
              <li>
                Dormitorios:{" "}
                <span className="span-li"> {vivienda[0]?.dormitorios} </span>
              </li>
              <li>
                Baños: <span className="span-li"> {vivienda[0]?.baños} </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container_map_vivienda">
          <div className="container_descripcion">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9899.063366874743!2d-56.16469768042225!3d-34.92092926047255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8112546fcd5b%3A0xc567be2a177df913!2sSenpai%20Academy!5e0!3m2!1ses!2sbr!4v1678408110578!5m2!1ses!2sbr"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="container_consultas_vivienda">
          <Consultas />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Infoviviendas;
