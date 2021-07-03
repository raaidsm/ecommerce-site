import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Profile name="Raaid" age="22" description="Comp Sci Student"/>
        <Profile name="Natalie" age="20" description="Mermaid in a human body"/>
      </header>
    </div>
  );
}

export default App;
