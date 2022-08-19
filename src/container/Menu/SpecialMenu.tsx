import React from 'react';
import { Link } from 'react-router-dom';
import {MenuItem, SubHeading} from "../../components";
import {pastaAndRice, seafood} from '../../constants/data';

import './SpecialMenu.css';

export const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
          <SubHeading title="Menu, które zdobędzie Twoje podniebienie"/>
          <h1 className="headtext__cormorant">Dzisiejsza specjalność</h1>
      </div>

      <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_pasta flex__center">
              <p className="app__specialMenu-menu_heading">Makarony i ryż z WOK</p>
              <div className="app__specialMenu_menu_items">
                  {pastaAndRice.map((dish, index) => (
                      <MenuItem key={index} title={dish.title} price={dish.price} description={dish.description}/>
                  ))}
              </div>
          </div>

          <div className="app__specialMenu-menu_img">
              <img src={require('../../assets/menu.jpg')} alt="menu img"/>
          </div>

          <div className="app__specialMenu-menu_seafood flex__center">
              <p className="app__specialMenu-menu_heading">Owoce morza</p>
              <div className="app__specialMenu_menu_items">
                  {seafood.map((dish, index) => (
                      <MenuItem key={index} title={dish.title} price={dish.price} description={dish.description}/>
                  ))}
              </div>
          </div>
      </div>

      <div style={{marginTop: '15px'}}>
          <button type="button" className="custom__button"><Link to="/menu">Zobacz menu</Link></button>
      </div>

  </div>
);
