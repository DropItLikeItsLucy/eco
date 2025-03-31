// src/pages/ShopPage.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ProductCard, { Product } from '../components/ProductCard'; // Import component and type
import styles from './ShopPage.module.css'; // We'll create this

// Sample Product Data (Replace/expand with your actual data and keys)
const sampleProducts: Product[] = [
  { id: 'spoon100', nameKey: 'productSpoon100', imageUrl: '/images/products/spoon-100.jpg', price: 12.00, basePriceUnit: 'GEL 0.12 / 1pc' },
  { id: 'knife100', nameKey: 'productKnife100', imageUrl: '/images/products/knife-100.jpg', price: 16.00, basePriceUnit: 'GEL 0.16 / 1pc' },
  { id: 'fork100', nameKey: 'productFork100', imageUrl: '/images/products/fork-100.jpg', price: 16.00, basePriceUnit: 'GEL 0.16 / 1pc' },
  // Add placeholder for 4th item in first row if needed based on image
  { id: 'placeholder1', nameKey: 'productPlaceholder', imageUrl: '/images/products/placeholder.png', price: 0.00 },

  { id: 'knife5', nameKey: 'productKnifePack5', imageUrl: '/images/products/knife-pack.png', price: 2.30 },
  { id: 'spoon5', nameKey: 'productSpoonPack5', imageUrl: '/images/products/spoon-pack.jpg', price: 2.30 },
  { id: 'forknife5', nameKey: 'productForkKnifePack5', imageUrl: '/images/products/fork-knife-pack.jpg', price: 2.30 },
   // Add placeholder for 4th item in second row if needed
  { id: 'placeholder2', nameKey: 'productPlaceholder', imageUrl: '/images/products/placeholder.png', price: 0.00 },
];

const ShopPage: React.FC = () => {
  const { t } = useTranslation();

  // Placeholder function for adding to cart (can be passed down later)
  // const handleAddToCart = (product: Product, quantity: number) => {
  //   console.log(`SHOP PAGE: Add ${quantity} of ${product.nameKey}`);
  //   // Add logic here to update global cart state
  // };

  return (
    <div className={styles.shopPageContainer}>
      {/* <h1 className={styles.pageTitle}>{t('pageTitleShop')}</h1> Use translation key */}

      <div className={styles.shopGrid}>
        {sampleProducts.map(product => (
            <Link
            key={product.id}
            to={`/products/${product.id}`} // Dynamic link to PDP
            className={styles.productLink} // Add class for potential styling
            >
            <ProductCard
                product={product}
                // No onImageClick needed here anymore
            />
            </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;