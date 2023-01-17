import React, { useState } from 'react';
import './App.css';


function LeftBar({ children }) {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <div className={`leftbar ${isOpen ? 'open' : ''}`}>
      <button onClick={() => setOpen(!isOpen)}>Toggle</button>
      {children}
    </div>
  );
}

function Main() {
  return (
    <div className="maincontent">
      <h1>Main Content</h1>
    </div>
  );
}

function Combined() {
  return (
    <div className="app">
      <LeftBar>
        <h2>Left Bar</h2>
      </LeftBar>
      <Main />
      
    </div>
  );
}

export default Combined;