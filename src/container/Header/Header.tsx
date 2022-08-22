import React from 'react';
import {SubHeading} from "../../components";
import {Link} from "react-router-dom";

import './Header.css';

export const Header = () => (
    <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
            <SubHeading title="Spróbuj nowego smaku"/>
            <h1 className="app__header-h1">Asian Food</h1>
            <p className="p__opensans" style={{margin: '2rem 0'}}>Asian Food to podróż do krainy pełnej aromatycznego
                jedzenia, zapachów i niecodziennych smaków.</p>
            <button type="button" className="custom__button"><Link to="/menu">Zobacz menu</Link></button>
        </div>

        <div className="app__wrapper_img">
            <img src={require('../../assets/welcome.jpg')} alt="header img"/>
        </div>
    </div>
);
