import React from "react";
import {SubHeading} from "../../components";
import {Link} from "react-router-dom";

export const NotLoggedInfo = () => (
    <div className="app__header app__wrapper section__padding">
        <div className="app__wrapper_info">
            <SubHeading title="Nie jesteś zalogowany"/>
            <h1 className="app__header-h1">Asian Food</h1>
            <p className="p__opensans" style={{margin: '2rem 0'}}>Podgląd zamówienia jest możliwy tylko dla zalogowanych
                użytkowników. Zaloguj się.</p>
            <button type="button" className="custom__button"><Link to="/login">Przejdź do logowania</Link></button>
        </div>

        <div className="app__wrapper_img">
            <img src={require('../../assets/welcome.jpg')} alt="header img"/>
        </div>
    </div>
);