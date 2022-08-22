import React, {SyntheticEvent, useContext, useEffect, useState} from "react";
import {UserRoleContext} from "../../contexts/userRole.context";
import {SubHeading} from "../../components";
import {Link} from "react-router-dom";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {axiosFunction} from "../../utils/axios-function";
import {SelectedDishContext} from "../../contexts/selectedDish.context";
import {EditDishInfo} from "../EditDishInfo/EditDishInfo";

export const EditOrDeleteDishFromMenu = () => {
    const selectedDish = useContext(SelectedDishContext);
    const {userRole} = useContext(UserRoleContext);
    const [dish, setDish] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [isSentForm, setIsSentForm] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const {data} = await axiosFunction.get(`/menu/oneDish/${selectedDish.dishId}`);
            setDish(data[0].name);
            setDescription(data[0].description);
            setPrice(data[0].price);
        })();
    }, []);

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
        if (Number(price) > 999 || dish.length > 255 || description.length > 255) {
            return;
        }
        (async () => {
            await axiosFunction.post('/menu/editOneDish', {
                id: selectedDish.dishId,
                name: dish,
                description,
                price,
            });
        })();
        setIsSentForm(true);
    };

    if (isSentForm) {
        return <EditDishInfo/>;
    }

    return (
        <>
            {userRole === 'ADMIN' && <>
                <NavbarRoutes/>

                <div className="app__bg app__wrapper section__padding">
                    <div className="app__wrapper_info">
                        <SubHeading title="Edycja / usuwanie posiłku z menu"/>
                        <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Wybrany posiłek:</h1>
                        <div className="app__wrapper-content">
                            <form className="login__wrapper" onSubmit={handleForm}>

                                {dish.length > 255 &&
                                    <p className="p__opensans" style={{color: 'red'}}>Nazwa dania nie może być dłuższa
                                        niż 255 znaków</p>}
                                <input type="text" placeholder="nazwa dania" onChange={e => setDish(e.target.value)}
                                       value={dish}/>

                                {description.length > 255 &&
                                    <p className="p__opensans" style={{color: 'red'}}>Opis dania nie może być dłuższy
                                        niż 255 znaków</p>}
                                <input type="text" placeholder="Opis dania"
                                       onChange={e => setDescription(e.target.value)} value={description}/>

                                {Number(price) > 999 &&
                                    <p className="p__opensans" style={{color: 'red'}}>Cena dania nie może być większa
                                        niż 999 zł</p>}
                                <input type="number" placeholder="Cena" onChange={e => setPrice(Number(e.target.value))}
                                       value={price}/>

                                <button type="submit" className="custom__button">Edytuj</button>
                            </form>
                            <button type="submit" className="custom__button" style={{marginTop: '1rem', width: '100%'}}>
                                <Link to="/deleteDishFromMenu">Usuń</Link></button>
                        </div>
                    </div>
                    <div className="app__wrapper_img">
                        <img src={require('../../assets/order.png')} alt="order img"/>
                    </div>
                </div>
            </>}
        </>
    )
};