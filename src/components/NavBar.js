import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => (
    <>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Pyatnashki</Navbar.Brand>
        <Nav className="mr-auto">
        <Link className="nav-link" to="/">
            Play
        </Link>
        <Link className="nav-link" to="/leaderboard">
            Leaderboard
        </Link>

        <Link className="nav-link" to="/instructions">
            Instructions
        </Link>

        <Link className="nav-link" to="/about">
            About
        </Link>
        </Nav>

    </Navbar>
    </>
);

export default NavBar;