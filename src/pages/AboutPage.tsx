// src/pages/AboutPage.tsx
import React from 'react';
import { useTranslation, Trans } from 'react-i18next'; // Import hook

const AboutPage: React.FC = () => {
  const { t } = useTranslation(); // Get t function
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{t('pageTitleAbout')}</h1> {/* Use t function */}
      <p>
         {/* Example using Trans for more complex elements if needed later */}
         {/* <Trans i18nKey="someComplexAboutText"> */}
            Information about Eco Generation will go here.
         {/* </Trans> */}
      </p>
    </div>
  );
};

export default AboutPage;