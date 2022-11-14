import React from 'react';
import "./Subscription.scss";

function Subscription(){
    return(
        <section className='subscription container-fluid p-0 pt-lg-5 pb-lg-5 text-white'>
            <div className="row col-md-8 col-xl-5 p-4 pt-lg-5 pb-lg-5 m-auto gy-2 text-md-center">
                <h2 className='col-12 p-0'>Join the club and get the benefits</h2>
                <p className='col-12 p-0'>
                    Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
                </p>
                <form className='form col-12 p-0 d-md-flex flex-wrap justify-content-center' action='/#' autoComplete="on">
                    <div className="form-check m-md-2">
                        <input className="form-check-input rounded-circle" type="checkbox" value=""/>
                        <label className="form-check-label">
                            Exclusive offers
                        </label>
                    </div>

                    <div className="form-check m-md-2">
                        <input className="form-check-input rounded-circle" type="checkbox" value=""/>
                        <label className="form-check-label">
                            Free events
                        </label>
                    </div>

                    <div className="form-check m-md-2">
                        <input className="form-check-input rounded-circle" type="checkbox" value=""/>
                        <label className="form-check-label">
                            Large discounts
                        </label>
                    </div>

                    <div className="w-100 form-email flex-nowrap input-group mt-4">
                        <input className='w-75 border-0 ps-4 pt-3 pb-3' placeholder='your@email.com' type={"email"}></input>
                        <button className='w-25 border-0 text-white' type='submit'>Sing up</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Subscription