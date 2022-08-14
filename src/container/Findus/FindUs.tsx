import React from 'react';
import {SubHeading} from "../../components";

export const FindUs = () => (
    <div className="app__bg app__wrapper section__padding" id="contact">
        <div className="app__wrapper_info">
            <SubHeading title="Kontakt"/>
            <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Znajdź nas</h1>
            <div className="app__wrapper-content">
                <p className="p__opensans">ul. Czekoladowa 8, 57-300 Kłodzko</p>
                <p className="p__cormorant" style={{color: '#DCCA87', margin: '2rem 0'}}>Lokal czynny codziennie</p>
                <p className="p__opensans">Poniedziałek - Piątek: 11:00 - 23:00</p>
                <p className="p__opensans">Sobota - Niedziela: 12:00 - 23:00</p>
            </div>
        </div>
        <div className="app__wrapper_img">
            <img src={require('../../assets/findus.jpg')} alt="find_us"/>
        </div>
    </div>
);
