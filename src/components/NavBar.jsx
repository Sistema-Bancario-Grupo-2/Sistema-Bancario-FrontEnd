import { Fragment } from "react"
import '../styles/Nav.css';

export const NavBar = () => {
    return (
        <Fragment>

            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div className="container-fluid me-5">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        
                            <li className="nav-item dropdown me-5">
                                <a className="nav-link dropdown-toggle me-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admin
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Mi Perfil</a></li>
                                    <li><a className="dropdown-item" href="#">Acciones</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Cerrar Seccion</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>

        </Fragment>
    )
}
