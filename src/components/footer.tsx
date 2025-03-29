import React from 'react';
import styles from './Footer.module.css'; // We'll create this CSS module next
import { Link } from 'react-router-dom'; // 1. Import Link
import { FaFacebookF, FaInstagram } from 'react-icons/fa'; // Example icons
import { useTranslation } from 'react-i18next';

// Option 1: Placeholder text for social icons
// const SocialLinks: React.FC = () => {
//   return (
//     <div className={styles.socialIcons}>
//       <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
//       <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
//     </div>
//   );
// };

// Option 2: Using react-icons (Recommended) - requires installation
// We will uncomment and use this after installing the library


const SocialLinks: React.FC = () => {
  return (
    <div className={styles.socialIcons}>
       {/* Replace # with your actual social media URLs */}
      <a href="https://www.facebook.com/ecogeneration.ge" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.iconLink}>
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/ecogeneration.ge" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.iconLink}>
        <FaInstagram />
      </a>
    </div>
  );
};


const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.copyright}>
          {/* 3. Use t function with interpolation */}
          <span>{t('footerCopyright', { year: currentYear })}</span>
          <span className={styles.separator}> | </span>
          <Link to="/terms" className={styles.footerLink}>
            {t('footerTermsLink')} {/* 3. Use t function */}
          </Link>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;