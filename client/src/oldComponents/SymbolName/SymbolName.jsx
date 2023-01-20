import React, {useContext} from 'react'
import styles from './SymbolName.module.css'
import {GlobalContext} from '../../GlobalState'



export default function SymbolName({symbol, searchResult, removeButton, removeFunction}) {

  return (
    searchResult ? 
    
    <SearchResult symbol={symbol} /> :
   
    <div className={[styles.container, styles.boxShaddow].join(' ')}>
      {symbol}
    </div>
  )
}

const SearchResult = ({symbol, removeFunction}) => {
  const { addSymbol, removeSymbol } = useContext(GlobalContext);

  const handleClick = (symbol) => {
    // addSymbol(symbol);
    removeSymbol(symbol);
  }

  return (
      <div className={[styles.container, styles.boxShaddow, styles.searchResult].join(' ')}>
      {symbol}
        <button 
          className={styles.addBtn}
          onClick={() => handleClick(symbol)}
          >Remove</button>
    </div>
  )
}