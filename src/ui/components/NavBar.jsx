import { Fragment } from "react"
import { useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../../auth/context/AuthContext';
import Logo from '../../assets/img/logo1-1.png';
import '../../styles/Nav.css';

export const NavBar = () => {

    //Custom hook para navegar
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    const userProfile = (user) => {
        navigate("/perfilUsuario", { state: { user } })
    }
    //console.log(user);

    const onLogOut = () => {
        logout();
        //navegamos al login
        navigate('/login', {
            replace: true
        });
    }
    //El replace remplaza la ruta por la actual, si intenci'on es que no se pueda volver a atras
    //Probar en incognito

    const rol = JSON.parse(localStorage.getItem('rol'));


    return (
        <Fragment>

            <header className="bg-primary">
                <nav className="container-md navbar navbar-expand-lg navbar-light bg-primary padding-2">
                    <div className="container-fluid me-5">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <img src={Logo} alt="" width="45" height="50" className="navbar-brand  d-inline-block align-text-top" />

                        <span id="tituloNav"> Banca en Línea</span>


                        {/* <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? `active` : ``}`}
                        to="/marvel"
                        className='text-light'
                    >
                        Marvel
                    </NavLink> */}

                        <div className="me-3">
                            <NavLink
                                to='/perfilUsuario'
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "normal" : "",
                                        color: isPending ? 'white' : "white",
                                    };
                                }}
                                onClick={() => userProfile(user)}
                            >
                                Perfil
                            </NavLink>
                        </div>

                        <div className="me-2">

                            {

                                (rol === 'ADMIN_ROLE')

                                    ? <NavLink

                                        to='/adminCuentas'

                                        style={({ isActive, isPending }) => {

                                            return {

                                                fontWeight: isActive ? "normal" : "",

                                                color: isPending ? 'white' : "white",

                                            };

                                        }}

                                    >

                                        Cuentas

                                    </NavLink>

                                    :

                                    ""

                            }

                        </div>




                        <div className="me-2">

                            {

                                (rol === 'ADMIN_ROLE')

                                    ? <NavLink

                                        to='/adminPages'

                                        style={({ isActive, isPending }) => {

                                            return {

                                                fontWeight: isActive ? "normal" : "",

                                                color: isPending ? 'white' : "white",

                                            };

                                        }}

                                    >

                                        Usuarios

                                    </NavLink>

                                    :

                                    ""

                            }

                        </div>


                        <div className="me-3">
                            <NavLink
                                to='/transferencias'
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "normal" : "",
                                        color: isPending ? 'white' : "white",
                                    };
                                }}
                            >
                                Transferencias
                            </NavLink>
                        </div>

                        <div className="me-3">
                            <NavLink
                                to='/search'
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "normal" : "",
                                        color: isPending ? 'white' : "white",
                                    };
                                }}
                            >
                                Buscar
                            </NavLink>
                        </div>

                        

                        <div className="me-3">
                            {
                                (rol === 'USER_ROLE')
                                    ? <NavLink
                                        to="/user"
                                        style={({ isActive, isPending }) => {
                                            return {
                                                fontWeight: isActive ? "normal" : "",
                                                color: isPending ? 'white' : "white",
                                            };
                                        }}
                                    >
                                        User
                                    </NavLink>
                                    :
                                    ""
                            }
                        </div>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li className="nav-item dropdown me-5">
                                    <a className="nav-link dropdown-toggle me-1 text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {user?.name}
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink
                                            to="/crear"
                                            style={({ isActive, isPending }) => {
                                                return {
                                                    fontWeight: isActive ? "normal" : "",
                                                    color: isPending ? 'white' : "white",
                                                };
                                            }}
                                        >
                                            Crear Usuario
                                        </NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <a className="dropdown-item"
                                                onClick={onLogOut}>
                                                Cerrar Sección
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>

            </header>


        </Fragment>
    )
}
