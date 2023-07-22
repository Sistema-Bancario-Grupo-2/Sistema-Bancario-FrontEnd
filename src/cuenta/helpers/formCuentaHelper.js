import Swal from "sweetalert2";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { apiCuentaCreate, apiCuentaEdit } from "../api/apiCuenta";


export const formSchema = Yup.object().shape({

    usuario: Yup.string().required("El usuario es obligatorio"),
    tipo_cuenta: Yup.string().required("El tipo de cuenta es requerido"),
    capital: Yup.number().required("El capital es requerido")
})

export const fromOptions = { resolver: yupResolver(formSchema) };

export const formCuentaHelper = async (cuenta, option) => {

    let resultado;

    switch (option) {
        case 1:
            // console.log(cuenta);
            resultado = await apiCuentaCreate(
                cuenta.usuario,
                cuenta.tipo_cuenta,
                cuenta.capital
            );
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo Bien!",
                    text: "Cuenta creada correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = "login";
                    } else {
                        window.location.href = "login"
                    }
                });
            }

            break;
        case 2:
            resultado = await apiCuentaEdit(
                //Aca recibimos los datos desde mongo
                cuenta.usuario,
                cuenta.tipo_cuenta,
                cuenta.capital,
            );
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo Bien!",
                    text: "Cuenta editada correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Actualizacion realizada"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = "login";
                    } else {
                        window.location.href = "login"
                    }
                });
            }
            break;
    }

}