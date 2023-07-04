import { Fragment } from "react"
import '../styles/Nav.css';
import Logo from '../assets/img/logo1-1.png';
import { Link, NavLink } from "react-router-dom";
import { Carousel } from "./Carousel";

export const NavBarInicio = () => {
    return (
        <Fragment>

            <header className="bg-warning">
                <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap navbar navbar-expand-lg bg-warning p-2" id="menu">
                    <div className="container-fluid">
                        <a className="navbar-brand " href="#">
                            <img src={Logo} alt="" width="36" height="35" className="d-inline-block align-text-top" />
                        </a>

                        <span className="fs-5 fw-bold text-blue"> Banca en Línea</span>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item col-6 col-lg-auto"></li>
                            </ul>

                            <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                                <li className="nav-item py-1 col-12 col-lg-auto">
                                    <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-black"></div>
                                    <hr className="d-lg-none text-black-50" />
                                </li>

                                <Link className="btn bg-primary text-light" to='lg'>
                                    Login
                                </Link>

                                {/* <NavLink className={ ({ isActive}) => `nav-link ${ isActive ? 'active' : ''}` }
                                    to='login'>
                                        Login
                                </NavLink> */}

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <Carousel />

        </Fragment>
    )
}
