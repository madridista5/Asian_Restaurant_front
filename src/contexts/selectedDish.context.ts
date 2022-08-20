import {createContext} from "react";

export const SelectedDishContext = createContext({
    dish: {},
    setDish: ({}) => {},
});