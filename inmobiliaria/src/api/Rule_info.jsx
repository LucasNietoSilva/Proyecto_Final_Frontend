import API from "./Rule_API";
//consume la info para enviar al front

export const getPublicaciones = async () => {
  let url = "/api/publicaciones";
  return await API.get(url)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
