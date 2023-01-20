import React, {useEffect, useState, useContext} from 'react'
import styles from './Sidebar.module.css'
import SymbolName from '../SymbolName'
import { GlobalContext } from '../../GlobalState'
import SymbolSearch from '../SymbolSearch'




export default function Sidebar({children}) {

  const [symbols, setSymbols] = useState([])
  const [symbolsFull, setSymbolsFull] = useState([])
  const {symbolList} = useContext(GlobalContext)
  const [searchText, setSearchText] = useState('')
  const [filteredSymbols, setFilteredSymbols] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://api.binance.com/api/v3/ticker/price');
        const data = await response.json();
        setSymbolsFull(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    // if searchText is in symbolList, then clear the search
    if (symbolList.includes(searchText)) {
      setSearchText('')
    }
  }, [symbolList, searchText])

  useEffect(() => {
    console.log(symbolsFull)
  }, [symbolsFull])

  const fetchSymbols = async () => {
    const response = await fetch('https://api.binance.com/api/v3/ticker/price');
    const data = await response.json();
    // filter for symbols that are in the search
    setSymbols(data);
  }

  useEffect(() => {
    setSymbols(symbolList)
  }, [symbolList])

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    const trimmedSearchText = e.target.value.replace(/\s/g,'').replace(/\//g,'').replace(/-/g,'')
    const filteredSymbols = symbolsFull.filter((symbol) => {
      return symbol.symbol.toLowerCase().includes(trimmedSearchText.toLowerCase())
    })
    setFilteredSymbols(filteredSymbols)
  }

  useEffect(() => {
    console.log(filteredSymbols)
  }, [filteredSymbols])


  return (
    <div className={styles.sidebar}>
      <SymbolSearch />
    </div>
    
    // <div
    // className={styles.sidebar}
    // >

    // <input 
    //     type="text" 
    //     className={styles.searchbar} 
    //     placeholder={`search for symbols`} 
    //     value={searchText}
    //     onChange={(e) => handleSearchText(e)}
    //   />
    
    // {
    //   searchText && filteredSymbols.map((symbol, index) => {
    //     return (
    //       <div className={styles.searchResult}>
    //         <SymbolName searchResult key={index} symbol={symbol.symbol.toUpperCase()}/>
    //       </div>
    //     )
    //   }
    //   )
    // }
    
    // {
    //   symbols && symbols.map((symbol, index) => {
    //     return (
    //       <SymbolName key={index} symbol={symbol.toUpperCase()}/>
    //     )
    //   })
    // }
    
    // </div>
  )
}
