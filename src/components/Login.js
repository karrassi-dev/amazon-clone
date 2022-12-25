
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/login-logo.png";
import "./login.css";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { auth, Auth } from '../firebase';

import {useNavigate} from "react-router-dom"


const login = () => {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    //-----sign in function ------
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((auth) => {
            if (auth) {
                navigate("/");
            }
        });
        };
        //-----register function ------
    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth , email , password).then((auth)=>
        {
            if (auth) {
                navigate("/");
                }
        }
        
        
        ).catch((error) => {
            alert(error.message);
            });
    };
    //console.log(user);
    return (
        <div className='login'>
            <Link to="/">
                <img className="login-logo" src={Logo} alt="logo-img" />
            </Link>
            <div className='login-container'>
                <h1>Sign In</h1>
                <form>
                    <h5>email</h5>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>

                    <h5>password</h5>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <button className='login-signInBtn' type='submit' onClick={signIn}>Sign In</button>
                    <p>By continue, you agree to amazon terms fake clone condition of use and privacy notice</p>
                    <button className='login-registerBtn' onClick={register}>Create your amazon account now</button>


                </form>
            </div>
        </div>
    )
}

export default login