import React from 'react';

import './Header.css';
import {SubHeading} from "../../components";

export const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
          <SubHeading title="Spróbuj nowego smaku"/>
          <h1 className="app__header-h1">Klucz do wyśmienitego jedzenia</h1>
          <p className="p__opensans" style={{margin: '2rem 0'}}>Asian Food to podróż do krainy pełnej aromatycznego jedzenia, zapachów i niecodziennych smaków. Gotujemy dla Was z pasją od 2015 roku. Tworzymy miejsce przyjazne dla Wszystkich i gwarantujemy, że każdy znajdzie w naszej karcie coś dla siebie.</p>
          <button type="button" className="custom__button">Zobacz menu</button>
      </div>

      <div className="app__wrapper_img">
          <img src={require('../../assets/welcome.jpg')} alt="header img"/>
      </div>
  </div>
);
