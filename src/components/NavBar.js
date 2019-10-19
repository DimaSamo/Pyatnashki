import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => (
  <nav className="topnav">
    
      <Link className="navlink" to="/">
        Play
      </Link>

      <Link className="nav" to="/leaderboard">
        Leaderboard
      </Link>

      <Link className="nav" to="/about">
        About
      </Link>

  </nav>
);

export default NavBar;