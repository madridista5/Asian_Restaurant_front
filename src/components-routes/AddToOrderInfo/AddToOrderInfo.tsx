import React, {useContext} from "react";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {SelectedDishContext} from "../../contexts/selectedDish.context";

export const AddToOrderInfo = () => {
    const selectedDish = useContext(SelectedDishContext);

    return <>
        <NavbarRoutes/>
        <h1>Wybrane danie: {selectedDish.name}, cena: {selectedDish.price}</h1>
    </>
}