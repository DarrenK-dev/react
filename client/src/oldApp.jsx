import React from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
        <Main />
      </div>
    </div>
  
  );
}

export default App;