import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/test1">Test1</Link>
            <Link to="/test2">Test3</Link>
            <Link to="/test3">Test3</Link>
        </nav>
    )
};

export default NavBar;
