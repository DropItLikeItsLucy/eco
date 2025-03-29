// src/pages/HomePage.tsx
import React from 'react';
import Hero from '../components/Hero'; // Import the Hero component
import { useTranslation, Trans } from 'react-i18next'; // Import hook

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <> {/* Use a fragment as we only need to return the content */}
      <Hero />
      {/* We can add other homepage sections here later */}
      {/* e.g., <ProductHighlights />, <Testimonials /> */}
      <div style={{ padding: '0rem', textAlign: 'center' }}>
         {/* (Homepage Content Area - More sections can be added below Hero) */}
      </div>
    </>
  );
};

export default HomePage;