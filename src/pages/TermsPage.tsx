// src/pages/TermsPage.tsx
import React from 'react';
import { useTranslation, Trans } from 'react-i18next'; // Import hook

const TermsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '2rem 4rem', maxWidth: '800px', margin: '2rem auto' }}>
      <h1>{t('pageTitleTerms')}</h1>
      <p>
        Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use...
      </p>
      <h2>1. Acceptance of Terms</h2>
      <p>
        Your access to and use of Eco Generation Website is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
      </p>
      <h2>2. Content</h2>
      <p>
         All content provided on this site is for informational purposes only... (Add your actual terms text here) ...
      </p>
      {/* Add all your necessary terms and conditions sections */}
    </div>
  );
};

export default TermsPage;