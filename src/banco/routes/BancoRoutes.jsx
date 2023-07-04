import { Fragment } from "react"

import { Navigate, Route, Routes } from "react-router-dom";
import { Transferencias, Cuenta, SearchPage, Perfil } from '../pages'
import { AdminPage } from "../pages/AdminPage";
import { UserPage } from "../pages/UserPage";
import { Login } from "../../auth";
import { NavBar } from "../../ui/components/NavBar";


export const BancoRoutes = () => {

    const role = JSON.parse(localStorage.getItem('rol'));

    return (

        <Fragment>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="cuenta" element={<Cuenta />} />
                    <Route path="transferencias" element={<Transferencias />} />


                    {/* Rutas del Administrador */}
                    <Route path="admin"
                        element={
                            (role === 'ADMIN_ROLE') ?
                                <AdminPage />
                                :
                                <Navigate to='/search' />
                        }
                    />

                    <Route path="search" element={<SearchPage />} />
                    <Route path="perfil" element={<Perfil />} />

                    {/* Rutas de User */}
                    <Route path="user"
                        element={
                            (role === 'USER_ROLE') ?
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
