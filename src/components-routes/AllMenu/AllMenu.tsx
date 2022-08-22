import React, {useEffect, useState} from "react";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {DishResponse} from "types";
import {axiosFunction} from "../../utils/axios-function";
import {MenuItem, SubHeading} from "../../components";

export const AllMenu = () => {
    const [dishes, setDishes] = useState<DishResponse[]>([]);

    useEffect(() => {
        (async () => {
            const {data} = await axiosFunction.get('/menu/allDishes');
            setDishes(data);
        })();
    }, []);

    return <>
        <NavbarRoutes/>

        <div className="app__specialMenu flex__center section__padding">
            <div className="app__specialMenu-title">
                <SubHeading title="Menu, które zdobędzie Twoje podniebienie"/>
                <h1 className="headtext__cormorant">Menu</h1>
            </div>

            <div className="app__specialMenu-menu">
                <div className="app__specialMenu-menu_pasta flex__center">
                    <p className="app__specialMenu-menu_heading">Makarony i ryż z WOK</p>
                    <div className="app__specialMenu_menu_items">
                        {dishes
                            .filter(dish => dish.category === 'Makarony i ryż z WOK')
                            .map((dish) => (
                                <MenuItem key={dish.id} title={dish.name} price={dish.price}
                                          description={dish.description} dishId={dish.id} link="/addToOrderInfo"
                                          btnDescription="Dodaj do zamówienia"/>
                            ))}
                    </div>
                </div>

                <div className="app__specialMenu-menu_img">
                    <img src={require('../../assets/menu.jpg')} alt="menu img"/>
                </div>

                <div className="app__specialMenu-menu_seafood flex__center">
                    <p className="app__specialMenu-menu_heading">Owoce morza</p>
                    <div className="app__specialMenu_menu_items">
                        {dishes
                            .filter(dish => dish.category === 'Owoce morza')
                            .map((dish) => (
                                <MenuItem key={dish.id} title={dish.name} price={dish.price}
                                          description={dish.description} dishId={dish.id} link="/addToOrderInfo"
                                          btnDescription="Dodaj do zamówienia"/>
                            ))}
                    </div>
                </div>
            </div>

            <div className="app__specialMenu-menu">
                <div className="app__specialMenu-menu_pasta flex__center">
                    <p className="app__specialMenu-menu_heading">Zupy</p>
                    <div className="app__specialMenu_menu_items">
                        {dishes
                            .filter(dish => dish.category === 'Zupy')
                            .map((dish) => (
                                <MenuItem key={dish.id} title={dish.name} price={dish.price}
                                          description={dish.description} dishId={dish.id} link="/addToOrderInfo"
                                          btnDescription="Dodaj do zamówienia"/>
                            ))}
                    </div>
                </div>

                <div className="app__specialMenu-menu_img">
                    <img src={require('../../assets/soup.jpg')} alt="menu img"/>
                </div>

                <div className="app__specialMenu-menu_seafood flex__center">
                    <p className="app__specialMenu-menu_heading">Desery</p>
                    <div className="app__specialMenu_menu_items">
                        {dishes
                            .filter(dish => dish.category === 'Desery')
                            .map((dish) => (
                                <MenuItem key={dish.id} title={dish.name} price={dish.price}
                                          description={dish.description} dishId={dish.id} link="/addToOrderInfo"
                                          btnDescription="Dodaj do zamówienia"/>
                            ))}
                    </div>
                </div>
            </div>

        </div>
    </>;
};