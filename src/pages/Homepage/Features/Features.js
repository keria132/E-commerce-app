import React from 'react';
import "./Features.scss"
const delivery = require("./Delivery.png");
const checkmark = require("./Checkmark.png");
const purchase = require("./Purchase.png");
const sprout = require("./Sprout.png");

function Features(){
    return(
        <section className='features container-fluid p-0'>
            <div className='row gy-3 gy-md-5 m-auto ms-md-5 me-md-5 p-4 p-md-5 justify-content-between'>
                <h3 className='col-12 text-md-center'>What makes our brand different</h3>

                <div className='col-12 col-md-5 p-4 pt-xl-5 pb-xl-5 bg-light features__block'>
                    <img className='mb-3' src={delivery}/>
                    <h4>Next day as standard</h4>
                    <p>Order before 3pm and get your order the next day as standard</p>
                </div>

                <div className='col-12 col-md-5 p-4 pt-xl-5 pb-xl-5 bg-light features__block'>
                    <img className='mb-3' src={checkmark}/>
                    <h4>Made by true artisans</h4>
                    <p>Handmade crafted goods made with real passion and craftmanship</p>
                </div>

                <div className='col-12 col-md-5 p-4 pt-xl-5 pb-xl-5 bg-light features__block'>
                    <img className='mb-3' src={purchase}/>
                    <h4>Unbeatable prices</h4>
                    <p>For our materials and quality you won’t find better prices anywhere</p>
                </div>

                <div className='col-12 col-md-5 p-4 pt-xl-5 pb-xl-5 bg-light features__block'>
                    <img className='mb-3' src={sprout}/>
                    <h4>Recycled packaging</h4>
                    <p>We use 100% recycled to ensure our footprint is more manageable</p>
                </div>
            </div>
        </section>
    )
}

export default Features