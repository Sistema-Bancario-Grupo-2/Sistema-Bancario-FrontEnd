import { Fragment } from "react"
import { Routes, Route } from "react-router-dom"
import { Login } from "./auth/pages/Login"
import { Principal } from "./pages/Principal"
import { BancoRoutes } from "./routes/BancoRoutes"
import { NotFound404 } from "./pages/NotFound404"
import { Admin } from "./pages/Admin"
import { AgregarUsuario } from "./usuario/components/AgregarUsuario"
import { EditarUsuario } from "./usuario/components/EditarUsuario"
import { EliminarUsuario } from "./usuario/components/EliminarUsuario"
import { Perfil } from "./pages/Perfil"
import { Cliente } from "./pages/Cliente"


export const AppRoutes = () => {
  return (
    <Fragment>
      <Routes>
        {/* <Route path='/' element={<Principal /> } /> */}
        <Route path='/' element={<Admin /> } />
        <Route path="login" element={ <Login /> } />
        <Route path='/*' element={ <Principal /> }/>

        <Route path="/User/*" element={<Principal />} />
        <Route path="/User/agregar" element={<AgregarUsuario />} />
        <Route path="/User/editar" element={<EditarUsuario />} />
        <Route path="/User/eliminar" element={<EliminarUsuario />} />

        {/* <Route path="/*" element={
          <PrivateRoute>
            <BancoRoutes />
          </PrivateRoute>
        } /> */}

      </Routes>
    </Fragment>
  )
}
