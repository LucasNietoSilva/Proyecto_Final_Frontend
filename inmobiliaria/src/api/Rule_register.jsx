import API from "./Rule_API";
//consume la info para enviar al front

export const registrarUsuario = async () => {
  let url = "/api/publicaciones";
  return await API.post(url)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
