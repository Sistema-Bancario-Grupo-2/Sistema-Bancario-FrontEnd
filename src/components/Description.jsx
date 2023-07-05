import { Fragment } from "react"
import '../styles/Nav.css';

export const Description = () => {
  return (
    <Fragment>

      <div className="w-50 mx-auto text-center pt-5" id="intro">
        <h1 className="p-3 fs-2 border-top border-3">
          Pide en línea en la mejor pizzeria del
          <span className="fw-bold text-blue"> Mundo</span>
        </h1> 

        <p className="p-3 fs-4">
          <span className="fw-bold text-blue"> Banca el Linea </span>
          es una institución financiera líder que ha estado sirviendo a nuestros clientes con excelencia y compromiso durante muchos años. En esta presentación, destacaremos los principales aspectos que nos diferencian y nos convierten en una opción confiable y innovadora en el mundo de los servicios financieros.
        </p>
      </div>

    </Fragment>
  )
}
