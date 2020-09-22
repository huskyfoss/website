import React from 'react';
import './App.css';
import Navbar from "./navbar.js"
import HomePage from "./home-page.js";

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