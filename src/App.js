import React from 'react';
import logo from './logo.svg';
import Game from './containers/Game'
import About from './containers/About'
import NavBar from './components/NavBar'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Leaderboard from './containers/Leaderboard';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Route exact path="/" component={Game} />
        <Route exact path="/about" component={About} />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </Router>
    </div>
  );
}

export default App;
