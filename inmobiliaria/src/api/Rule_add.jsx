import API from "./Rule_API";
//consume la info para enviar al front

export const registrarPublicacion = async (formData) => {
  let url = "/api/publicaciones/nuevo";
  return await API.post(url, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      throw error || "Error procesando la solicitud";
    });
};

/* export const agregarImg = async (formData) => {
  let url = "/api/publicaciones/nuevaImg";
  return await API.post(url, formData)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
}; */
