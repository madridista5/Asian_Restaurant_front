import React from "react";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {SubHeading} from "../../components";
import {Link} from "react-router-dom";

export const EditDishInfo = () => {

    return <>
        <NavbarRoutes/>

        <div className="app__header app__wrapper section__padding">
            <div className="app__wrapper_info">
                <SubHeading title="Potwierdzenie"/>
                <h1 className="app__header-h1">Asian Food</h1>
                <p className="p__opensans" style={{margin: '2rem 0'}}>Danie zostało edytowane.</p>
                <button type="button" className="custom__button"><Link to="/editMenu">Powrót do edycji menu</Link></button>
            </div>

            <div className="app__wrapper_img">
                <img src={require('../../assets/cook.png')} alt="cook img"/>
            </div>
        </div>
    </>
}