import React from "react";
import {SubHeading} from "../../components";

interface Props {
    info: string;
}

export const LoginRegisterInfo = (props: Props) => {
    return <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_info">
            <SubHeading title="Asian Food"/>
            <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>{props.info}</h1>
        </div>
        <div className="app__wrapper_img">
            <img src={require('../../assets/woman.jpg')} alt="woman"/>
        </div>
    </div>;
}