import API from "./Rule_API";
//consume la info para enviar al front

export const consultaUsuario = async (body) => {
  let url = "/auth/register";
  return await API.post(url, body)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
};