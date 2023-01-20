import {useEffect} from 'react'
import styles from "./App.module.css"
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Footer />
    </div>
  )
}

export default App