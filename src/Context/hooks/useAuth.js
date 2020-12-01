import { useState, useEffect } from 'react';

import api from '../../services/api';
import history from '../../history';

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.authorization = `bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function handleLogIn(username, password) {
        const user = {
            username,
            password
        }

        try {
            const { data: { token } } = await api.post("/sessions", user);

            localStorage.setItem("token", JSON.stringify(token));
            api.defaults.headers.authorization = `bearer ${token}`;
            setAuthenticated(true);
            
            history.push("/home");
        } catch (err) {
            alert(err);
        }
    }

    function handleLogOut() {
        setAuthenticated(false);

        localStorage.removeItem("token");
        api.defaults.headers.authorization = undefined;
        history.push("/login");
    }

    return { authenticated, loading, handleLogIn, handleLogOut };
}