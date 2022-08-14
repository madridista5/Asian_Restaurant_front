import React from 'react';
import {AwardCard, SubHeading} from "../../components";
import {awards} from "../../constants/data";

import './Laurels.css';

export const Laurels = () => (
    <div className="app__bg app__wrapper section__padding" id="awards">
        <div className="app__wrapper_info">
            <SubHeading title="Nagrody i wyróżnienia"/>
            <h1 className="headtext__cormorant">Nasze nagrody</h1>
            <div className="app__laurels_awards">
                {awards.map(award => <AwardCard key={award.title} title={award.title} subtitle={award.subtitle}/>)}
            </div>
        </div>
        <div className="app__wrapper_img">
            <img src={require('../../assets/laurels.jpg')} alt="award"/>
        </div>
    </div>
);