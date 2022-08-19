import React, {useState} from 'react';
import {HomePageWrapper} from "./container/HomePageWrapper/HomePageWrapper";
import {Route, Routes} from "react-router-dom";
import {LoginForm} from "./components-routes/LoginForm/LoginForm";
import {UserRoleContext} from "./contexts/userRole.context";

import './App.css';

export const App = () => {
    const [userRole, setUserRole] = useState('');

    return (
        <UserRoleContext.Provider value={{userRole, setUserRole}}>
            <Routes>
                <Route path="/" element={<HomePageWrapper/>}/>
                <Route path="/login" element={<LoginForm/>}/>
            </Routes>
        </UserRoleContext.Provider>
    );
};
