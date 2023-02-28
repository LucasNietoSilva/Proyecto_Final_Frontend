import Lista from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { getPublicaciones } from "./api/Rule_info";

function App() {
  const [arrayPublicaciones, setArrayPublicaciones] = useState([]);

  useEffect(() => {
    getPublicaciones().then((data) => {
      setArrayPublicaciones(data);
      /*       setArrayOriginal(data); */
    });
  }, []);

  return (
    <>
      <Header />
      <Lista listaPublicaciones={arrayPublicaciones} />
      <Footer />
    </>
  );
}

export default App;
