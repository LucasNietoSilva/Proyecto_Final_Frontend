//consumimos los recursos que nos ofrece la API
import API from "./Rule_API";

export const login = async (usuario) => {
  let url = "/auth/login";
  return await API.post(url, usuario)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
