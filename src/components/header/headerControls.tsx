import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Import hook
import styles from './HeaderControls.module.css';
import { FaCartShopping, FaArrowRightToBracket } from "react-icons/fa6";


// Simple buttons for switching language
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation(); // 2. Get i18n instance

  // 3. Function to change language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    // Basic buttons - can be styled as dropdown later
    <div className={styles.languageSwitcher}>
       <button
         onClick={() => changeLanguage('en')}
         disabled={i18n.language === 'en'} // Disable button for current language
         className={styles.langButton}
         aria-label="Switch to English"
       >
         ENG
       </button>
       <span className={styles.langSeparator}>|</span>
       <button
         onClick={() => changeLanguage('ka')}
         disabled={i18n.language === 'ka'} // Disable button for current language
         className={styles.langButton}
         aria-label="Switch to Georgian" // Added accessibility label
       >
         ქარ
       </button>
    </div>
  );
};

// Placeholder UserAuth and CartIcon (translate login text)
const UserAuth: React.FC = () => {
   const { t } = useTranslation(); // Get t for login text
   return (
    // --- 2. Replace placeholder with FaArrowRightToBracket ---
    <div className={styles.controlItem}>
      <FaArrowRightToBracket aria-hidden="true" /> {/* Add aria-hidden if text is sufficient label */}
      <span>{t('login')}</span> {/* Keep the text */}
    </div>
    // ------------------------------------------
  );
}
const CartIcon: React.FC = () => {
  // We'll add state for the cart count later
  const cartCount = 0;

  return (
    // --- 3. Replace placeholder with FaCartShopping ---
    <div className={styles.controlItem}>
      <FaCartShopping aria-hidden="true" /> {/* Add aria-hidden if count is sufficient label */}
      <span className={styles.cartCount}>({cartCount})</span> {/* Keep the count */}
    </div>
    // ---------------------------------------
  );
};


const HeaderControls: React.FC = () => {
  return (
    <div className={styles.controlsContainer}>
      <LanguageSwitcher />
      <UserAuth />
      <CartIcon />
    </div>
  );
};

export default HeaderControls;