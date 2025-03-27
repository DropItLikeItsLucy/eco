import React from 'react';
import styles from './HeaderControls.module.css'; // Import CSS Module

// Placeholder icons/text - consider making these proper components later
const LanguageSwitcher: React.FC = () => <div className={styles.controlItem}>🇬🇪 ▼</div>;
const UserAuth: React.FC = () => <div className={styles.controlItem}>👤 შესვლა</div>;
const CartIcon: React.FC = () => <div className={styles.controlItem}>🛒 (0)</div>;

const HeaderControls: React.FC = () => {
  return (
    // Apply container style
    <div className={styles.controlsContainer}>
      {/* The individual components now have the controlItem style */}
      <LanguageSwitcher />
      <UserAuth />
      <CartIcon />
    </div>
  );
};

export default HeaderControls;