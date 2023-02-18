import Header from "./components/header/Header";
import Lista from "./components/lista/Lista";
import Footer from "./components/footer/Footer";
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
  return (
    <>
      <Header />
      <Lista listaPublicaciones={arrayPublicaciones} />
      <Footer />
    </>
  );
}

export default App;
