import Logo from '../assets/img/logoBank.png';

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export const Fotter = () => {
    return (
        <>

            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Contactanos en nuestras redes sociales:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" width={35} />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384065.png" alt="" width={35} />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="" width={35} />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" width={35} />
                    </a>
                </div>
            </section> */}

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='2' lg='3' xl='2' className='mx-auto mb-3'>
                                <img src={Logo} alt="" width={200} />
                            </MDBCol>

                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h4 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                                    Fair Bank
                                </h4>
                                <p>
                                    Te ofrece la mejor calidad y productividad en cualquier ambito del estado financiero.
                                </p>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h4 className='text-uppercase fw-bold mb-4'>Legal</h4>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Gobierno corporativo
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Terminos y condiciones
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Información financiera
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h4 className='text-uppercase fw-bold mb-4'>Ayuda</h4>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Gmail
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Facebook
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Twitter
                                    </a>
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        FairBank.com
                    </a>
                </div>
            </MDBFooter>

        </>
    )
}
