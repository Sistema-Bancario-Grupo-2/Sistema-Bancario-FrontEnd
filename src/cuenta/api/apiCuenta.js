import axios from "axios"
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = 'http://localhost:8080/banco/cuenta/';

export const apiCuenta = async () => {
    //Mostrar información
    try {
        const { data: { cuentas } } = await axios.get(`${URL}`);
        console.log(cuentas)
        return cuentas;

    } catch ({ response: { data } }) {
        return data.message;
    }
}

//Api ruta para crear un usuario
export const apiCuentaCreate = async (usuario, tipo_cuenta, capital) => {

    try {

        const cuentaSave = await axios.post(`${URL}crear`, {
            usuario: usuario,
            tipo_cuenta: tipo_cuenta,
            capital: parseInt(capital, 10),
        }, { headers: { "x-token": token } });

        console.log(cuentaSave)
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
                title: "Error al agregar la cuenta",
                text: message,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }
}

//Api ruta para editar una cuenta
export const apiCuentaEdit = async (usuario, tipo_cuenta, capital) => {

    try {

        const {data} = await axios.put(`${URL}editar/${id}`, {
            usuario,
            tipo_cuenta,
            capital: parseInt(capital, 10),
        }, { headers: { "x-token": token } });
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
                title: "Error al editar cuenta",
                text: message,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }
}

export const apiCuentaDelete = async (id) => {

    try {

        const { } = await axios.delete(`${URL}eliminar/${id}`, {
            headers: { "x-token": token }
        })

        return true;

    } catch ({ response: { data: { message } } }) {
        if (message === "El token ha expirado") {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        if (message) {
            return message;
        }
    }


}
