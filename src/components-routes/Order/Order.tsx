import React, {useContext, useEffect, useState} from "react";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {UserRoleContext} from "../../contexts/userRole.context";
import {NotLoggedInfo} from "../NotLoggedInfo/NotLoggedInfo";
import {DishInBasketResponse} from "types";
import {axiosFunction} from "../../utils/axios-function";
import {MenuItem, SubHeading} from "../../components";
import { Link } from "react-router-dom";

export const Order = () => {
    const {userRole} = useContext(UserRoleContext);
    const [myOrder, setMyOrder] = useState<DishInBasketResponse[]>([]);

    useEffect(() => {
        (async () => {
            if(userRole) {
                const {data} = await axiosFunction.get('/basket/userBasket');
                setMyOrder(data);
            }
        })();
    }, []);

    const handleOrderBtn = () => {
        (async () => {
            await axiosFunction.delete('/basket/deleteAll');
        })();
    };

    return <>
        <NavbarRoutes/>

        {userRole === ''
            ? <NotLoggedInfo/>
            : <div className="app__specialMenu flex__center section__padding">
                <div className="app__specialMenu-title">
                    <SubHeading title="Zamówienie"/>
                </div>

                <div className="app__specialMenu-menu">
                    <div className="app__specialMenu-menu_pasta flex__center">
                        <p className="app__specialMenu-menu_heading">Moje zamówienie</p>
                        <div className="app__specialMenu_menu_items">
                            {myOrder
                                .map(dish => (
                                    <MenuItem key={dish.id} title={dish.name} price={dish.price} link="/deleteDishFromBasket" btnDescription="Usuń" dishId={dish.id}/>
                                ))}
                        </div>
                        <button type="button" className="custom__button" style={{marginBottom: '2rem'}} onClick={handleOrderBtn}><Link to="/orderedInfo">Zamów</Link></button>
                    </div>

                    <div className="app__specialMenu-menu_img">
                        <img src={require('../../assets/order.png')} alt="menu img"/>
                    </div>
                </div>
            </div>}
    </>
}