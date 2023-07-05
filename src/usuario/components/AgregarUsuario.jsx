import { NavBar } from "../../components/NavBar"
import '../../styles/Listas.css';

export const AgregarUsuario = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <div className='row'>

          <div className="container ">
            <div className="row">
              <strong className="titulo">Agregar usuario</strong>
            </div>
          </div>

          <form className="formulario">
            <div className="mb-3">
              <label className="form-label">DPI</label>
              <input type="number" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label className="form-label">Usuario</label>
              <input type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Dirección</label>
              <input type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label className="form-label">Celular</label>
              <input type="number" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label className="form-label">Ingresos Mensuales</label>
              <input type="number" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label className="form-label">No. Cuenta</label>
              <input type="number" className="form-control" aria-describedby="emailHelp" />
            </div>

            <button type="submit" className="btn btn-primary">Agregar</button>
            <button type="submit" className="btn btn-info">Regresar</button>
          </form>

        </div>
      </div>
    </>
  )
}
