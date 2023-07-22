import { Modal, Button } from 'react-bootstrap';
import { FormCuenta } from './FormCuenta';

export const EditCuenta = ({isOpenModal, isCloseModal, cuentaEdit}) => {

    if (!isOpenModal) return null;

    return (
        <>

            <Modal
                show={isOpenModal}
                onHide={isCloseModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Cuenta ID: {cuentaEdit._id} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormCuenta
                        userCuenta={cuentaEdit}
                        titleButton="Actualizar cuenta"
                        option={2}
                    >

                    </FormCuenta>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={isCloseModal}>
                        Cerrar
                    </Button>
                    {/* <Button variant="primary">Understood</Button> */}
                </Modal.Footer>
            </Modal>

        </>
    )
}
