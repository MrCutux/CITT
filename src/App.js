import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../../citt2/src/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Home />

        <p>
          MrCutux <code>CITT </code> 2020
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
