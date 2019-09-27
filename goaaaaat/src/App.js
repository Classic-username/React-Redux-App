import React from 'react';
import logo from './logo.svg';
import './App.css';
import Goat from './components/Goat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Goat />
      </header>
    </div>
  );
}

export default App;
