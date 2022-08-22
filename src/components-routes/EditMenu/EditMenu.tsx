import React, {useContext, useEffect, useState} from "react";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {axiosFunction} from "../../utils/axios-function";
import {DishResponse} from "types";
import {MenuItem, SubHeading} from "../../components";
import {Link} from "react-router-dom";
import {SelectedCategoryContext} from "../../contexts/selectedCategory.context";
import {UserRoleContext} from "../../contexts/userRole.context";

export const EditMenu = () => {
    const [dishes, setDishes] = useState<DishResponse[]>([]);
    const {setCategory} = useContext(SelectedCategoryContext);
    const {userRole} = useContext(UserRoleContext);

    useEffect(() => {
        (async () => {
            const {data} = await axiosFunction.get('/menu/allDishes');
            setDishes(data);
        })();
    }, []);

    const handleCategory = (selectedCategory: string) => {
        setCategory(selectedCategory);
    };

    return (
        <>
            {userRole === 'ADMIN' && <>
                <NavbarRoutes/>

                <div className="app__specialMenu flex__center section__padding">
                    <div className="app__specialMenu-title">
                        <SubHeading title="Zarządzaj menu restauracji Asian Food"/>
                        <h1 className="headtext__cormorant">Menu - widok admina</h1>
                    </div>

                    <div className="app__specialMenu-menu">
                        <div className="app__specialMenu-menu_pasta flex__center" style={{padding: '0 2rem 0 2rem'}}>
                            <p className="app__specialMenu-menu_heading">Makarony i ryż z WOK</p>
                            <button type="button" className="custom__button" style={{margin: '1rem 0 1rem 0'}}
                                    onClick={() => handleCategory('Makarony i ryż z WOK')}>
                                <Link to="/addDishToMenu">Dodaj danie do tej kategorii</Link>
                            </button>
                            <div className="app__specialMenu_menu_items">
                                {dishes
                                    .filter(dish => dish.category === 'Makarony i ryż z WOK')
                                    .map((dish, index) => (
                                        <MenuItem key={index} title={dish.name} price={dish.price}
                                                  description={dish.description} dishId={dish.id}
                                                  link="/editOrDeleteDish"
                                                  btnDescription="Edytuj lub usuń danie"/>
                                    ))}
                            </div>
                        </div>

                        <div className="app__specialMenu-menu_seafood flex__center" style={{padding: '0 2rem 0 2rem'}}>
                            <p className="app__specialMenu-menu_heading">Owoce morza</p>
                            <button type="button" className="custom__button" style={{margin: '1rem 0 1rem 0'}}
                                    onClick={() => handleCategory('Owoce morza')}>
                                <Link to="/addDishToMenu">Dodaj danie do tej kategorii</Link>
                            </button>
                            <div className="app__specialMenu_menu_items">
                                {dishes
                                    .filter(dish => dish.category === 'Owoce morza')
                                    .map((dish, index) => (
                                        <MenuItem key={index} title={dish.name} price={dish.price}
                                                  description={dish.description} link="/editOrDeleteDish"
                                                  btnDescription="Edytuj lub usuń danie" dishId={dish.id}/>
                                    ))}
                            </div>
                        </div>
                    </div>

                    <div className="app__specialMenu-menu">
                        <div className="app__specialMenu-menu_pasta flex__center" style={{padding: '0 2rem 0 2rem'}}>
                            <p className="app__specialMenu-menu_heading">Zupy</p>
                            <button type="button" className="custom__button" style={{margin: '1rem 0 1rem 0'}}
                                    onClick={() => handleCategory('Zupy')}>
                                <Link to="/addDishToMenu">Dodaj danie do tej kategorii</Link>
                            </button>
                            <div className="app__specialMenu_menu_items">
                                {dishes
                                    .filter(dish => dish.category === 'Zupy')
                                    .map((dish, index) => (
                                        <MenuItem key={index} title={dish.name} price={dish.price}
                                                  description={dish.description} link="/editOrDeleteDish"
                                                  btnDescription="Edytuj lub usuń danie" dishId={dish.id}/>
                                    ))}
                            </div>
                        </div>

                        <div className="app__specialMenu-menu_seafood flex__center" style={{padding: '0 2rem 0 2rem'}}>
                            <p className="app__specialMenu-menu_heading">Desery</p>
                            <button type="button" className="custom__button" style={{margin: '1rem 0 1rem 0'}}
                                    onClick={() => handleCategory('Desery')}>
                                <Link to="/addDishToMenu">Dodaj danie do tej kategorii</Link>
                            </button>
                            <div className="app__specialMenu_menu_items">
                                {dishes
                                    .filter(dish => dish.category === 'Desery')
                                    .map((dish, index) => (
                                        <MenuItem key={index} title={dish.name} price={dish.price}
                                                  description={dish.description} link="/editOrDeleteDish"
                                                  btnDescription="Edytuj lub usuń danie" dishId={dish.id}/>
                                    ))}
                            </div>
                        </div>
                    </div>

                </div>
            </>}
        </>
    );
};