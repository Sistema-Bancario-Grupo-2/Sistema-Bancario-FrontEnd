import { NavBar } from "../components/NavBar"
import '../styles/Listas.css';

export const Cliente = () => {
  return (
    <>
            <NavBar />
            <div className="container ">
                <div className="row">
                    <strong className="titulo">Lista de usuarios</strong>
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Masdsdsdsdsdsdsdrk</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    
                                    <td>
                                        <Link to={"/User/editar"}> <button type="button" className="botones btn btn-warning">Editar</button> </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </>
  )
}
