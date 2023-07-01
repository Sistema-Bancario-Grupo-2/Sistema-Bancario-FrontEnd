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
          encuentras pizzas de especialidades, pizzas Prémium,
          combos y Promociones, todo esto para satisfacer tus
          necesidades y cumplir con tus expectativas.
        </p>
      </div>

    </Fragment>
  )
}
