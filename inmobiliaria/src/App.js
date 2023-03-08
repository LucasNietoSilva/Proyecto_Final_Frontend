import Lista from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Filter from "./components/Main/filter/Filter";
import { useEffect, useState } from "react";
import { getPublicaciones } from "./api/Rule_info";

function App() {
  const [arrayPublicaciones, setArrayPublicaciones] = useState([]);

  useEffect(() => {
    getPublicaciones().then((data) => {
      setArrayPublicaciones(data);
      console.log(data);
      /*       setArrayOriginal(data); */
    });
  }, []);

  

  //hacer un nuevo arreglo con propiedades de elementos de un arreglo, y luego filtrarlo eliminado los elementos repetidos:
  const filterDepartamentos = arrayPublicaciones.map(function (item) {
    return item.departamento;
  });
  const arrayDepartamentos = filterDepartamentos.filter((item, index) => {
    return filterDepartamentos.indexOf(item) === index;
  });

  const filterInmuebles = arrayPublicaciones.map(function (item) {
    return item.tipo;
  });
  const arrayInmuebles = filterInmuebles.filter((item, index) => {
    return filterInmuebles.indexOf(item) === index;
  });

  const filterEstados = arrayPublicaciones.map(function (item) {
    return item.estado;
  });
  const arrayEstados = filterEstados.filter((item, index) => {
    return filterEstados.indexOf(item) === index;
  });

 

  return (
    <>
      <Header />
      <Filter
        deptos={arrayDepartamentos}
        inmuebles={arrayInmuebles}
        estado={arrayEstados}
      />
      <Lista listaPublicaciones={arrayPublicaciones} />
      <Footer />
    </>
  );
}

export default App;
