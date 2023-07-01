import { Fragment } from "react"
import { useState } from "react"
import '../../styles/Login.css';
import '../../styles/Nav.css';
import hotelLogo from '../../assets/img/logo1-1.png';

import { apiLogin } from '../api/apiLogin.js';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { NotFound404 } from "../../pages/NotFound404";

export const Login = () => {

    //Manejo de la informacion que se ingresa atravez de los imputs
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const resultado = await apiLogin(correo, password);
        if (resultado === false) return null;

        navigate('/User')
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
                                <label for="email" className="form-label">Correo</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    name="correo" 
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label for="email" className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
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