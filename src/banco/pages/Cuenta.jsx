import { useEffect, useState } from "react";
import { apiCuenta, apiCuentaDelete } from "../../cuenta/api/apiCuenta";
import { useNavigate } from "react-router-dom";
import { EditCuenta } from "../../cuenta/components/EditCuenta";


export const Cuenta = () => {

    //Estado de usuarios en la lista y de forma independiente
    const [listCuenta, setListCuentas] = useState([]);
    // const [cuenta, setCuenta] = useState(Cuenta)            
    // const [showModal, setShowModal] = useState(false);
    // const navigate = useNavigate();

    const viewCuentaList = async () => {
        const a = await apiCuenta();
        setListCuentas(a);
    }

    // const handleOpenModal = (u) => {
    //     setShowModal(true)
    //     setCuenta(u);
    // }

    // const handleCloseModal = () => {
    //     setShowModal(false)
    // }

    //useEffect crea efectos secundarios, en este caso al momento de renderizar 
    //ListUser.jsx manda a llamar la funcion viewUserList();
    useEffect(() => {
        viewCuentaList();
    }, [ ])
    //showModal esto va en el usseffect

    // const cuentaCreate = (cuenta) =>{
    //     navigate("/crearCuenta", { state: { cuenta } } )
    // }

    // const profile = (user) => {
    //     navigate("/perfil", { state: { user } } );
    // }

    // const deleteCuenta = async(id) => {
        
    //     let result = await apiCuentaDelete(id);
        
    //     if (result) {
    //                         //filter sirve para retornar los elementos de un array por medio de un callback
    //         setListCuentas(listCuenta.filter( (u) => u._id !== id ))
    //         Swal.fire({
    //             icon: "success", 
    //             title: "Usuario eliminado",
    //             text: "se elimino correctamente"
    //         });
    //     }else{
    //         Swal.fire({
    //             icon: "error",
    //             title: "Ocurrio un error...",
    //             text: "No se pudo eliminar el usuario"
    //         });
    //     }
    // }

    return (
        <>
            <div className="container ">
                <div className="row">
                    <strong className="titulo">Lista de cuentas</strong>
                </div>
                <div className="alinear-botones">
                    {/* <button type="button" 
                            className="botones-cuenta btn btn-success"
                            onClick={ () => cuentaCreate()}
                    > 
                        Agregar
                    </button> */}
                    <button className="btn btn-secondary botones-cuenta" ><img src="https://cdn-icons-png.flaticon.com/512/5083/5083118.png" alt="" width={20} /> Asc</button>
                    <button className="btn btn-secondary botones-cuenta"><img src="https://cdn-icons-png.flaticon.com/512/5083/5083118.png" alt="" width={20} /> Desc</button>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    <div className="table-responsive">
                        <table className="table table-bordered border-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Numero de cuenta</th>
                                    <th scope="col">Usuario</th>
                                    <th scope="col">Tipo de cuenta</th>
                                    <th scope="col">Capital</th>
                                    <th scope="col">Registro</th>
                                    <th scope="col">...</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">

                                {listCuenta.map((u) => {

                                    return (
                                        <tr key={u}>
                                            <th scope="row">1</th>
                                            <td>{u.numCuenta}</td>
                                            <td>{u.usuario} </td>
                                            <td>{u.tipo_cuenta} </td>
                                            <td>{u.capital} </td>
                                            {/* <td> */}
                                            {/* <button 
                                                    type="button" 
                                                    className="botones btn btn-info" 
                                                    onClick={ () => MostrarRegistros(u)}
                                                >
                                                    <img src="https://cdn-icons-png.flaticon.com/512/3248/3248125.png" alt="" width={20} />
                                                </button> 
                                            </td> */}
                                            <td>
                                            {/* <button 
                                                    type="button" 
                                                    className="botones btn btn-warning" 
                                                    onClick={ () => handleOpenModal(u)}
                                                >
                                                    <img src="https://cdn.icon-icons.com/icons2/2621/PNG/512/gui_edit_icon_157165.png" alt="" width={20} />
                                                </button> 
                                                <button 
                                                    type="button" 
                                                    className="botones btn btn-danger" 
                                                    onClick={ () => deleteCuenta(u._id)}
                                                >
                                                    <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="" width={20} />
                                                </button> */}


                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>

                </div>
                {/* <EditCuenta
                    isOpenModal={ showModal}
                    isCloseModal={ handleCloseModal}
                    cuentaEdit={cuenta}
                >
                </EditCuenta> */}
            </div>
        </>
    )
}
