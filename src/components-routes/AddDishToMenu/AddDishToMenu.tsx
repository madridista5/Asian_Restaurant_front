import React, {SyntheticEvent, useContext, useState} from "react";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {UserRoleContext} from "../../contexts/userRole.context";
import {SubHeading} from "../../components";
import {SelectedCategoryContext} from "../../contexts/selectedCategory.context";
import {axiosFunction} from "../../utils/axios-function";
import { AddDishToMenuInfo } from "../AddDishToMenuInfo/AddDishToMenuInfo";

export const AddDishToMenu = () => {
    const {userRole} = useContext(UserRoleContext);
    const {category} = useContext(SelectedCategoryContext);
    const [dish, setDish] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [isSentForm, setIsSentForm] = useState<boolean>(false);

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
        (async () => {
            await axiosFunction.post('/menu/add', {
                category,
                name: dish,
                description,
                price,
            });
        })();
        setIsSentForm(true);
    };

    if(isSentForm) {
        return <AddDishToMenuInfo/>
    }

    return (
        <>
            {userRole === 'ADMIN' && <>
                <NavbarRoutes/>

                <div className="app__bg app__wrapper section__padding">
                    <div className="app__wrapper_info">
                        <SubHeading title="Dodawanie posiłku do menu"/>
                        <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Kategoria: {category}</h1>
                        <div className="app__wrapper-content">
                            <form className="login__wrapper" onSubmit={handleForm}>
                                <input type="text" placeholder="nazwa dania" onChange={e => setDish(e.target.value)} value={dish}/>
                                <input type="text" placeholder="Opis dania" onChange={e => setDescription(e.target.value)} value={description}/>
                                <input type="number" placeholder="Cena" onChange={e => setPrice(Number(e.target.value))} value={price}/>
                                <button type="submit" className="custom__button">Dodaj</button>
                            </form>
                        </div>
                    </div>
                    <div className="app__wrapper_img">
                        <img src={require('../../assets/order.png')} alt="order png"/>
                    </div>
                </div>
            </>}
        </>
    );
};