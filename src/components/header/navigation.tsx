import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import { useTranslation } from 'react-i18next';
import styles from './Navigation.module.css'; // Import CSS Module

const navLinks = [
  { key: 'navHome', path: '/' },
  { key: 'navShop', path: '/shop' },
  { key: 'navPartners', path: '/partners' },
  { key: 'navAbout', path: '/about' },
  { key: 'navContact', path: '/contact' },
];

const Navigation: React.FC = () => {
  const { t } = useTranslation(); // 2. Get the t function

  return (
    <nav>
      <ul className={styles.navList}>
        {navLinks.map((link) => ( // Use generic 'link' name
          <li key={link.key} className={styles.navItem}>
            <Link to={link.path}>
              {t(link.key)} {/* 3. Use t function with key */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;