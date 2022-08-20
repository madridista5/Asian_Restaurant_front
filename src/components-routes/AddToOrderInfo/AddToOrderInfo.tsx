import React, {useContext, useEffect} from "react";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {SelectedDishContext} from "../../contexts/selectedDish.context";
import {SubHeading} from "../../components";
import {Link} from "react-router-dom";
import {UserRoleContext} from "../../contexts/userRole.context";
import {axiosFunction} from "../../utils/axios-function";

export const AddToOrderInfo = () => {
    const selectedDish = useContext(SelectedDishContext);
    const {userRole} = useContext(UserRoleContext);

    useEffect(() => {
        (async () => {
            await axiosFunction.post('/basket/add', {
                name: selectedDish.name,
                price: selectedDish.price,
            });
        })();
    }, []);

    return <>
        <NavbarRoutes/>

        <div className="app__header app__wrapper section__padding">
            <div className="app__wrapper_info">
                <SubHeading title={userRole ? 'Potwierdzenie' : 'Nie udało się'}/>
                <h1 className="app__header-h1">Asian Food</h1>
                <p className="p__opensans" style={{margin: '2rem 0'}}>
                    {userRole
                    ? `Danie "${selectedDish.name}" zostało dodane do Twojego zamówienia.`
                    : 'Dodawanie do zamówienia jest możliwe tylko dla zalogowanych użytkowników. Zaloguj się.'}
                </p>
                <button type="button" className="custom__button"><Link to="/menu">Powrót do menu</Link></button>
            </div>

            <div className="app__wrapper_img">
                <img src={require('../../assets/welcome.jpg')} alt="header img"/>
            </div>
        </div>
    </>
}