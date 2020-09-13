import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Ref} from './hooks/ref'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Ref />
      </header>
    </div>
  );
}

export default App;
