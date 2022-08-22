import React, {useContext, useEffect} from "react";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {SubHeading} from "../../components";
import {Link} from "react-router-dom";
import {SelectedDishContext} from "../../contexts/selectedDish.context";
import {axiosFunction} from "../../utils/axios-function";
import {UserRoleContext} from "../../contexts/userRole.context";

export const DeleteDishInfo = () => {
    const {dishId, name} = useContext(SelectedDishContext);
    const {userRole} = useContext(UserRoleContext);

    useEffect(() => {
        (async () => {
            if (userRole === 'ADMIN') {
                await axiosFunction.delete(`menu/delete/${dishId}`);
            }
        })();
    }, []);

    return (
        <>
            {userRole === 'ADMIN' && <>
                <NavbarRoutes/>

                <div className="app__header app__wrapper section__padding">
                    <div className="app__wrapper_info">
                        <SubHeading title="Potwierdzenie"/>
                        <h1 className="app__header-h1">Asian Food</h1>
                        <p className="p__opensans" style={{margin: '2rem 0'}}>Danie "{name}" zostało usunięte z
                            menu.</p>
                        <button type="button" className="custom__button"><Link to="/editMenu">Powrót do edycji
                            menu</Link></button>
                    </div>

                    <div className="app__wrapper_img">
                        <img src={require('../../assets/order.png')} alt="order img"/>
                    </div>
                </div>
            </>}
        </>
    )
}