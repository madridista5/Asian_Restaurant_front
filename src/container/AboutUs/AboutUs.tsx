import React from 'react';

import './AboutUs.css';

export const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
          <img src={require('../../assets/G.png')} alt="g letter"/>
      </div>
      <div className="app__aboutus-content flex__center">
          <div className="app__aboutus-content_about">
              <h1 className="headtext__cormorant">O nas</h1>
              <img src={require('../../assets/spoon.png')} alt="about_spoon" className="spoon__img"/>
              <p className="p__opensans">Wybieramy pewne źródła najwyższej jakości żywności. Naturalny skład, produkty sprowadzane prosto z Tajlandii- to wszystko dla Was, naszych gości, których zadowolenie jest najlepszą motywacją do ciągłego rozwoju.</p>
          </div>

          <div className="app__aboutus-content_knife flex__center">
              <img src={require('../../assets/knife.png')} alt="about_knife"/>
          </div>

          <div className="app__aboutus-content_history">
              <h1 className="headtext__cormorant">Nasza historia</h1>
              <img src={require('../../assets/spoon.png')} alt="about_spoon" className="spoon__img"/>
              <p className="p__opensans">Gotujemy dla Was z pasją od 2015 roku. Tworzymy miejsce przyjazne dla Wszystkich i gwarantujemy, że każdy znajdzie w naszej karcie coś dla siebie.</p>
          </div>
      </div>
  </div>
);
