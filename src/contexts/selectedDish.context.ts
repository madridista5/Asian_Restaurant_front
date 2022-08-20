import {createContext} from "react";

export const SelectedDishContext = createContext({
    dishId: '',
    name: '',
    price: 0,
});