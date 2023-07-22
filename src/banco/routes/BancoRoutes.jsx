import { Fragment } from "react"

import { Navigate, Route, Routes } from "react-router-dom";
import { Transferencias, Cuenta, SearchPage, Perfil } from '../pages'
import { AdminPage } from "../pages/AdminPage";
import { UserPage } from "../pages/UserPage";
import { Login } from "../../auth";
import { NavBar } from "../../ui/components/NavBar";
import { ListUsers } from "../../usuario/components/ListUsers";
import { isUserAuthenticated } from "../../auth/helpers/isUserAuthenticated";
import { CreateUser } from "../../usuario/components/CreateUser";
import { UserProfile } from "../../usuario/components/UserProfile";
import { CreateCuenta } from "../../cuenta/components/CreateCuenta";


export const BancoRoutes = () => {

    const role = JSON.parse(localStorage.getItem('rol'));

    return (

        <Fragment>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="perfil" element={isUserAuthenticated() ? (<Perfil></Perfil>) : (<Navigate to="/*" />)} />
                    <Route path="perfilUsuario" element={isUserAuthenticated() ? (<UserProfile />) : (<Navigate to="/*" />)} />
                    <Route path="cuenta" element={isUserAuthenticated() ? (<Cuenta />) : (<Navigate to="/*" />)} />
                    <Route path="usuarios" element={isUserAuthenticated() ? (<ListUsers />) : (<Navigate to="/*" />)} />
                    <Route path="transferencias" element={isUserAuthenticated() ? (<Transferencias />) : (<Navigate to="/*" />)} />


                    {/* Rutas del Administrador */}
                    <Route path="adminPages"

                        element={

                            (role === 'ADMIN_ROLE') ?

                                <ListUsers />

                                :

                                <Navigate to='/usuarios' />

                        }

                    />

                    <Route path="adminCuentas"

                        element={

                            (role === 'ADMIN_ROLE') ?

                                <Cuenta />

                                :

                                <Navigate to='/cuenta' />

                        }

                    />

                    <Route path="search" element={<SearchPage />} />
                    <Route path="perfil" element={<Perfil />} />
                    <Route path="crear" element={<CreateUser />} />
                    <Route path="crearCuenta" element={<CreateCuenta />} />
                    {/* <Route path="conversor" element={<Conversor/> } /> */}

                    {/* Rutas de User */}
                    <Route path="user"

                        element={

                            (role === 'CLIENTE_ROLE') ?

                                <UserPage />

                                :

                                <Navigate to='/search' />

                        }

                    />

                </Routes>
            </div>

        </Fragment>

    )
}
