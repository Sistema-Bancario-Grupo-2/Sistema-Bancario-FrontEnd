import { Fragment } from "react"
import '../../styles/Styles.css';
import { useLocation, useNavigate } from "react-router-dom";

export const Perfil = () => {

  const {state: {user}} = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/usuarios")
  }

  return (
    <Fragment>
      <br />  

        <div className="container">
          <div className="row">

            <div>
              <button className="btn btn-secondary botones" onClick={goBack}>
                <img src="https://cdn-icons-png.flaticon.com/512/150/150519.png" alt="" width={30} /> Regresar
              </button>
            </div>

            <div className="row ga">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                  <img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top" alt="..." />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Información <img src="https://cdn-icons-png.flaticon.com/512/3399/3399893.png" alt="" width={35} /> </h4>
                    <p className="card-text">Usuario:  {user.user}</p>
                    <p className="card-text">DPI: {user.dpi}</p>
                    <p className="card-text">Correo: {user.correo}</p>
                    <p className="card-text">Contraseña: {user.password}</p>
                    <p className="card-text">Dirección: {user.direccion}</p>
                    <p className="card-text">Celular: {user.celular}</p>
                    <p className="card-text">Ingresos: {user.ingresos_mensuales}</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Favoritos <img src="https://cdn-icons-png.flaticon.com/512/171/171895.png" alt="" width={35} /> </h4>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h4>Contacto</h4>
              </div>
              <div className="card-body">
                <div className="redes">
                  <a href="">Telefono <img src="https://assets.stickpng.com/images/5a452570546ddca7e1fcbc7d.png" alt="" width={35} /> </a>
                  <a href="">Gmail <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="" width={35} /> </a>
                </div>
              </div>
            </div>

          </div>
        </div>

    </Fragment>
  )
}
