// src/pages/PartnersPage.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PartnersPage.module.css'; // We will create this

// Define Partner Data (Replace with your actual partners and logo filenames)
const partnersData = [
  { id: 1, name: 'Agrohub', logoUrl: '/images/partners/agrohub.png' }, // Path relative to public folder
  { id: 2, name: 'Nikora', logoUrl: '/images/partners/nikora.png' },
  { id: 3, name: 'Fresco', logoUrl: '/images/partners/fresco.png' },
  { id: 4, name: 'Goodwill', logoUrl: '/images/partners/goodwill.png' },
  { id: 5, name: 'Europroduct', logoUrl: '/images/partners/europroduct.png' },
  { id: 6, name: 'Spar', logoUrl: '/images/partners/spar.png' },
  { id: 7, name: 'Smart', logoUrl: '/images/partners/smart.png' },
  { id: 8, name: 'Schirnhofer', logoUrl: '/images/partners/schirnhofer.png' },
  // { id: 9, name: 'Ori Nabiji', logoUrl: '/images/partners/orinabiji.png' },
  { id: 10, name: 'Georgita', logoUrl: '/images/partners/georgita.png' },
  // { id: 11, name: 'Holmart', logoUrl: '/images/partners/holmart.png' },
  // { id: 12, name: 'Way Mart', logoUrl: '/images/partners/waymart.png' },
  { id: 13, name: 'My Startup', logoUrl: '/images/partners/mystartup.png' },
  // { id: 14, name: 'Glovo', logoUrl: '/images/partners/glovo.png' },
  // { id: 15, name: 'We Help', logoUrl: '/images/partners/wehelp.png' },
  // { id: 16, name: 'Moitane', logoUrl: '/images/partners/moitane.png' },
  { id: 17, name: 'USAID', logoUrl: '/images/partners/usaid.png' },
  { id: 18, name: 'CENN', logoUrl: '/images/partners/cenn.png' },
  // Add more partners as needed
];

const PartnersPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.partnersPageContainer}>
      {/* <h1 className={styles.pageTitle}>{t('pageTitlePartners')}</h1> */}

      {/* Grid container for logos */}
      <div className={styles.logoGrid}>
        {partnersData.map((partner) => (
          // Each logo wrapped in a div (or <a> if you want them clickable)
          <div key={partner.id} className={styles.logoItem}>
            <img
              src={partner.logoUrl}
              alt={partner.name} // Alt text for accessibility
              className={styles.logoImage}
              loading="lazy" // Improve performance by lazy loading images
            />
          </div>
          /* Example if you want logos to link somewhere:
          <a key={partner.id} href={partner.websiteUrl} target="_blank" rel="noopener noreferrer" className={styles.logoItem}>
             <img src={partner.logoUrl} alt={partner.name} className={styles.logoImage} loading="lazy"/>
          </a>
          */
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;