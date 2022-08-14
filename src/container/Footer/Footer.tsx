import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

import './Footer.css';

export const Footer = () => (
  <div className="app__footer section__padding">
      <div className="app__footer-links">
          <div className="app__footer-links_contact">
              <h1 className="app__footer-headtext">Kontakt</h1>
              <p className="p__opensans">ul. Czekoladowa 8, 57-300 Kłodzko</p>
              <p className="p__opensans">74 867 00 00</p>
          </div>
          <div className="app__footer-links_logo">
              <h1 className="app__footer-headtext">Asian Food</h1>
              <img src={require('../../assets/spoon.png')} alt="spoon" className="spoon__img" style={{marginTop: '15px'}}/>
              <div className="app__footer-links_icons">
                  <FiFacebook/>
                  <FiTwitter/>
                  <FiInstagram/>
              </div>
          </div>
          <div className="app__footer-links_work">
              <h1 className="app__footer-headtext">Godziny pracy</h1>
              <p className="p__opensans">Poniedziałek - Piątek:</p>
              <p className="p__opensans">11:00 - 23:00</p>
              <p className="p__opensans">Sobota - Niedziela:</p>
              <p className="p__opensans">12:00 - 23:00</p>
          </div>
      </div>
      <div className="footer__copyright">
          <p className="p__opensans">2022 Asian Food. All rights reserved.</p>
      </div>
  </div>
);
