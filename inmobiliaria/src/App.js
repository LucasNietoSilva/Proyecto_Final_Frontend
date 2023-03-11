import Lista from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Filter from "./components/Main/filter/Filter";
import { useEffect, useState } from "react";
import { getPublicaciones } from "./api/Rule_info";
/* import { filtrarPublicaciones } from "./api/Rule_filter"; */

function App() {
  const [arrayPublicaciones, setArrayPublicaciones] = useState([]);
  const [arrayOriginal, setArrayOriginal] = useState([]);

  useEffect(() => {
    getPublicaciones().then((data) => {
      setArrayPublicaciones(data);
      console.log(data);
      setArrayOriginal(data);
    });
  }, []);

  /*   const filter = () => {
    filtrarPublicaciones();
  }; */

  //LO DE ARRIBA ES PARA FILTRAR POR BACKEND

  const filter = (depto, inmueble, estado, dormitorios) => {
    const arrayFiltrado = arrayOriginal.filter((elem) => {
      if (
        ((depto?.length > 0 &&
          elem.departamento.toLowerCase() === depto.toLowerCase()) ||
          !depto ||
          depto.length === 0) &&
        ((inmueble?.length > 0 &&
          elem.tipo.toLowerCase() === inmueble.toLowerCase()) ||
          !inmueble ||
          inmueble.length === 0) &&
        ((estado?.length > 0 &&
          elem.estado.toLowerCase() === estado.toLowerCase()) ||
          !estado ||
          estado.length === 0) &&
        ((dormitorios && elem.dormitorios === dormitorios) || !dormitorios)
      ) {
        return elem;
      }
    });
    setArrayPublicaciones(arrayFiltrado);
  };
  const resetFilter = () => {
    setArrayPublicaciones(arrayOriginal);
  };

  //hacer un nuevo arreglo con propiedades de elementos de un arreglo, y luego filtrarlo eliminado los elementos repetidos:
  const filterDepartamentos = arrayOriginal.map(function (item) {
    return item.departamento;
  });
  const arrayDepartamentos = filterDepartamentos.filter((item, index) => {
    return filterDepartamentos.indexOf(item) === index;
  });

  const filterInmuebles = arrayOriginal.map(function (item) {
    return item.tipo;
  });
  const arrayInmuebles = filterInmuebles.filter((item, index) => {
    return filterInmuebles.indexOf(item) === index;
  });

  const filterEstados = arrayOriginal.map(function (item) {
    return item.estado;
  });
  const arrayEstados = filterEstados.filter((item, index) => {
    return filterEstados.indexOf(item) === index;
  });

  const filterDormitorios = arrayOriginal.map(function (item) {
    return item.dormitorios;
  });
  const arrayDormitorios = filterDormitorios.filter((item, index) => {
    return filterDormitorios.indexOf(item) === index;
  });

  return (
    <>
      <Header />
      <Filter
        deptos={arrayDepartamentos}
        inmuebles={arrayInmuebles}
        estado={arrayEstados}
        dormitorios={arrayDormitorios}
        filtrar={filter}
        resetear={resetFilter}
      />
      <Lista listaPublicaciones={arrayPublicaciones} />
      <Footer />
    </>
  );
}

export default App;
