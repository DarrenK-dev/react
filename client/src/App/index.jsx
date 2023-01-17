import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Main from '../Components/Main';
import '../App.css';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.container}>
        <Sidebar />
        <Main>
          <h1>Main</h1>
        </Main>
      </div>
    </div>
  
  );
}

export default App;