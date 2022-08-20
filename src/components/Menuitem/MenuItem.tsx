import React, {useContext} from 'react';
import {Link} from "react-router-dom";

import './MenuItem.css';
import {SelectedDishContext} from "../../contexts/selectedDish.context";

interface Props {
    title: string;
    price: number;
    description?: string;
    link: string;
    btnDescription: string;
}

export const MenuItem = (props: Props) => {
    const {title, price, description, link, btnDescription} = props;
    const selectedDish = useContext(SelectedDishContext);

    const handleBtn = (title: string, price: number) => {
        selectedDish.name = title;
        selectedDish.price = price;
    };

    return (
        <div className="app__menuitem">
            <div className="app__menuitem-head">

                <div className="app__menuitem-name">
                    <p className="p__cormorant" style={{color: '#DCCA87'}}>{title}</p>
                </div>

                <div className="app__menuitem-dash"/>

                <div className="app__menuitem-price">
                    <p className="p__cormorant">{price} zł</p>
                </div>

            </div>

            <div className="app__menuitem-sub">
                <p className="p__opensans" style={{color: '#AAA'}}>{description}</p>
            </div>

            <button type="button" className="custom__button" style={{marginBottom: '2rem'}} onClick={() => handleBtn(title, price)}>
                <Link to={link}>{btnDescription}</Link>
            </button>

        </div>
    );
};
