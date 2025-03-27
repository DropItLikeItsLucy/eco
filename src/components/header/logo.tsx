import React from 'react';
import styles from './Logo.module.css'; // Import CSS Module
// import logoSrc from '../../assets/logo.png';

const Logo: React.FC = () => {
  return (
    <div> {/* Keep a container div if needed for layout, or remove if logoLink is enough */}
      {/* <img src={logoSrc} alt="Eco Generation Logo" className={styles.logoImage} /> */}
      <a href="/" className={styles.logoLink}> {/* Apply style */}
        Eco Generation
      </a>
    </div>
  );
};

export default Logo;