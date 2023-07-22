import { useLocation, useNavigate } from 'react-router-dom';
import { Cuenta } from '../../cuenta/models/cuenta.model';
import { FormCuenta } from './FormCuenta';

export const CreateCuenta = () => {

    // const { state: { user } } = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/cuenta")
    }

    return (
        <>
            <div className='container'>
                <div className='row'>

                    <div className="container ">
                        <div className="row">
                            <div>
                                <br />
                                <button className="btn btn-secondary botones-cuenta" onClick={goBack}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/150/150519.png" alt="" width={25} /> Regresar
                                </button>

                            </div>
                            <strong className="titulo">Agregar una Cuenta</strong>
                        </div>
                    </div>

                    <FormCuenta cuentaProp={Cuenta}
                        titleButton={"Crear Cuenta"}
                        option={1}
                    />
                </div>
            </div>
        </>
    )
}
