import React, { useState, useEffect } from 'react';
import { FiUpload, FiDownload } from "react-icons/fi";
import SideBar from '../components/SideBar';

import "../styles/pages/StockMovesPage.css";

import api from '../services/api';

export default function HomePage() {
    const [stockMoves, setStockMoves] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await api.get("/stockmoves");
            setStockMoves(data);
        })();
    }, []);

    return (
        <div id="stockmoves-page">
            <SideBar />

            <main>
                {
                    stockMoves.length ?
                        stockMoves.map(stockMove => {
                            return (
                                <div className="moves" key={stockMove.id}>
                                    <div className="type-move">
                                        {stockMove.type ?
                                            <h1 className="entry">Entrada</h1>
                                            : <h1 className="exit">Saída</h1>
                                        }
                                        {stockMove.type ?
                                            <FiUpload size={80} color={"#6271FF"} className="icon" />
                                            : <FiDownload size={80} color={"#208da3"} className="icon" />
                                        }
                                    </div>
                                    <div className="product" key={stockMove.product.id}>
                                        <h2>{stockMove.product.name}</h2>
                                        <span className="price">R${stockMove.product.price}</span>
                                    </div>
                                </div>
                            );
                        })
                        :
                        <div className="product">
                            <h2>Nenhuma movimentação encontrada</h2>
                        </div>

                }
            </main>
        </div>
    );
}