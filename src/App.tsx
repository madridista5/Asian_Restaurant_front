import React, {useState} from 'react';
import {HomePageWrapper} from "./container/HomePageWrapper/HomePageWrapper";
import {Route, Routes} from "react-router-dom";
import {LoginForm} from "./components-routes/LoginForm/LoginForm";
import {UserRoleContext} from "./contexts/userRole.context";

import './App.css';
import {RegisterForm} from "./components-routes/RegisterForm/RegisterForm";

export const App = () => {
    const [userRole, setUserRole] = useState('');

    return (
        <UserRoleContext.Provider value={{userRole, setUserRole}}>
            <Routes>
                <Route path="/" element={<HomePageWrapper/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/register" element={<RegisterForm/>}/>
            </Routes>
        </UserRoleContext.Provider>
    );
};
