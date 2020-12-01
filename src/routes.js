import React, {useContext} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import LogInPage from "./pages/LogInPage";
import UserRegisterPage from "./pages/UserRegisterPage";
import HomePage from "./pages/HomePage";
import ProductRegisterPage from "./pages/ProductRegisterPage";
import StockMovesPage from "./pages/StockMovesPage";
import StockMoveRegisterPage from "./pages/StockMoveRegisterPage";
import LandingPage from "./pages/LandingPage";

import { Context } from "./Context/AuthProvider";

function CustomRoute({isPrivate, ...rest}) {
    const {  loading, authenticated } = useContext(Context);

    if (loading) {
        return <h2> Loading... </h2>
    }

    if(isPrivate && !authenticated) {
        return <Redirect to="/login" />;
    }

    return <Route {...rest} />;
}

export default function Routes() {
    return (
        <Switch>
            <CustomRoute exact path="/" component={LandingPage} />
            <CustomRoute exact path="/login" component={LogInPage} />
            <CustomRoute exact path="/register" component={UserRegisterPage} />
            <CustomRoute isPrivate exact path="/home" component={HomePage} />
            <CustomRoute isPrivate exact path="/register/product" component={ProductRegisterPage} />
            <CustomRoute isPrivate exact path="/register/stockmove" component={StockMoveRegisterPage} />
            <CustomRoute isPrivate exact path="/stockmoves" component={StockMovesPage} />
        </Switch>
    )
}