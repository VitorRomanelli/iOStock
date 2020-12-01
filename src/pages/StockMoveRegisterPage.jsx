import React, { useState, useEffect } from 'react';
import  SideBar from '../components/SideBar';
import history from '../history';

import "../styles/pages/StockMoveRegisterPage.css";

import api from '../services/api';

export default function StockMoveRegisterPage() {

    const [productsList, setProductsList] = useState([]);
    const [productId, setProductId] = useState(1);
    const [type, setType] = useState(true);

    useEffect(() => {
        (async () => {
            const { data } = await api.get("/products");

            setProductsList(data);
        })();
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await api.post("/register/stockmoves", {type, productId});
            alert("Movimentação cadastrada com sucesso!");
            history.push("/stockmoves");        
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div id="stock-register-page">

            <SideBar />

            <main>
                <h1>Cadastrar Movimentação no Estoque</h1>
                <p>Preencha todos os campos</p>

                <form onSubmit={handleSubmit} method="post">
                    <select name="type" value={type} id="typeMove" className="typeMove" onChange={event => setType(event.target.value)}>
                        <option value={true}>Entrada</option>
                        <option value={false}>Saída</option>
                    </select>

                    <select name="products" value={productId} id="products" className="products" onChange={event => setProductId(event.target.value)}>
                        {productsList.map(product => {
                            return (
                                <option value={product.id} key={product.id}>{product.name}</option>
                            );
                        })}
                    </select>

                    <button type="submit" title="Registrar">
                        Cadastrar
                    </button>
                </form>

            </main>

        </div>
    );
}