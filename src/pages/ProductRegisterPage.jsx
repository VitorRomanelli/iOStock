import React, { useState } from 'react';
import history from "../history";
import SideBar from "../components/SideBar";

import "../styles/pages/CreateProductPage.css";

import api from '../services/api';

export default function ProductRegisterPage() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        if(!name){
            alert("Insira um nome!");
            return;
        }

        if(!price){
            alert("Insira uma preço!");
            return;
        }

        try {
            await api.post("/register/product", {name, price});
            history.push("/home");
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div id="create-product-page">

            <SideBar />

            <main>
                <h1>Cadastrar Produto</h1>
                <p>Preencha todos os campos</p>

                <form onSubmit={handleSubmit} method="post">
                    <div className="input-block">
                        <label htmlFor="name">Nome:</label>
                        <input id="name" value={name} onChange={event => setName(event.target.value)} required/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="price">Preço:</label>
                        <input id="price" value={price} type="number" onChange={event => setPrice(event.target.value)} required/>
                    </div>

                    <button type="submit" title="Registrar">
                        Cadastrar
                    </button>
                </form>

            </main>

        </div>
    );
}