import axios from "axios";
import Swal from "sweetalert2";
const URL = `http://localhost:8080/banco/`;

export const apiLogin = async (correo, password) => {
    try {
      const response = await axios.post(`${URL}auth/login`, {
        correo,
        password,
      });
  
      const token = response.data.token;
      // Guardar el token en el localStorage
      if (token) {
        localStorage.setItem("token", token);
      }
  
      if (response) {
        Swal.fire({
          icon: "success",
          title: "¡Inicio de sesión completado!",
          text: "¡Disfruta!",
          confirmButtonText: "Ok",
        });
      }
  
      return token;
    } catch ({ response: { data: { msg } } }) {
      Swal.fire({
        icon: "error",
        title: "No se pudo iniciar sesión.",
        text: `${msg}`,
      });
      return false;
    }
  };
  
