import React from 'react';
import "./Heroblock.scss"
const carouselImg = require("./HeroImage.png")

function Heroblock(){
    return(
        <section className='heroBlock'>

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
                        
                        <button className='btn btn-light rounded-0 col-12 col-md-4 heroMessage__button'>View collection</button>
                    </div>
                </div>
            </div>

            <div id="carouselExampleControls" className='carousel slide' data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carouselImg} className="d-block w-100" alt="carousel image"/>
                    </div>
                    <div className="carousel-item">
                        <img src={carouselImg} className="d-block w-100" alt="carousel image"/>
                    </div>
                    <div className="carousel-item">
                        <img src={carouselImg} className="d-block w-100" alt="carousel image"/>
                    </div>
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