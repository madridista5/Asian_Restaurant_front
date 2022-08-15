import React from 'react';
import {HomePageWrapper} from "./container/HomePageWrapper/HomePageWrapper";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';

export const App = () => (
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageWrapper/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
