import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import Image from "../images/image2.png";

import history from "../history";

import "../styles/pages/LandingPage.css";

export default function () {
    
    function RedirectLogIn() {
        history.push("/login");
    }
    
    return (
        <div id="landing-page">
            <h1>I/O STOCK</h1>
            <img src={Image}></img>
            <button type="button" className="GoLogInPage" onClick={RedirectLogIn}>
                <FiArrowRight size={24} color="#000" />
            </button>
        </div>
    );
}