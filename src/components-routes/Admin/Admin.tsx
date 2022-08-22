import React, {useContext} from "react";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {SubHeading} from "../../components";
import {Link} from "react-router-dom";
import {UserRoleContext} from "../../contexts/userRole.context";

export const Admin = () => {
    const {userRole} = useContext(UserRoleContext);

    return (<>
        {userRole === 'ADMIN' && <>
            <NavbarRoutes/>
            <div className="app__header app__wrapper section__padding">
                <div className="app__wrapper_info">
                    <SubHeading title="panel admina"/>
                    <h1 className="app__header-h1">Asian Food</h1>
                    <p className="p__opensans" style={{margin: '2rem 0'}}>Witaj w panelu Admina. Możesz tutaj dodawać,
                        edytować lub usuwać dania z menu restauracji Asian Food.</p>
                    <button type="button" className="custom__button"><Link to="/editMenu">Przejdź do edycji menu</Link>
                    </button>
                </div>

                <div className="app__wrapper_img">
                    <img src={require('../../assets/admin.png')} alt="header img"/>
                </div>
            </div>
        </>}
    </>);
};