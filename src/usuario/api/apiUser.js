import axios from "axios"
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = 'http://localhost:8080/banco/usuario/';

//Mostrar información
export const apiUser = async () => {
    try {

        const { data: { listaUsuarios } } = await axios.get(`${URL}`);
        console.log(listaUsuarios)
        return listaUsuarios;

    } catch ({ response: { data } }) {
        return data.message;
    }
}

//Api ruta para crear un usuario
export const apiUserCreate = async (dpi, user, correo, password, direccion, celular, ingresos_mensuales) => {
console.log("🚀 ~ file: apiUser.js:26 ~ apiUserCreate ~ {dpi, user, correo, password, direccion, celular, ingresos_mensuales}:", {dpi, user, correo, password, direccion, celular, ingresos_mensuales})

    try {

        const userSave = await axios.post(`${URL}crear`, {
            dpi: parseInt(dpi, 10),
            user: user,
            correo: correo,
            password: password,
            direccion: direccion,
            celular: parseInt(celular, 10),
            ingresos_mensuales: parseInt(ingresos_mensuales, 10),
        }, { headers: { "x-token": token } });

        console.log(userSave)
        return true;

    } catch ({ response: { data: { message } } }) {

        if (message === 'el token ha expirado') {
            Swal.fire({
                icon: "error",
                title: "Token expirado",
                text: message,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    windows.location.href = '/*';
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Error al agregar usuario",
                text: message,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }
} 

//Api ruta para editar un usuario
export const apiUserEdit = async (id, dpi, user, correo, password, direccion, celular, ingresos_mensuales) => {

    try {
        
        const {data} = await axios.put(`${URL}editar/${id}`, {
            dpi: parseInt(dpi, 10),                                                      
            user,
            correo,
            password,
            direccion,
            celular: parseInt(celular, 10),
            ingresos_mensuales: parseInt(ingresos_mensuales, 10),
        }, { headers: { "x-token": token } });
        console.log("Aca esta el id del usuario"),
        console.log(data)
        return true

    } catch ({ response: { data: { message } } }) {

        if (message === 'el token ha expirado') {
            Swal.fire({
                icon: "error",
                title: "Token expirado",
                text: message,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    windows.location.href = '/*';
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "No se puede editar a un ADMIN",
                text: message,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }
} 

export const apiUserDelete = async(id) =>{

    try {

        const { } = await axios.delete(`${URL}eliminar/${id}`,{
            headers: {"x-token": token}
        })

        return true;
        
    } catch ({response: {data: {message}}}) {
        if (message === "El token ha expirado") {
            localStorage.removeItem("token");
            window.location.href = "/login"; 
        }
        if (message) {
            return message;
        }
    }

    
}

export const apiUserMyInfo = async () => {

    try {

        const { data: { usuarioById } } = await axios.get(`${URL}buscarID`, { headers: { "x-token": token } });
        // console.log(usuarioById)
        return usuarioById;

    } catch ({ response: { data } }) {
        return data.message;
    }

}