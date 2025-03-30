// src/pages/AboutPage.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AboutPage.module.css'; // We will create this

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutPageContainer}>
      <h1 className={styles.pageTitle}>{t('pageTitleAbout')}</h1>

      {/* Wrapper for the main text content */}
      <div className={styles.contentSection}>
        <p>{t('aboutParagraph1')}</p>
        <p>{t('aboutParagraph2')}</p>
        <p>{t('aboutParagraph3')}</p>
      </div>

      {/* Optional: Add an image section later if desired */}
      {/* <div className={styles.imageSection}>
        <img src="/path/to/your/image.jpg" alt={t('aboutImageAlt')} />
      </div> */}
    </div>
  );
};

export default AboutPage;