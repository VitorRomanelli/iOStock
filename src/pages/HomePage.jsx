import React, { useState, useEffect } from 'react';
import { FiBox } from "react-icons/fi";
import SideBar from '../components/SideBar';

import "../styles/pages/HomePage.css";

import api from '../services/api';

export default function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await api.get("/products");

            setProducts(data);
        })();
    }, []);

    return (
        <div id="home-page">
            <SideBar />

            <main>
                {
                
                products.length ? 
                products.map(product => {
                    return (
                        <div className="product" key={product.id}>
                            <FiBox size={80} color={"#6271FF"} className="icon"/>
                            <h1>{product.name}</h1>
                            <span className="price">R${product.price}</span>
                        </div>
                    );
                })
                :
                <div className="product">
                    <FiBox size={80} color={"#6271FF"} className="icon"/>
                    <h1>Nenhum produto encontrado!</h1>
                </div>
    
                
                }
            </main>
        </div>
    );
}