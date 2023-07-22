import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form';
import { formCuentaHelper, fromOptions } from "../helpers/formCuentaHelper";
export const FormCuenta = ({ cuentaProp, titleButton, option }) => {

    const [cuenta, setCuenta] = useState(cuentaProp)

    // console.log(user)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(fromOptions);

    useEffect(() => {

        setCuenta({...cuenta });

    }, [])

    const crudCuenta = async () => {
        await formCuentaHelper(cuenta, option);
    };

    return (

        <>

            <form onSubmit={handleSubmit(crudCuenta)} className="formulario">
                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input
                        {...register("usuario")}
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={cuenta.usuario}
                        onChange={({ target: { value } }) => {
                            setCuenta(() => ({ ...cuenta, usuario: value }))
                        }}
                    />

                    {errors.numCuenta && (<span className="text-danger"> {errors.numCuenta.message} </span>)}

                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo Cuenta</label>
                    <input
                        {...register("tipo_cuenta")}
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={cuenta.tipo_cuenta}
                        onChange={({ target: { value } }) => {
                            setCuenta(() => ({ ...cuenta, tipo_cuenta: value }))
                        }}
                    />

                    {errors.tipo_cuenta && (<span className="text-danger"> {errors.tipo_cuenta.message} </span>)}

                </div>
                <div className="mb-3">
                    <label className="form-label">Capital</label>
                    <input
                        {...register("capital")}
                        type="number"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={cuenta.capital}
                        onChange={({ target: { value } }) => {
                            setCuenta(() => ({ ...cuenta, capital: value }))
                        }}
                    />

                    {errors.capital && (<span className="text-danger"> {errors.capital.message} </span>)}

                </div>

                <button type="submit" className="btn btn-primary botones-cuenta"> {titleButton} </button>
            </form>
        </>
    )
}
