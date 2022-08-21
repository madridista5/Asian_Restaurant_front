import {createContext} from "react";

export const SelectedCategoryContext = createContext({
    category: '',
    setCategory: (s: string) => {},
});