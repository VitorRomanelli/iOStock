import React, { useContext, useState } from 'react';

import { Context } from "../Context/AuthProvider";

import { FiPlusCircle, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../styles/pages/LogInPage.css";

import img from '../images/image.jpg';

function LogInPage() {
    const { handleLogIn } = useContext(Context);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        handleLogIn(username, password);
    }

    return (
        <div id="login-page">
            <img src={img} alt="Happy" />

            <div className="content-wrapper">

                <main>
                    <span>Bem vindo</span>
                    <h1>Entre com sua conta!</h1>
                </main>

                <form onSubmit={handleSubmit} method="post">
                    <div className="input-block">
                        <label htmlFor="username">Usúario/E-mail:</label>
                        <input name="username" id="username" value={username} onChange={event => setUsername(event.target.value)} required />
                    </div>

                    <div className="input-block">
                        <label htmlFor="password">Senha:</label>
                        <input name="password" id="password" value={password} type="password" onChange={event => setPassword(event.target.value)} required />
                    </div>

                    <div className="buttons" >
                        <button type="submit" title="LogIn">
                            <FiLogIn size={26} color="#FFF" />
                        </button>

                        <Link to="/register" className="register" title="Registrar">
                            <FiPlusCircle size={26} color="#FFF" />
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default LogInPage;