import React from 'react'
import styles from './SymbolName.module.css'

export default function SymbolName({symbol, searchResult}) {

  return (

    searchResult ? <SearchResult symbol={symbol} /> :
   
    <div className={[styles.container, styles.boxShaddow].join(' ')}>
      {symbol}
    </div>
  )
}

const SearchResult = ({symbol}) => {
  return (
      <div className={[styles.container, styles.boxShaddow, styles.searchResult].join(' ')}>
      {symbol}
        <button className={styles.addBtn}>Add</button>
    </div>
  )
}