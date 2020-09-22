import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";


function App() {
    const [{user}, dispatch] = useStateValue();

    // useEffect <<<<<< POWERFUL
    // Piece of a code which runs based on a given conditions...
    useEffect(() => {
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
