import { Fragment } from "react"
import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../auth';


export const PrivateRoute = ({children}) => {

    const { logged } = useContext(AuthContext);

    //Use location sirve para recordar la ultima parte de la ubicacion
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

    return (logged)
        ? children
        : <Navigate to='/login' />

}
