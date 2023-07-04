import axios from "axios";
import Swal from "sweetalert2";

const URL = `http://localhost:8080/banco/auth/`;

export const apiLogin = async (correo, password) => {
    try {
      const response = await axios.post(`${URL}login`, {
        correo,
        password,
      });
  
      const token = response.data.token;
      // Guardar el token en el localStorage
      token ? localStorage.setItem("token", token) : null;
  
      if (response) {
        Swal.fire({
          icon: "success",
          title: "¡Inicio de sesión completado!",
          text: "¡Disfruta!",
          confirmButtonText: "Ok",
        });
      }
  
      return response;
    } catch ({ response: { data: { msg } } }) {
      Swal.fire({
        icon: "error",
        title: "No se pudo iniciar sesión.",
        text: `${msg}`,
      });
      return false;
    }
  };
  
