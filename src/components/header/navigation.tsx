import React from 'react';
import styles from './Navigation.module.css'; // Import CSS Module

const navItems = [
  { label: 'მთავარი', path: '/' },
  { label: 'მაღაზია', path: '/shop' },
  { label: 'პარტნიორები', path: '/partners' },
  { label: 'ჩვენ შესახებ', path: '/about' },
  { label: 'კონტაქტი', path: '/contact' },
];

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={styles.navList}> {/* Apply style */}
        {navItems.map((item) => (
          <li key={item.label} className={styles.navItem}> {/* Apply style */}
            <a href={item.path}> {/* Link styling is handled by CSS targeting 'a' */}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;