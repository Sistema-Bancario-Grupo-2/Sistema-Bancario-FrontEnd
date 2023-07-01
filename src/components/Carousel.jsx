import { Fragment } from "react"
import foto1 from '../assets/img/slider2.jpg'
import foto2 from '../assets/img/slider3.jpg'
import foto3 from '../assets/img/slider1.jpg'
import '../styles/Nav.css';

export const Carousel = () => {
    return (
        <Fragment>

            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={foto1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={foto2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={foto3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </Fragment>
    )
}
