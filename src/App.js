import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from './Payment';
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';


const promise = loadStripe(
    "pk_test_51HV61WAFwfxKmvAM5R36izcHAE9pKe3PVSwgir3pcWshZJ4GvD7UDVKjmWbbL9a6cLTV62bAEX5ZL1yg8gDvjQjF00zMyMXxz4"
);

function App() {
    const [{user}, dispatch] = useStateValue();

    // Piece of a code which runs based on a given conditions...
    useEffect(() => {
        // will run only once when the app component loads....
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // User logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser
                });
            } else {
                // the user logged out
                dispatch({
                    type: "SET_USER",
                    user: null
                });
            }
        });

        return () => {
            // Any clean up operation go in here....
            unsubscribe();
        };
    }, []);


    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                    </Route>
                    <Route path="/payment">
                        <Header/>
                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    {/*This is default route*/}
                    <Route path="/">
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
