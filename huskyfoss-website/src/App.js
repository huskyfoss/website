import React from 'react';
import './App.css';
import navbar from "./navbar"
import HomeDescription from "./home-description.js";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <navbar></navbar>
                <HomeDescription></HomeDescription>    
            </div>
        );
    }

}
export default App;