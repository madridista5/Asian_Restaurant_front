import React from 'react';
import {HomePageWrapper} from "./container/HomePageWrapper/HomePageWrapper";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';
import {LoginForm} from "./components-routes/LoginForm/LoginForm";

export const App = () => (
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageWrapper/>}/>
                <Route path="/login" element={<LoginForm/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
