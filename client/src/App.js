import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FibCalc from './FibCalc';
import Docs from './Dokumentacja';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Realizacja zadania nr1 w ramach laboratorium PFSwCO </h1>
         
         <h5>Wojciech Szelug </h5>

          <Link to="/">STRONA GLOWNA</Link>
          <Link to="/fibcalc">FIBONACCI</Link>
          <Link to="/docs">DOKUMENTACJA</Link>
        <div>
          <Route path="/fibcalc" component={FibCalc} />
          <Route path="/docs" component={Docs} />
        </div>
        </header>

      </div>
    </Router>
  );
}

export default App;

