import API from "./Rule_API";

export const getBuscarPub = async (id) => {
  let url = `/api/buscar/${id}`;

  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

