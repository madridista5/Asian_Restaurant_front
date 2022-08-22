import React from "react";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {SubHeading} from "../../components";
import {Link} from "react-router-dom";

export const OrderConfirmation = () => {

    return <>
        <NavbarRoutes/>

        <div className="app__header app__wrapper section__padding">
            <div className="app__wrapper_info">
                <SubHeading title='Potwierdzenie'/>
                <h1 className="app__header-h1">Asian Food</h1>
                <p className="p__opensans" style={{margin: '2rem 0'}}>Dziękujemy za złożenie zamówienia.
                </p>
                <button type="button" className="custom__button"><Link to="/">Powrót do strony głównej</Link></button>
            </div>

            <div className="app__wrapper_img">
                <img src={require('../../assets/welcome.jpg')} alt="header img"/>
            </div>
        </div>
    </>
}