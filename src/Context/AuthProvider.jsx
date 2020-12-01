import React, { createContext } from 'react';

import useAuth from "./hooks/useAuth";

const Context = createContext();

function AuthProvider({ children }) {
    const { 
        authenticated, loading, handleLogIn, handleLogOut 
    } = useAuth();
    
    return (
        <Context.Provider value={{ loading, authenticated, handleLogIn, handleLogOut}}>
            {children}
        </Context.Provider>
    );
}


export { Context, AuthProvider };