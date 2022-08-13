import React from "react";

import './AwardCard.css';

interface Props {
    title: string;
    subtitle: string;
}

export const AwardCard = (props: Props) => {
    const {title, subtitle} = props;

    return (
        <div className="app__laurels_awards-card">
            <div className="app__laurels_awards-card-content">
                <p className="p__cormorant" style={{color: '#DCCA87'}}>{title}</p>
                <p className="p__cormorant">{subtitle}</p>
            </div>
        </div>
    );
};