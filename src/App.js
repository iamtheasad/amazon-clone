import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/checkout">
                        <h1>Checkout</h1>
                    </Route>
                    <Router path="/login">
                        <h1>Login Page</h1>
                    </Router>
                    {/*This is default route*/}
                    <Route path="/">
                        <h1>Home Page !!!</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

{/* React Router*/
}
{/*localhost.com*/
}
{/*localhost.com/login*/
}
{/*localhost.com/checkout*/
}

export default App;
