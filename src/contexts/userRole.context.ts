import {createContext} from "react";
import { UserRole } from "../../../restaurant_back/src/types";

export const UserRoleContext = createContext({
    userRole: '',
    setUserRole: (s: UserRole | '') => {},
});