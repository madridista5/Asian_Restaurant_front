import React from 'react';
import { Navbar } from './components';
import {AboutUs, Chef, SpecialMenu, Laurels, Gallery, FindUs, Intro, Footer, Header } from './container';

import './App.css';

export const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);
