import React, { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";

import history from "../history";
import "../styles/pages/CreateUserPage.css"

import api from '../services/api';

export default function UserRegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    
    async function handleSubmit(event) {
        event.preventDefault();

        if(!username){
            alert("Insira um usuário!");
            return;
        }

        if(!password){
            alert("Insira uma senha!");
            return;
        }

        if(!repeatPassword){
            alert("Repita sua senha!");
            return;
        }

        if(password !== repeatPassword) {
            alert("As senhas são diferentes!");
            return;
        }

        try {
            await api.post("/register", {username, password});
            history.push("/login");
        } catch (err) {
            alert(err);          
        }
    }

    return (
        <div id="create-user-page">

            <aside className="app-sidebar">

                <footer>
                    <button type="button" onClick={history.goBack}>
                        <FiArrowLeft size={24} color="#FFF" />
                    </button>
                </footer>

            </aside>

            <main>
                <h1>Cadastro</h1>
                <p>Preencha todos os campos</p>

                <form onSubmit={handleSubmit} method="post">
                    <div className="input-block">
                        <label htmlFor="username">Usúario/E-mail:</label>
                        <input id="username" value={username} onChange={event => setUsername(event.target.value)} required />
                    </div>

                    <div className="input-block">
                        <label htmlFor="password">Senha:</label>
                        <input id="password" value={password} type="password" onChange={event => setPassword(event.target.value)} required />
                    </div>

                    <div className="input-block">
                        <label htmlFor="repeatPassword"> Confirme a Senha:</label>
                        <input id="repeatPassword" value={repeatPassword} type="password" onChange={event => setRepeatPassword(event.target.value)} required />
                    </div>

                    <button type="submit" title="Registrar">
                        Confimar
                    </button>
                </form>

            </main>

        </div>
    );
}