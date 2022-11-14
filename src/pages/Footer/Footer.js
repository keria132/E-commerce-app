import React from 'react';
import "./Footer.scss";

function Footer(){
    return(
        <footer className='footer text-white container-fluid p-0'>
            <div className='row m-auto p-4 p-md-5 pb-md-3 ms-md-5 me-md-5 justify-content-between'>

                <div className='col-5 col-sm-3 col-lg-2 p-0'>
                    <h6>Categories</h6>
                    <ul className='list-unstyled'>
                        <li>Crockery</li>
                        <li>Furniture</li>
                        <li>Homeware</li>
                        <li>Plant pots</li>
                        <li>Chairs</li>
                        <li>Crockery</li>
                    </ul>
                </div>

                <div className='col-5 col-sm-3 col-lg-2 p-0'>
                    <h6>Menu</h6>
                    <ul className='list-unstyled'>
                        <li>New arrivals</li>
                        <li>Best sellers</li>
                        <li>Recently viewed</li>
                        <li>Popular this week</li>
                        <li>All products</li>
                    </ul>
                </div>

                <div className='col-5 col-sm-3 col-lg-2 p-0'>
                    <h6>Our company</h6>
                    <ul className='list-unstyled'>
                        <li>About us</li>
                        <li>Vacancies</li>
                        <li>Contact us</li>
                        <li>Privacy</li>
                        <li>Returns policy</li>
                    </ul>
                </div>

                <div className='col-12 col-lg-6 p-0'>
                    <h6 className='p-0 mt-3'>Join our mailing list</h6>
                    <div className="form-email flex-nowrap input-group p-0">
                        <input className='form-email__input w-75 border-0 ps-4 pt-3 pb-3 text-white' placeholder='your@email.com' type={"email"}></input>
                        <button className='w-25 border-0 bg-white' type='submit'>Sing up</button>
                    </div>
                </div>
                

                <p className='col-12 border-top m-0 mt-3 ps-0 pe-0 pt-3 text-center'>Copyright 2022 Avion LTD</p>
            </div>
        </footer>
    )   
}

export default Footer;