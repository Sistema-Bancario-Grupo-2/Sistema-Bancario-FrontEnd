import { useLocation, useNavigate } from 'react-router-dom';
import { FormUser } from './FormUser';
import { User } from '../models/user.model';

export const CreateUser = () => {

  // const { state: { user } } = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/usuarios")
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
              <strong className="titulo">Agregar usuario</strong>
            </div>
          </div>

          <FormUser userProp={User}
            titleButton={"Crear Usuario"}
            option={1}
          />

        </div>
      </div>

    </>
  )
}
