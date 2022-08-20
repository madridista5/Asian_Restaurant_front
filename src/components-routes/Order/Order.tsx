import React, {useContext} from "react";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {UserRoleContext} from "../../contexts/userRole.context";
import { NotLoggedInfo } from "../NotLoggedInfo/NotLoggedInfo";

export const Order = () => {
    const {userRole} = useContext(UserRoleContext);

    return <>
        <NavbarRoutes/>

        {userRole === ''
        ? <NotLoggedInfo/>
        : <p>Jesteś zalogowany.</p>}
    </>
}