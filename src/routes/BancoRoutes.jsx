import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import { NotFound404 } from "../pages/NotFound404"


export const BancoRoutes = () => {
  return (
    <Fragment>
        <Routes>
            <Route path="/pageUser" element={ <NotFound404 /> } />
        </Routes>
    </Fragment>
  )
}
