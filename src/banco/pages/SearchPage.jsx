import { useEffect, useState } from "react";
import { apiUser } from "../../usuario/api/apiUser";
import "../../styles/Styles.css";
import axios from "axios";

export const SearchPage = () => {

  //Estado de usuarios en la lista y de forma independiente
  const [listUsers, setListUsers] = useState([]);
  //Recorrer la tabla
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

  const viewUserList = async () => {
      const getListUsersFromApi = await apiUser();
      setListUsers(getListUsersFromApi);
  }

  const peticionGet=async()=>{
    await axios.get("http://localhost:8080/banco/")
    .then(response=>{
      setListUsers(response.data);
      setTablaUsuarios(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }
  
  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  
  const filtrar=(terminoBusqueda)=>{
    
    var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
      if(elemento.user.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.dpi.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
        
      }
    });
    setListUsers(resultadosBusqueda);
  }

  //useEffect crea efectos secundarios, en este caso al momento de renderizar 
  //ListUser.jsx manda a llamar la funcion viewUserList();
  useEffect(() => {
      viewUserList();
      peticionGet();
  }, [])

  return (
    <>

      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">

          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input 
                className="form-control me-2" 
                type="search" 
                aria-label="Search" 
                value={busqueda}
                placeholder="Búsqueda por Usuario o DPI"
                onChange={handleChange}
                
              />
              <button className="btn btn-outline-success" type="submit">Buscar </button>
            </form>
          </div>

          <div className="container">
            <div className="row">

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">DPI</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Correo</th>
                    <th scope="col">No. Cuenta</th>
                    <th scope="col">...</th>
                  </tr>
                </thead>
                <tbody>
                  {listUsers.map((u) => {

                    return (
                      <tr key={u}>
                        <th scope="row">1</th>
                        <td>{u.dpi}</td>
                        <td>{u.user} </td>
                        <td>{u.correo} </td>
                        <td>{u.no_cuenta} </td>
                        <td>
                          <td>
                            <button className="btn btn-info botones">
                              <img src="https://cdn-icons-png.flaticon.com/512/171/171895.png" alt="" width={20} />
                            </button>
                            {/* <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn-check-outlined"><img src="https://cdn-icons-png.flaticon.com/512/171/171895.png" alt="" width={20} /></label> */}
                          </td>
                        </td>
                      </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <footer>

        {/* <Fotter /> */}

      </footer>

    </>
  )
}
