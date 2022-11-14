import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./Product.scss"
import Listings from "../Listings/Listings"

function Product(){
    let params = useParams();
    console.log(params)
    
    let [productInfo, setproductInfo] = useState({});
    let [quantity, setQuantity] = useState(1);

    function handleQuantity(e){
        console.log(e.target.value);
        setQuantity(e.target.value)
    }

    function handleQuantityButton(e){
        console.log(e.target.textContent)
        if(e.target.textContent == "+"){
            setQuantity(++quantity)
            return;
        }
        setQuantity(--quantity)
    }

    useEffect(() => {
        console.log("fetching data...")

        fetch("https://api.escuelajs.co/api/v1/products/" + params.productId)
        .then((response) => {
            if(!response.ok){
                throw new Error("Network response failed with code: " + response.status, {cause: response});
            }
            return response.json();
        })
        .then((result) => {
            console.log(result)
            setproductInfo(result)
        })
        .catch((error) => console.log("Critical error: " + error.message))

        window.scrollTo(0, 0)
    }, [params])

    if(productInfo.id === undefined){
        return null;
    }

    return(
        <>
        <section className='product row p-md-5 p-lg-0 m-auto m-md-5 m-lg-0'>

            <div id="productCarousel" className='carousel slide col-12 col-lg-6 p-0'>

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className='carousel-inner'>

                    {productInfo.images.map((image, index) => {
                        return(
                            <div className={'carousel-item' + (index === 0 ? " active" : '')} key={index}>
                                <img src={image} className="d-block w-100" alt='product_image'/>
                            </div>
                        )
                    })}

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

            <div className='product-description col-12 col-lg-5 p-4 p-md-0 p-lg-5 pe-lg-0 ps-lg-0 m-auto mt-md-3 m-lg-auto'>

                <div className='row gy-1 m-auto'>
                    <h2 className='p-0'>{productInfo.title}</h2>

                    <h4 className='p-0 mb-3'>{"£" + productInfo.price}</h4>

                    <p className='p-0'>
                        Product description:
                        <br/>
                        {productInfo.description}
                    </p>

                    <div className="product-description-quantity p-0 d-md-flex">
                        <label htmlFor="quantityInput" className="col-12 col-md-2 form-label align-middle m-md-auto me-md-0 ms-md-0">Quantity</label>
                        
                        <div className="product-description-quantity__input input-group">
                            <button className="rounded-0 border-0 p-3" type="button" id="button-addon1" onClick={handleQuantityButton}>-</button>
                            <input type="text" className="form-control rounded-0 bg-light border-0 text-center p-2" value={quantity} onChange={handleQuantity}/>
                            <button className="rounded-0 border-0 p-3 me-3" type="button" id="button-addon1" onClick={handleQuantityButton}>+</button>
                        </div>

                        <button className="product-description-quantity__button text-white p-2 col-12 col-md-3" type="button">Add to cart</button>
                    </div>
                </div>

            </div>

        </section>

        <h3 className='ps-4 ps-md-5 pt-lg-5 mb-0 mt-4 ms-md-5 mt-lg-5'>You might also like</h3>

        <Listings />

        </>
    )
}

export default Product