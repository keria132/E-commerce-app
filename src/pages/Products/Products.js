import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Products.scss";

function ProductCard(props){

    return(
        <div className='card col-5 col-md-5 p-0 rounded-0 border-0'>
            <img className='card-img-top rounded-0' src={props.img}/>
            <div className='card-body ps-0 pe-0'>
                <h4 className='card-title'>
                    <Link className='text-black text-decoration-none' to={"/product/" + props.id}>{props.title}</Link>
                </h4>
                <p className='card-text'>{props.price + "$"}</p>
            </div>
        </div>
    )
}

function Products(){

    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/categories/3/products?offset=0&limit=12")
        .then((response) => {
            if(!response.ok){
                throw new Error("Network response failed with code: " + response.status, {cause: response});
            }
            return response.json();
        })
        .then((result) => {
            console.log(result)
            setProducts(result)
        })
        .catch((error) => console.log("Critical error: " + error.message))

        window.scrollTo(0, 0)
    }, [])



    return(
        <section className='products'>
            <div className='header row text-center m-auto pt-5 pb-3'>
                <h1 className='text-white'>All products</h1>
            </div>

            <div className='menu-bar row m-auto ms-md-5 p-4 pb-0 ps-md-5 justify-content-between justify-content-md-start'>

                <div className="category col-5 col-md-2 bg-light p-0 me-md-4 dropdown">
                    <button className="btn btn-light dropdown-toggle w-100 rounded-0" type="button" id="categoryMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="categoryMenuButton">
                        <li><a className="dropdown-item" href="#">Something</a></li>
                        <li><a className="dropdown-item" href="#">Something</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

                <div className="sorting col-5 col-md-2 bg-light p-0 me-md-4 dropdown">
                    <button className="btn btn-light dropdown-toggle w-100 rounded-0" type="button" id="sortMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort by
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="sortMenuButton">
                        <li><a className="dropdown-item" href="#">Something</a></li>
                        <li><a className="dropdown-item" href="#">Something</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

            </div>

            <div className='listing row m-auto ms-md-5 me-md-5 p-4 p-md-5 justify-content-between gy-4'>

                {products.length === 0 ? false : products.map((product, index) => <ProductCard key={index} id={product.id} img={product.images[0]} title={product.title} price={product.price}/>)}

                <button className='btn btn-light rounded-0 col-12 col-md-5 col-lg-2 m-auto mt-lg-5'>View collection</button>
            </div>
        </section>
    )
}

export default Products;