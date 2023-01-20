import React from 'react'
import styles from './Footer.module.css'

const Footer = ({children}) => {
  return (
    <div className={styles.footer}>
      <div className="copyWrite">
        <p>Website developed by <a href="https://darrenk.dev">darrenk.dev</a></p>
        <p>All rights reserved | &copy; {(new Date()).getFullYear()} {window.document.title}</p>
      </div>
      {children}
    </div>
  )
}

export default Footer
