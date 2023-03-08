import API from "./Rule_API";
//consume la info para enviar al front

export const filtrarPublicaciones = async () => {
  let url = "/publicaciones-buscar";
  return await API.get(url)
    .then((response) => {
      console.log(response);
      return response.data; //array de objetos es el data
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
