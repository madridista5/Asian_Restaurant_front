import React, {SyntheticEvent, useContext, useState} from "react";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {SubHeading} from "../../components";
import {UserRoleContext} from "../../contexts/userRole.context";
import {axiosFunction} from "../../utils/axios-function";
import {Link} from "react-router-dom";
import {LoginRegisterInfo} from "../LoginRegisterInfo/LoginRegisterInfo";

import './LoginForm.css';

export const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [isEmailCorrect, setIsEmailCorrect] = useState<boolean>(true);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(true);

    const {userRole, setUserRole} = useContext(UserRoleContext);

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
        if (!email.split('').includes('@')) {
            setIsEmailCorrect(false);
            return;
        } else {
            setIsEmailCorrect(true);
        }

        if (password.length < 8) {
            setIsPasswordCorrect(false);
            return;
        } else {
            setIsPasswordCorrect(true);
        }

        (async () => {
            const res = await axiosFunction.post('/auth/login', {
                email,
                pwd: password,
            });
            setUserRole(res.data.role);
        })();
    }

    return <>
        <NavbarRoutes/>

        {userRole
            ? <LoginRegisterInfo info={`Jesteś zalogowany w Asian Food.`}/>
            : <div className="app__bg app__wrapper section__padding">
                <div className="app__wrapper_info">
                    <SubHeading title="Asian Food"/>
                    <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Logowanie</h1>
                    <div className="app__wrapper-content">
                        <form className="login__wrapper" onSubmit={handleForm}>
                            {!isEmailCorrect &&
                                <p className="p__opensans" style={{color: 'red'}}>Email musi zawierać znak @</p>}
                            <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)}
                                   value={email}/>
                            {!isPasswordCorrect &&
                                <p className="p__opensans" style={{color: 'red'}}>Hasło musi zawierać conajmniej 8
                                    znaków</p>}
                            <input type="password" placeholder="hasło" onChange={e => setPassword(e.target.value)}
                                   value={password}/>
                            <button type="submit" className="custom__button">Zaloguj</button>
                            <p className="p__opensans register-btn"><Link to="/register">Rejestracja</Link></p>
                        </form>
                    </div>
                </div>
                <div className="app__wrapper_img">
                    <img src={require('../../assets/woman.jpg')} alt="woman"/>
                </div>
            </div>
        }

    </>;
}