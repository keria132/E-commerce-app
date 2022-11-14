import React from 'react';
import { Link } from "react-router-dom";
import "./Heroblock.scss"
//Can't find an api with high quality background furniture images, so i'll use dummy static ones
const carouselImages = [require("./HeroImage.png"), require("./HeroImage.png"), require("./HeroImage.png")]

const heroMessage = (
    
    <div className="heroMessage">
        <div className='container-fluid h-100'>
            <div className='row p-2 pt-4 pb-4 h-100 flex-column flex-nowrap justify-content-between'>
                
                <div className='heroMessage-top'>
                    <h2 className='col-12 heroMessage__heading'>
                        Luxury homeware for people who love timeless design quality
                    </h2>
                    <p className='col-12 heroMessage__text'>
                        Shop the new Spring 2022 collection today
                    </p>
                </div>
                
                <button className='btn btn-light rounded-0 col-12 col-md-4 heroMessage__button'>
                    <Link className='nav-link' to="/products">View collection</Link>
                </button>
            </div>
        </div>
    </div>
)

function Heroblock(){
    return(
        <section className='heroBlock'>

            {heroMessage}

            <div id="carouselExampleControls" className='carousel slide' data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carouselImages[0]} className="d-block w-100" alt="carousel image"/>
                    </div>

                    {carouselImages.map((image, index) => {
                        return(
                            <div key={index} className="carousel-item">
                                <img src={image} className="d-block w-100" alt="carousel image"/>
                            </div>
                        )
                    })}
                    
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
           
        </section>
    )
}



export default Heroblock;