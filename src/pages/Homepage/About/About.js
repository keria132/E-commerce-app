import React from 'react';
import { Link } from "react-router-dom";
import "./About.scss"
const image = require("./Image.png")

function About(){
    return(
        <section className='about container-fluid p-0'>
            <div className='row p-4 p-md-5 m-auto ms-md-5 me-md-5 justify-content-between gy-4 gy-md-0'>

                <div className='textBlock col-12 col-md-6 text-white p-4 p-lg-5 m-0 d-flex flex-column flex-nowrap justify-content-between'>
                    <div className='textBlock_top'>
                        <h2 className=''>It started with a small idea</h2>
                        <p>
                            A global brand with local beginnings, our story begain in a small studio in South London in early 2014
                        </p>
                    </div>
                    <button className='textBlock__button text-white border-0 pt-3 pb-3'>
                        <Link className='nav-link' to="/products">View collection</Link>
                    </button>
                </div>

                <div className='imageBlock col-12 col-md-6 p-0 d-flex justify-content-center'>
                    <img src={image} className=""/>
                </div>
                
            </div>
        </section>
    )
}

export default About