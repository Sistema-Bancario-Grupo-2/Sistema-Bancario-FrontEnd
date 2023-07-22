import { Fragment } from "react"
import Dinero from '../assets/img/dolares.png'

export const FormTransferencias = () => {
    return (
        <Fragment>
            <div className="alight-items-center justify-content-center ">
                <div className="col-sm-7">

                    <br />
                    <h2>
                        <span className="fw-bold text-blue"> Transferencias</span>
                    </h2>
                    <h2 className="p-2 border-top border-2 text-dark"></h2>

                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating">
                                <select className="form-select" id="floatingSelectGrid">
                                    <option selected>Seleccione de este Menú</option>
                                    <option value="1">Mi cuenta</option>
                                </select>
                                <label htmlFor="floatingSelectGrid">Debitar a:</label>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating">
                                <select className="form-select" id="floatingSelectGrid">
                                    <option selected>Seleccione de este Menú</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label htmlFor="floatingSelectGrid">Acreditar a:</label>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating mb-3">
                                <input type="email" readonly className="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" value="17/07/2023" />
                                <label htmlFor="floatingPlaintextInput">Fecha</label>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                                <label htmlFor="floatingTextarea2">Monto a debitar:</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                        <label htmlFor="floatingTextarea2">Comentario:</label>
                    </div>
                    <br />

                    <div className="form-floating">
                        <button type="button" className="btn btn-outline-success w-100 my-1">
                            <div className="row align-items-center">
                                <div className="col-15 text-center">
                                    <img src={Dinero} width={35} alt="" className="me-2" />
                                    TRANSFERIR
                                </div>
                            </div>
                        </button>
                    </div>

                </div>
            </div>

        </Fragment>
    )
}