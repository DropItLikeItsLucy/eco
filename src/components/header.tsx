import React from 'react';

// Import the CSS Module
import styles from './Header.module.css';

// Import the sub-components (paths are correct)
import Logo from './header/logo';
import Navigation from './header/navigation';
import HeaderControls from './header/headerControls';

const Header: React.FC = () => {
  return (
    // Apply the main container class
    <header className={styles.headerContainer}>
      {/* Apply the left section class */}
      <div className={styles.leftSection}>
        <Logo />
        <Navigation />
      </div>
      <HeaderControls />
    </header>
  );
};

export default Header;