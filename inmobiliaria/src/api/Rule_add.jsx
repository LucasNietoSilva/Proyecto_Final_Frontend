import API from "./Rule_API";
//consume la info para enviar al front

export const registrarPublicacion = async (body) => {
  let url = "/api/publicaciones/nuevo";
  return await API.post(url, body)
    .then((response) => {
      console.log(response.data);
      alert("Se ha agregado una nueva publicación!");
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

/* export const registrarPublicacion = async (formData) => {
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
}; */
