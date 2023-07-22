import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form';
import { formUserHelper, fromOptions } from "../helpers/formUserHelper";
import { Link } from "react-router-dom";

//userProp es mi modelo

export const FormUser = ({ userProp, titleButton, option }) => {

    const [user, setUser] = useState(userProp)
    // console.log(user)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(fromOptions);

    useEffect(() => {

        setUser({...user});

    }, [])

    const crud = async () => {
        await formUserHelper(user, option);
    };

    return (
        <>

            <form onSubmit={handleSubmit(crud)} className="formulario">
                <div className="mb-3">
                    <label className="form-label">DPI</label>
                    <input
                        {...register("dpi")}
                        type="number"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={user.dpi}
                        onChange={({ target: { value } }) => {
                            setUser(() => ({ ...user, dpi: value }))
                        }}
                    />

                    {errors.dpi && (<span className="text-danger"> {errors.dpi.message} </span>)}

                </div>
                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input
                        {...register("user")}
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={user.user}
                        onChange={({ target: { value } }) => {
                            setUser(() => ({ ...user, user: value }))
                        }}
                    />

                    {errors.user && (<span className="text-danger"> {errors.user.message} </span>)}

                </div>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input
                        {...register("correo")}
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={user.correo}
                        onChange={({ target: { value } }) => {
                            setUser(() => ({ ...user, correo: value }))
                        }}
                    />

                    {errors.correo && (<span className="text-danger"> {errors.correo.message} </span>)}

                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        {...register("password")}
                        type="password"
                        className="form-control"
                        value={user.password}
                        onChange={({ target: { value } }) => {
                            setUser(() => ({ ...user, password: value }))
                        }}
                    />

                    {errors.password && (<span className="text-danger"> {errors.password.message} </span>)}

                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input
                        {...register("direccion")}
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={user.direccion}
                        onChange={({ target: { value } }) => {
                            setUser(() => ({ ...user, direccion: value }))
                        }}
                    />

                    {errors.password && (<span className="text-danger"> {errors.password.message} </span>)}

                </div>
                <div className="mb-3">
                    <label className="form-label">Celular</label>
                    <input
                        {...register("celular")}
                        type="number"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={user.celular}
                        onChange={({ target: { value } }) => {
                            setUser(() => ({ ...user, celular: value }))
                        }}
                    />

                    {errors.celular && (<span className="text-danger"> {errors.celular.message} </span>)}

                </div>
                <div className="mb-3">
                    <label className="form-label">Ingresos Mensuales</label>
                    <input
                        {...register("ingresos_mensuales")}
                        type="number"
                        className="form-control"
                        value={user.ingresos_mensuales}
                        onChange={({ target: { value } }) => {
                            setUser(() => ({ ...user, ingresos_mensuales: value }))
                        }}
                    />

                    {errors.ingresos_mensuales && (<span className="text-danger"> {errors.ingresos_mensuales.message} </span>)}

                </div>

                <button type="submit" className="btn btn-primary botones-cuenta"> {titleButton} </button>
            </form>

        </>
    )
}
