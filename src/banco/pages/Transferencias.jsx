import { Fragment } from "react"
import { FormTransferencias } from "../../components/FormTransferencias"

export const Transferencias = () => {
  return (
    <Fragment>

      <div className="container">

        <div className="row align-items-stretch">
          <div className="col p-1 align-items-center pt-2 ps-lg-5">
            <FormTransferencias />
          </div>
        </div>

      </div>


    </Fragment>
  )
}
