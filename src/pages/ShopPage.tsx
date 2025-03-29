// src/pages/ShopPage.tsx
import React from 'react';
import { useTranslation, Trans } from 'react-i18next'; // Import hook

const ShopPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>{t('pageTitleShop')}</h1>
        <p>Shop content (product listings, categories, etc.) will go here.</p>
        {/* This will be a more complex page later */}
        </div>
    );
};

export default ShopPage;