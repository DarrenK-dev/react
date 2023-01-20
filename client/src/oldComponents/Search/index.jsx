import React, {useState} from 'react'
import styles from './Search.module.css'

export default function Search() {

  const [search, setSearch] = useState(() => ('btcusdt'))

  return (
    <>
      <input 
        type="text" 
        className={styles.main} 
        placeholder={`search for symbols`} 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </>
  )
}
