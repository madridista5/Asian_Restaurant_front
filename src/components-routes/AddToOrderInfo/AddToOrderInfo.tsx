import React, {useContext} from "react";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {SelectedDishContext} from "../../contexts/selectedDish.context";
import {SubHeading} from "../../components";
import {Link} from "react-router-dom";

export const AddToOrderInfo = () => {
    const selectedDish = useContext(SelectedDishContext);

    return <>
        <NavbarRoutes/>

        <div className="app__header app__wrapper section__padding">
            <div className="app__wrapper_info">
                <SubHeading title="Potwierdzenie"/>
                <h1 className="app__header-h1">Asian Food</h1>
                <p className="p__opensans" style={{margin: '2rem 0'}}>Danie "{selectedDish.name}" zostało dodane do Twojego zamówienia.</p>
                <button type="button" className="custom__button"><Link to="/menu">Powrót do menu</Link></button>
            </div>

            <div className="app__wrapper_img">
                <img src={require('../../assets/welcome.jpg')} alt="header img"/>
            </div>
        </div>
    </>
}