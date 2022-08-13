import React from 'react';
import {SubHeading} from "../../components";
import {pastaAndRice, seafood} from '../../constants/data';

import './SpecialMenu.css';

export const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
          <SubHeading title="Menu, które zdobędzie Twoje podniebienie"/>
          <h1 className="headtext__cormorant">Dzisiejsza specjalność</h1>
      </div>

      <div className="app__specialMenu-menu">

          <div className="app__specialMenu-menu_wine flex__center">
              <p className="app__specialMenu_menu_heading ">Makarony i ryż z WOK</p>
              <div className="app__specialMenu_menu_items">
                  {pastaAndRice.map((dish, index) => (
                      <p key={index}>{dish.title}</p>
                  ))}
              </div>
          </div>

          <div className="app__specialMenu-menu_img">
              <img src={require('../../assets/menu.jpg')} alt="menu img"/>
          </div>

          <div className="app__specialMenu-menu_cocktails flex__center">
              <p className="app__specialMenu_menu_heading ">Owoce morza</p>
              <div className="app__specialMenu_menu_items">
                  {seafood.map((dish, index) => (
                      <p key={index}>{dish.title}</p>
                  ))}
              </div>
          </div>

          <div style={{marginTop: '15px'}}>
              <button type="button" className="custom__button">Więcej</button>
          </div>
      </div>
  </div>
);
