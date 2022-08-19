import React, {SyntheticEvent, useState} from "react";
import {NavbarRoutes} from "../NavbarRoutes/NavbarRoutes";
import {SubHeading} from "../../components";
import {axiosFunction} from "../../utils/axios-function";
import {RegisterUserResponse} from "types";

export const RegisterForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [isEmailCorrect, setIsEmailCorrect] = useState<boolean>(true);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(true);

    const [isRegistered, setIsRegistered] = useState<boolean>(false);


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
            const res: RegisterUserResponse = await axiosFunction.post('/user/register', {
                email,
                pwd: password,
            });
            if (res) {
                setIsRegistered(true);
            }
        })();
    }

    return (
        <>
            <NavbarRoutes/>

            {isRegistered
                ? <div className="app__bg app__wrapper section__padding">
                    <div className="app__wrapper_info">
                        <SubHeading title="Asian Food"/>
                        <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Rejestracja</h1>
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
                                <button type="submit" className="custom__button">Zarejestruj</button>
                            </form>
                        </div>
                    </div>
                    <div className="app__wrapper_img">
                        <img src={require('../../assets/woman.jpg')} alt="woman"/>
                    </div>
                </div>
                : <h2>Konto dla użytkownika o adresie email: {email} zostało założone. Zaloguj się, aby korzystać z
                    aplikacji.</h2>
            }
        </>
    );
}