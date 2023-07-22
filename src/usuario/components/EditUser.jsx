import {Modal, Button} from 'react-bootstrap';
import { FormUser } from './FormUser';

export const EditUser = ({isOpenModal, isCloseModal, userEdit}) => {

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
          <Modal.Title>Editar usuario ID: {userEdit._id} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormUser
            userProp={userEdit}
            titleButton="Actualizar Usuario"
            option={2}
          >

          </FormUser>
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
