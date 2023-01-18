import React, { createContext, useReducer } from 'react';
import {AppReducer} from './AppReducer';

const initialState = {
  symbolList : ['btcusdt', 'ethusdt', 'ltcusdt']
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addSymbol(symbol) {
    dispatch({
      type: 'ADD_SYMBOL',
      payload: symbol
    });
  }

  function removeSymbol(symbol) {
    dispatch({
      type: 'REMOVE_SYMBOL',
      payload: symbol
    });
  }

  return (<GlobalContext.Provider value={{
    symbolList: state.symbolList,
    addSymbol, 
    removeSymbol
  }}>
    {children}
  </GlobalContext.Provider>);
}