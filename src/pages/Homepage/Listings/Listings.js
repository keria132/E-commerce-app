import React from 'react';
import "./Listings.scss"
const product1 = require("./Product1.png")
const product2 = require("./Product2.png")
const product3 = require("./Product3.png")
const product4 = require("./Product4.png")

function Listings(){
    return(
        <section className='listings container-fluid p-0'>
            <div className='row p-4 m-auto ms-md-5 me-md-5 p-md-5 justify-content-between'>

                <div className='card col-md-5 p-0 rounded-0 border-0'>
                    <img className='card-img-top rounded-0' src={product1}/>
                    <div className='card-body ps-0 pe-0'>
                        <h4 className='card-title'>Some product</h4>
                        <p className='card-text'>£250</p>
                    </div>
                </div>

                <div className='card col-md-5 p-0 rounded-0 border-0'>
                    <img className='card-img-top rounded-0' src={product2}/>
                    <div className='card-body ps-0 pe-0'>
                        <h4 className='card-title'>Some product</h4>
                        <p className='card-text'>£250</p>
                    </div>
                </div>

                <div className='card col-md-5 p-0 rounded-0 border-0'>
                    <img className='card-img-top rounded-0' src={product3}/>
                    <div className='card-body ps-0 pe-0'>
                        <h4 className='card-title'>Some product</h4>
                        <p className='card-text'>£250</p>
                    </div>
                </div>

                <div className='card col-md-5 p-0 rounded-0 border-0'>
                    <img className='card-img-top rounded-0' src={product4}/>
                    <div className='card-body ps-0 pe-0'>
                        <h4 className='card-title'>Some product</h4>
                        <p className='card-text'>£250</p>
                    </div>
                </div>

                <button className='btn btn-light rounded-0 col-12 col-md-5 col-lg-2 m-auto'>View collection</button>
            </div>
        </section>
    )
}

export default Listings;