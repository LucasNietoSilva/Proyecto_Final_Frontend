//consumimos los recursos que nos ofrece la API
import API from "./Rule_API";

export const login = async (body) => {
  let url = "/auth/register";
  await API.post(url, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data || "Error procesando la solicitud";
    });
};
