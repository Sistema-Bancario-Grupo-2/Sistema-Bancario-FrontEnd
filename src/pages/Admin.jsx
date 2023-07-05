import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar"
import '../styles/Listas.css';
import { apiUser } from "../usuario/api/apiUser";
import { useEffect, useState } from "react";

export const Admin = () => {

    //Estado de usuarios en la lista y de forma independiente
    const [listUsers, setListUsers] = useState([]);

    const viewUserList = async () => {
        const getListUsersFromApi = await apiUser();
        setListUsers(getListUsersFromApi);
    }

    //useEffect crea efectos secundarios, en este caso al momento de renderizar 
    //ListUser.jsx manda a llamar la funcion viewUserList();
    useEffect(() => {
        viewUserList();
    }, [])

    return (
        <>
            <NavBar />


            <div className="container ">
                <div className="row">
                    <strong className="titulo">Lista de usuarios</strong>
                </div>
                <div className="alinear-botones">
                    <Link to={"/User/agregar"}> <button type="button" className="botones btn btn-success">Agregar</button> </Link>
                </div>
            </div>
            <div className="container">
                <div className="row">

                    <div>
                        <table className="table table-bordered border-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">DPI</th>
                                    <th scope="col">Usuario</th>
                                    <th scope="col">Correo</th>
                                    <th scope="col">Contraseña</th>
                                    <th scope="col">Dirección</th>
                                    <th scope="col">Celular</th>
                                    <th scope="col">Ingresos Mensuales</th>
                                    <th scope="col">No. Cuenta</th>
                                    <th scope="col">....</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">

                                {listUsers.map( ( u ) => {
                                    
                                    return(
                                        <tr key={u.id}>
                                            <th scope="row">1</th>
                                            <td>{u.dpi}</td>
                                            <td>{u.user} </td>
                                            <td>{u.correo} </td>
                                            <td>{u.password} </td>
                                            <td>{u.direccion} </td>
                                            <td>{u.celular} </td>
                                            <td>{u.ingresos_mensuales} </td>
                                            <td>{u.no_cuenta} </td>
                                            <td>
                                                <Link to={"/User/eliminar"}> <button type="button" className="botones btn btn-danger">Eliminar</button> </Link>
                                                <Link to={"/User/editar"}> <button type="button" className="botones btn btn-warning">Editar</button> </Link>
                                            </td>
                                        </tr>
                                    )
                                })}

                                     

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}
