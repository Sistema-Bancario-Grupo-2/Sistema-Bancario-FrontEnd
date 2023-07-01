import { Fragment } from "react"
import '../styles/Nav.css';
import { NavBar } from "./NavBar";

export const NavSide = () => {
    return (
        <Fragment>
            <div className="d-flex">
                <div id="sidebar-container" className="bg-primary">
                    <div className="logo">
                        <h4 className="text-light fw-bold fs-3">Templune</h4>
                    </div>
                    <div className="menu">
                        <a href="#" className="d-block text-light p-3">Tablero</a>
                        <a href="#" className="d-block text-light p-3">Usuario</a>
                        <a href="#" className="d-block text-light p-3">Estadisticas</a>
                        <a href="#" className="d-block text-light p-3">Perfil</a>
                        <a href="#" className="d-block text-light p-3">Configuracion</a>
                    </div>
                </div>

                <div className="w-100">
                    <NavBar />
                </div>

            </div>
        </Fragment>
    )
}
