import React, {useContext, useEffect} from "react";
import {LoginRegisterInfo} from "../LoginRegisterInfo/LoginRegisterInfo";
import {UserRoleContext} from "../../contexts/userRole.context";
import {axiosFunction} from "../../utils/axios-function";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";

export const SignOutInfo = () => {
    const {setUserRole} = useContext(UserRoleContext);

    useEffect(() => {
        (async () => {
            await axiosFunction.get('/auth/logout');
            setUserRole('');
        })();
    }, []);

    return (
        <>
            <NavbarRoutes/>
            <LoginRegisterInfo info="Zostałeś wylogowany."/>
        </>
    );
};