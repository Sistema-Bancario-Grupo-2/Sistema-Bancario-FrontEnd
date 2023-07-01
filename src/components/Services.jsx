import { Fragment } from "react"
import '../styles/Nav.css';

export const Services = () => {
    return (
        <Fragment>

            <div className="p-5">
                <div className="w-50 m-auto text-center" id="equipo">
                    <h1 className="p-3 mb-2 fs-2 border-top border-3">
                        Pizzeria pequeña pero con<span className="fw-bold text-blue"> Grandes Resultados</span>
                    </h1>

                    <p className="fs-4">
                        Siempre buscamos lo mejor en cualquier
                        ámbito, contratando a las personas adecuadas para
                        el servicio a los clientes, y buscando los mejores
                        ingredientes para complacerte con tus alimentos, te
                        esperamos para que te unas a nosotros.
                    </p>
                </div>
            </div>

        </Fragment>
    )
}
