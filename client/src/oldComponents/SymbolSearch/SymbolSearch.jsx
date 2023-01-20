import React, { useState, useEffect } from 'react';
import styles from './SymbolSearch.module.css'
import SymbolName from '../SymbolName';

import { GlobalContext } from '../../GlobalState';
import { useContext } from 'react';


const SymbolSearch = () => {
  const [symbols, setSymbols] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSymbols, setSelectedSymbols] = useState([]);

  // populate selectedSymbols with localStorage
  useEffect(() => {
    const localSymbols = localStorage.getItem('selectedSymbols');
    if (localSymbols) {
      setSelectedSymbols(JSON.parse(localSymbols));
    }
  }, []);

  useEffect(() => {
    fetch('https://api.binance.com/api/v3/ticker/price')
      .then(res => res.json())
      .then(data => setSymbols(data))
      .catch(err => console.log(err))
  }, []);

  const handleSearch = event => {
    // setSearchTerm replace white spaces, - and / with empty string
    setSearchTerm(event.target.value.replace(/\s/g,'').replace(/\//g,'').replace(/-/g,''))
    const results = symbols.filter(symbol => symbol.symbol.toLowerCase().includes(searchTerm.toLowerCase()) && !selectedSymbols.includes(symbol.symbol));
    setSearchResults(results);
  };

  const handleAdd = symbol => {
    setSelectedSymbols([...selectedSymbols, symbol]);
    setSearchTerm('');
    setSearchResults([]);
    localStorage.setItem('selectedSymbols', JSON.stringify([...selectedSymbols, symbol]));
  };

  const handleRemove = symbol => {
    setSelectedSymbols(selectedSymbols.filter(s => s !== symbol));
    localStorage.setItem('selectedSymbols', JSON.stringify(selectedSymbols.filter(s => s !== symbol)));
  };

  return (
    <div>
      <input 
        className={styles.input}
        type="text" 
        placeholder="Search for a symbol" 
        value={searchTerm} 
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map(result => (
          <li key={result.symbol}>
            {result.symbol} 
            <button onClick={() => handleAdd(result.symbol)}>Add</button>
          </li>
        ))}
      </ul>
      <div>
      Selected Symbols:
        {/* <ul>
          {selectedSymbols.map(symbol => (
            <li key={symbol}>
              {symbol}
              <button onClick={() => handleRemove(symbol)}>Remove</button>
            </li>
          ))}
        </ul> */}
        {
          selectedSymbols.map(symbol => (
            <SymbolName
              key={symbol}
              symbol={symbol}
              handleRemove={handleRemove}
              removeButton={true}
              removeFunction={handleRemove}
            />
          ))
        }
      </div>
    </div>
  );
};

export default SymbolSearch;
