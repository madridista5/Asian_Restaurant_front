import React from 'react';
import {Link} from "react-router-dom";

import './MenuItem.css';

interface Props {
    title: string;
    price: number;
    description: string;
}

export const MenuItem = (props: Props) => {
    const {title, price, description} = props;

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

            <button type="button" className="custom__button" style={{marginBottom: '2rem'}}>
                <Link to="/">Dodaj do zamówienia</Link>
            </button>

        </div>
    );
};
