// src/pages/ContactPage.tsx
import React from 'react';
import { useTranslation, Trans } from 'react-i18next'; // Import hook

const ContactPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>        
        <h1>{t('pageTitleContact')}</h1>
        <p>Contact information and a contact form will go here.</p>
        {/* We will add a form component here later */}
        </div>
    );
};

export default ContactPage;