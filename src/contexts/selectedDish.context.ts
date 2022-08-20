import {createContext} from "react";

export const SelectedDishContext = createContext({
    name: '',
    price: 0,
});