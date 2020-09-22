import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import './Login.css';
import {auth} from "./firebase";

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = event => {
        event.preventDefault(); // This stops the login refresh...

        // do the login logic....
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, redirect to the homepage...
                history.push('/');
            })
            .catch((e) => alert(e.message));
    };

    const register = event => {
        event.preventDefault(); // This stops the login refresh...

        // do the register logic....
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // Created a user and logged in. Redirect to the homepage
                history.push('/');
            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                     alt="Login Page Logo"/>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" name="email"
                           id=""/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"
                           name="password" id=""/>
                    <button onClick={login} type="submit" className="login__signInButton">
                        Sign In
                    </button>

                    <p>By signing-in you are agree to Amazon's Conditions of Use & Sale. Please Notice, our Cookies
                        Notices and our Interest-Based Ads Notice.</p>
                    <button onClick={register} className="login__registerButton">
                        Create your Amazon Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;