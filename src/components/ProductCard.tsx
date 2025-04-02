// src/components/ProductCard.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ProductCard.module.css'; // We'll create this
import { Link } from 'react-router-dom';

// Define the structure of a product object (adjust as needed)
export interface Product {
  id: string | number;
  nameKey: string; // Translation key for the name
  imageUrls: string[]; // Path relative to /public
  price: number;
  basePriceUnit?: string; // Optional: e.g., "GEL 0.12 / 1pc"
}

interface ProductCardProps {
  product: Product;
  // Add a function prop to handle adding to cart later
  // onAddToCart: (product: Product, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState<number>(1); // State for quantity

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    } else if (event.target.value === '') {
      // Allow clearing the input, maybe default to 1 later?
      // For now, just setting state to NaN temporarily until blur or valid input
    }
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1)); // Ensure quantity doesn't go below 1
  };

  const handleAddToCartClick = () => {
    // Placeholder: Log the action. Later, call prop like onAddToCart(product, quantity);
    console.log(`Adding ${quantity} of ${t(product.nameKey)} (ID: ${product.id}) to cart.`);
    alert(`${t('alertAddedToCart', { count: quantity, name: t(product.nameKey) })}`); // Use translation
    // Optionally reset quantity after adding
    // setQuantity(1);
  };

  return (
    <div className={styles.productCard}>
      <Link to={`/product/${product.id}`} className={styles.productLink}>
      <div className={styles.imageContainer}>
        <img
          src={product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls[0] : '/images/placeholder.png'}
          alt={t(product.nameKey)}
          className={styles.productImage}
          loading="lazy"
        />
      </div>    
        <h3 className={styles.productName}>{t(product.nameKey)}</h3>
      </Link>
      <p className={styles.productPrice}>GEL {product.price.toFixed(2)}</p>
      {product.basePriceUnit && (
        <p className={styles.productBasePrice}>{product.basePriceUnit}</p>
      )}

      <div className={styles.quantitySelector}>
        <button onClick={handleDecrement} className={styles.quantityButton} aria-label={t('ariaDecrementQuantity')}>-</button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className={styles.quantityInput}
          aria-label={t('ariaQuantityInput')}
        />
        <button onClick={handleIncrement} className={styles.quantityButton} aria-label={t('ariaIncrementQuantity')}>+</button>
      </div>

      <button onClick={handleAddToCartClick} className={styles.addToCartButton}>
        {t('buttonAddToCart')}
      </button>
    </div>
  );
};

export default ProductCard;