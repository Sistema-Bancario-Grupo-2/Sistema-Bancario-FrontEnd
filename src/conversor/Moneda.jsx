import { Fragment } from 'react'
import dinero from './img/icono.png'
import '../styles/Styles.css';
import './script.js';
import { useNavigate } from 'react-router-dom';

export const Moneda = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate("/transferencias")
    }

    return (
        <Fragment>
            <div className="container p-5">
                <img src={dinero} alt="" width={200} />
                <br />
                <br />
                <h1>Conversor de moneda</h1>
                <p>Escoje la moneda y la cantidad para realizar la conversion</p>


                <div className="container">
                    <div className="moneda">
                        <select id="moneda-uno">
                            <option value="USD" selected>USD</option>
                        </select>
                        <input
                            type="number"
                            id="cantidad-uno"
                            placeholder="0"
                            value="1"
                        ></input>

                    </div>
                    <div class="moneda">
                        <select id="moneda-dos">
                            <option value="GTQ" selected>GTQ</option>
                        </select>

                        <input
                            type="number"
                            id="cantidad-dos"
                            placeholder="7.84"
                        />

                    </div>

                    <button className="btn btn-secondary botones-cuenta" onClick={goBack}>
                        <img src="https://cdn-icons-png.flaticon.com/512/150/150519.png" alt="" width={25} />  Regresar
                    </button>

                </div>
            </div>
        </Fragment>
    )
}
