import React from 'react';
import './App.css';
import Navbar from "./Navbar.js"
import HomePage from "./HomePage.js";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navbar/>
                <HomePage/>  
            </div>
        );
    }

}
export default App;