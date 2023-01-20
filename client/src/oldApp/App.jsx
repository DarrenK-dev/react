import React from 'react';
import Navbar from '../oldComponents/Navbar';
import Sidebar from '../oldComponents/Sidebar';
import Main from '../oldComponents/Main';
import '../App.css';
import styles from './App.module.css';
import { GlobalProvider } from '../GlobalState';


// create app context here with global state
import {createContext} from 'react';
import SymbolSearch from '../oldComponents/SymbolSearch';
export const AppContext = createContext();


function App() {
  return (
    <GlobalProvider>
      <div className="navBar">NavBar</div>
      <div className="appContainer">
        <div className="sidebar">
          <div className="symbolSearch">
            <div className="searchResults"></div>
            <div className="savedSymbols"></div>
          </div>
        </div>
        <div className="main">Main</div>
      </div>


    {/* <div className={styles.App}>
      <Navbar />
      <div className={styles.container}>
        <Sidebar />
        <Main>
          <h1>Main</h1>
          <SymbolSearch />
        </Main>
      </div>
    </div> */}
    </GlobalProvider>
  
  );
}

export default App;