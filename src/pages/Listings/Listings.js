import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Listings.scss"

function ProductCard(props){
    return(
        <div className='card col-md-5 p-0 rounded-0 border-0'>
            <img className='card-img-top rounded-0' src={props.image}/>
            <div className='card-body ps-0 pe-0'>
                <h4 className='card-title'>
                    <Link className='text-black text-decoration-none' to={"/product/" + props.id}>{props.title}</Link>
                </h4>
                <p className='card-text'>{props.price + "$"}</p>
            </div>
        </div>
    )
}

function Listings(){
    let [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("fetching data...")

        fetch("https://api.escuelajs.co/api/v1/categories/3/products?offset=0&limit=4")
        .then((response) => {
            if(!response.ok){
                throw new Error("Network response failed with code: " + response.status, {cause: response});
            }
            return response.json();
        })
        .then((result) => {
            setProducts(result)
        })
        .catch((error) => console.log("Critical error: " + error.message))

    }, []);

    return(
        <section className='listings container-fluid p-0'>
            <div className='row p-4 m-auto ms-md-5 me-md-5 p-md-5 justify-content-between'>

                {console.log("element rendered")}
                {products.length === 0 ? false : products.map((product, index) => <ProductCard key={index} id={product.id} image={product.images[0]} title={product.title} price={product.price}/>) }

                <button className='btn btn-light rounded-0 col-12 col-md-5 col-lg-2 m-auto'>
                    <Link className='nav-link' to="/products">View collection</Link>
                </button>
                
            </div>
        </section>
    )
}

export default Listings;