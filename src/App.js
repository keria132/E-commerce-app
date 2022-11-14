import React from 'react';
import { HashRouter , BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from './pages/Homepage/Homepage';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product'
import NoPage from './pages/NoPage/NoPage';

function App(){
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="products" element={<Products />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App;