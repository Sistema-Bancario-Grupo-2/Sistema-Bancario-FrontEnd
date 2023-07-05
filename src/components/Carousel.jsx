import { Fragment } from "react"
import foto1 from '../assets/img/banner.png'
import foto2 from '../assets/img/slider3.jpg'
import foto3 from '../assets/img/slider1.jpg'
import '../styles/Nav.css';

export const Carousel = () => {
    return (
        <Fragment>

            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={foto1} className="fotop" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={foto2} className="fotop" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={foto3} className="fotop" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </Fragment>
    )
}
