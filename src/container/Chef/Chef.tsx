import React from 'react';
import {SubHeading} from "../../components";

import './Chef.css';

export const Chef = () => (
    <div className="app__bg app__wrapper section__padding">

        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={require('../../assets/chef.jpg')} alt="chef"/>
        </div>

        <div className="app__wrapper_info">
            <SubHeading title="Szef kuchni"/>
            <h1 className="headtext__cormorant">Nasze wartości</h1>
            <div className="app__chef-content">

                <div className="app__chef-content_quote">
                    <img src={require('../../assets/quote.png')} alt="qoute"/>
                    <p className="p__opensans">Gotowanie to moja pasja. Uwielbiam przygotowywać azjatyckie potrawy.</p>
                </div>
                <p className="p__opensans">Świadomość tego że jesteśmy tym co jemy, sprawia że najważniejsze dla nas
                    jest gotowanie zdrowych, i lekkostrawnych dań serwowanych w przyjemnej atmosferze. Nad procesem
                    powstawania i serwowania dań pieczę sprawuje profesjonalna załoga restauracji Asian Food.</p>

                <div className="app__chef-sign">
                    <p>Daiki Takahashi</p>
                    <p className="p__opensans">Szef kuchni</p>
                </div>

            </div>
        </div>

    </div>
);
