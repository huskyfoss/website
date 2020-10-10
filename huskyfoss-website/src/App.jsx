import React from "react";
import Err from "./components/Err.jsx";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
    return (
        <div className="App">
           <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route component={Err}/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;