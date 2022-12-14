import React, {useState} from 'react';
import {HomePageWrapper} from "./container/HomePageWrapper/HomePageWrapper";
import {Route, Routes} from "react-router-dom";
import {LoginForm} from "./components-routes/LoginForm/LoginForm";
import {UserRoleContext} from "./contexts/userRole.context";
import {RegisterForm} from "./components-routes/RegisterForm/RegisterForm";
import {SignOutInfo} from "./components-routes/SignOutInfo/SignOutInfo";
import {AllMenu} from "./components-routes/AllMenu/AllMenu";
import {SelectedDishContext} from "./contexts/selectedDish.context";
import {AddToOrderInfo} from "./components-routes/AddToOrderInfo/AddToOrderInfo";
import {Order} from "./components-routes/Order/Order";
import {DeleteDishFromOrderInfo} from "./components-routes/DeleteDishFromOrderInfo/DeleteDishFromOrderInfo";
import {OrderConfirmation} from './components-routes/OrderConfirmation/OrderConfirmation';
import {Admin} from "./components-routes/Admin/Admin";
import {EditMenu} from "./components-routes/EditMenu/EditMenu";
import {SelectedCategoryContext} from "./contexts/selectedCategory.context";
import {UserRole} from 'types';
import {AddDishToMenu} from "./components-routes/AddDishToMenu/AddDishToMenu";
import {EditOrDeleteDishFromMenu} from "./components-routes/EditOrDeleteDishFromMenu/EditOrDeleteDishFromMenu";
import {DeleteDishInfo} from "./components-routes/DeleteDishInfo/DeleteDishInfo";

import './App.css';

export const App = () => {
    const [userRole, setUserRole] = useState<UserRole | ''>('');
    const [category, setCategory] = useState<string>('');

    return (
        <UserRoleContext.Provider value={{userRole, setUserRole}}>
            <SelectedDishContext.Provider value={{name: '', price: 0, dishId: ''}}>
                <SelectedCategoryContext.Provider value={{category, setCategory}}>
                    <Routes>
                        <Route path="/" element={<HomePageWrapper/>}/>
                        <Route path="/login" element={<LoginForm/>}/>
                        <Route path="/register" element={<RegisterForm/>}/>
                        <Route path="/signOut" element={<SignOutInfo/>}/>
                        <Route path="/menu" element={<AllMenu/>}/>
                        <Route path="/addToOrderInfo" element={<AddToOrderInfo/>}/>
                        <Route path="/order" element={<Order/>}/>
                        <Route path="/deleteDishFromBasket" element={<DeleteDishFromOrderInfo/>}/>
                        <Route path="/orderedInfo" element={<OrderConfirmation/>}/>
                        <Route path="/admin" element={<Admin/>}/>
                        <Route path="/editMenu" element={<EditMenu/>}/>
                        <Route path="/addDishToMenu" element={<AddDishToMenu/>}/>
                        <Route path="/editOrDeleteDish" element={<EditOrDeleteDishFromMenu/>}/>
                        <Route path="/deleteDishFromMenu" element={<DeleteDishInfo/>}/>
                    </Routes>
                </SelectedCategoryContext.Provider>
            </SelectedDishContext.Provider>
        </UserRoleContext.Provider>
    );
};
