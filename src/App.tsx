import React, {useState} from 'react';
import {HomePageWrapper} from "./container/HomePageWrapper/HomePageWrapper";
import {Route, Routes} from "react-router-dom";
import {LoginForm} from "./components-routes/LoginForm/LoginForm";
import {UserRoleContext} from "./contexts/userRole.context";
import {RegisterForm} from "./components-routes/RegisterForm/RegisterForm";
import {SignOutInfo} from "./components-routes/SignOutInfo/SignOutInfo";
import {AllMenu} from "./components-routes/AllMenu/AllMenu";

import './App.css';
import {SelectedDishContext} from "./contexts/selectedDish.context";

export const App = () => {
    const [userRole, setUserRole] = useState('');
    const [dish, setDish] = useState({});

    return (
        <UserRoleContext.Provider value={{userRole, setUserRole}}>
            <SelectedDishContext.Provider value={{dish, setDish}}>
            <Routes>
                <Route path="/" element={<HomePageWrapper/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/register" element={<RegisterForm/>}/>
                <Route path="/signOut" element={<SignOutInfo/>}/>
                <Route path="/menu" element={<AllMenu/>}/>
            </Routes>
            </SelectedDishContext.Provider>
        </UserRoleContext.Provider>
    );
};
