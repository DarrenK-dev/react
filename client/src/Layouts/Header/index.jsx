// react functional component
// Header component
// Header component is the top navigation bar
// Use css module to style the component
// Use react router to navigate to different pages

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Logo</Link>
      </div>
      <div className={styles.nav}>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;