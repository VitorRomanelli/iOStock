import React from 'react';
import { Router } from "react-router-dom";

import Routes from './routes';
import history from "./history";

import "./styles/global.css";

import { AuthProvider } from "./Context/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <Router history={history}>
                <Routes />
            </Router>
        </AuthProvider>
    );
}

export default App;
