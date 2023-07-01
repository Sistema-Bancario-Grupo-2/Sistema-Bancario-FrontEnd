import { Fragment } from "react"
import { Routes, Route } from "react-router-dom"
import { Login } from "./auth/pages/Login"
import { Principal } from "./pages/Principal"
import { BancoRoutes } from "./routes/BancoRoutes"
import { NotFound404 } from "./pages/NotFound404"


export const AppRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Principal /> } />
        <Route path="login" element={ <Login /> } />
        <Route path='/*' element={ <Principal /> }/>

        <Route path="/User/*" element={<NotFound404 />} />

        {/* <Route path="/*" element={
          <PrivateRoute>
            <BancoRoutes />
          </PrivateRoute>
        } /> */}

      </Routes>
    </Fragment>
  )
}
