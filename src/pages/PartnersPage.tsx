// src/pages/PartnersPage.tsx
import React from 'react';
import { useTranslation, Trans } from 'react-i18next'; // Import hook

const PartnersPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{t('pageTitlePartners')}</h1>
      <p>Information about partners will go here.</p>
    </div>
  );
};

export default PartnersPage;