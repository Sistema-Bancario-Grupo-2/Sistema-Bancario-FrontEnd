import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/pages/Login"
import { PublicRoute } from "./PublicRoute"
import { Principal } from "../pages/Principal"
import { PrivateRoute } from "./PrivateRoute"
import { Fragment } from "react"
import { BancoRoutes } from "../banco/routes/BancoRoutes"


export const AppRouter = () => {
  
  return (
    <Fragment>

      <Routes>
        <Route path="/login/*" element={

          <PublicRoute>
            <Routes>
              <Route path="/*" element={<Login />} />
            </Routes>
          </PublicRoute>

        } />

        <Route path="/*" element={
          <PrivateRoute>
            <BancoRoutes />
          </PrivateRoute>
        } />
      </Routes>

    </Fragment>
  )
}
