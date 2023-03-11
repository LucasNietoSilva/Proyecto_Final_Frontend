import { useRouteError } from "react-router-dom";
import "./error-page.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="cont-page">
      <div id="error-page">
        <h1 className="titulo-error">¡Oops!</h1>
        <p className="p-error">
          ...parece que la página que buscas no existe...
        </p>
        <p>{/* <i>{error.statusText || error.message}</i> */}</p>
        <p className="regreso">
          Click
          <a href="/" id="click">
            [AQUÍ]
          </a>
          para regresar al menú principal
        </p>
      </div>
    </div>
  );
}
