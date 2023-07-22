import Swal from "sweetalert2";
import { apiUserCreate, apiUserEdit } from "../api/apiUser";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


export const formSchema = Yup.object().shape({

    dpi: Yup.number().min(13, "El numero de dpi debe de contener al menos 13 digitos"),
    user: Yup.string().required("El nombre de usuario es requerido"),
    correo: Yup.string().required("El correo es requerido").email("Debe de ser un correo electronico valido"),
    password: Yup.string().required("La contraseña es requerida").min(6, "La contraseña debe tener almenos 6 digitos"),
    direccion: Yup.string(),
    celular: Yup.number().min(8, "El numero de telefono debe ser valido"),
    ingresos_mensuales: Yup.number(),
})

export const fromOptions = { resolver: yupResolver(formSchema) };

export const formUserHelper = async (user, option) => {

    let resultado;

    switch (option) {
        case 1:
            console.log(user);
            resultado = await apiUserCreate(
                user.dpi,
                user.user,
                user.correo,
                user.password,
                user.direccion,
                user.celular,
                user.ingresos_mensuales,
            );
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo Bien!",
                    text: "Usuario creado correctamente",
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
            resultado = await apiUserEdit(
                //Aca recibimos los datos desde mongo
                user._id,
                user.dpi,
                user.user,
                user.correo,
                user.password,
                user.direccion,
                user.celular,
                user.ingresos_mensuales,
            );
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo Bien!",
                    text: "Usuario editado correctamente",
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