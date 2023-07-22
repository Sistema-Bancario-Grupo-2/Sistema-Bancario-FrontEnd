import { Fragment } from "react"
import { useContext } from "react"
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../context/AuthContext';
import { apiLogin } from '../api/apiLogin.js';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import hotelLogo from '../../assets/img/logo1-1.png';
import '../../styles/Login.css';
import '../../styles/Nav.css';

export const Login = () => {

    //Se trasladan los datos y hacemos use del onImputChange para obtenerlos
    const { correo, password, onInputChange, onResetForm } = useForm({
        correo: '',
        password: ''
    });

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    //Manejo de la informacion que se ingresa atravez de los imputs
    // const [correo, setCorreo] = useState('');
    // const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {

        event.preventDefault();

        const result = await apiLogin(correo, password);

        if (result === false) return null;
        // console.log(result.data)
        const lastPath = localStorage.getItem('lastPath') || '/';
        login(result.data.user, result.data.rol, result.data.celular, result.data.direccion, result.data.dpi,result.data.ingresos_mensuales, result.data.correo );
        
        navigate(lastPath, {
          replace: true
        })
        
        onResetForm();
      }

    return (
        <Fragment>
            <div className="p-5" />
            <div className="container w-75 bg-primary mt-5 rounded shadow">
                <div className="row align-items-stretch">
                    <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
                    </div>
                    <div className="col bg-white p-5 rounded-end">
                        <br />
                        <div className="text-end">
                            <img src={hotelLogo} width="48" alt="" />
                        </div>

                        <h2 className="fw-bold text-center pt-5 mb-5">Bienvenido</h2>

                        {/* Login */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label">Correo</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="correo"
                                    value={correo}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={onInputChange}
                                />
                            </div>

                            <div className="d-grid mb-4">
                                <br />
                                <button type="submit" className="btn btn-primary w-100 my-1">Iniciar Sesión</button>
                            </div>

                            <div className="my-3">

                                <br />
                                <br />
                                <br />
                            </div>

                        </form>

                        <br />

                    </div>
                </div>
            </div>
        </Fragment>
    )
}