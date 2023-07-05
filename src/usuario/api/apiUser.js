import axios from "axios"

const token = localStorage.getItem("token");
const URL = 'http://localhost:8080/banco/usuario';

//Mostrar información
export const apiUser = async() => {

  try {
    
    const {data: {listaUsuarios}} = await axios.get(`${URL}/`);
    console.log(listaUsuarios)
    // for (let usuario = 0; usuario < listaUsuarios.length; usuario++) {
    //     const arrayUsuarios = [[listaUsuarios[usuario.id]]];
    //     console.log(arrayUsuarios);
    // }
    return listaUsuarios;

  } catch ({response: {data}}) {
    return data.message;
  }
}
