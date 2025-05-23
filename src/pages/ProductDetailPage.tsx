// src/pages/ProductDetailPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import hooks
import { useTranslation } from 'react-i18next';
import styles from './ProductDetailPage.module.css'; // Create this file
import { Product } from '../components/ProductCard'; // Import Product type

// --- Data Simulation ---
// In a real app, you'd fetch this data based on productId
// For now, import the same sample data used in ShopPage
import { sampleProducts } from './ShopPage'; // Assuming sampleProducts is exported from ShopPage or moved to a shared file

// --- Lightbox ---
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useCartStore } from '../store/cartStore';
// Optional plugins can be added here too
// import "yet-another-react-lightbox/dist/styles.css";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";


const ProductDetailPage: React.FC = () => {
  const { t } = useTranslation();
  const { productId } = useParams<{ productId: string }>(); // Get productId from URL
  const navigate = useNavigate(); // Hook for navigation (e.g., back button)
  const { addToCart } = useCartStore();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  // Find the product data when the component mounts or productId changes
  useEffect(() => {
    const foundProduct = sampleProducts.find(p => String(p.id) === productId); // Ensure comparison works (string vs number)
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Handle product not found - maybe redirect or show message
      console.error("Product not found:", productId);
      setProduct(null); // Explicitly set to null
    }
    // Reset quantity and image index when product changes
    setQuantity(1);
    setCurrentImageIndex(0);
    setMainImageIndex(0);
  }, [productId]); // Re-run effect if productId changes

  // --- Event Handlers ---
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => { /* ... same as ProductCard ... */
     const value = parseInt(event.target.value, 10);
     if (!isNaN(value) && value >= 1) { setQuantity(value); }
  };
  const handleIncrement = () => { setQuantity(prev => prev + 1); };
  const handleDecrement = () => { setQuantity(prev => (prev > 1 ? prev - 1 : 1)); };

  const handleAddToCartClick = () => {
    if (!product) return;
    addToCart(String(product.id), quantity);
    console.log(`Added ${quantity} of ${product.nameKey} to cart`);
    //console.log(`DETAIL PAGE: Adding ${quantity} of ${t(product.nameKey)} (ID: ${product.id}) to cart.`);
    //alert(`${t('alertAddedToCart', { count: quantity, name: t(product.nameKey) })}`);
    // Add to global cart state here later
  };

  const handleMainImageClick = () => {
    // Use the existing safety check 'hasImages' defined below
    if (!hasImages) return;
    setCurrentImageIndex(mainImageIndex); // Set lightbox start index
    setLightboxOpen(true); // Open lightbox
  };
  const handleThumbnailClick = (index: number) => {
    setMainImageIndex(index);
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const foundProduct = sampleProducts.find(p => String(p.id) === productId);
    
    // Simulate API loading delay
    const timer = setTimeout(() => {
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setProduct(null);
      }
      setIsLoading(false);
    }, 300); // Remove this timeout when using real API
  
    return () => clearTimeout(timer);
  }, [productId]);
  
  if (isLoading) {
    return <div className={styles.loading}>Loading product...</div>;
  }
  // --- Render Logic ---
  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>{t('productNotFound')}</h2>
        <button 
          onClick={() => navigate('/shop')} 
          className={styles.backButton}
        >
          {t('buttonBackToShop')}
        </button>
      </div>
    );
  }
  // Prepare slides for lightbox
  // const slides = product.imageUrls.map(url => ({ src: url }));

  // Check if imageUrls exists and has items
  const mainImageUrl = product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls[0] : '/images/products/placeholder-image.jpg'; // Provide a fallback image
  const hasImages = product.imageUrls && product.imageUrls.length > 0;
  const hasMultipleImages = hasImages && product.imageUrls.length > 1;

  // Prepare slides only if images exist
  const slides = hasImages ? product.imageUrls.map(url => ({ src: url })) : [];
  const currentMainImageUrl = hasImages ? product.imageUrls[mainImageIndex] : '/images/products/placeholder-image.jpg';
  return (
    <div className={styles.detailPageContainer}>
      {/* Optional: Back button */}
      {/* <button onClick={() => navigate(-1)} className={styles.backButton}>← {t('buttonBackToShop')}</button> */}

      <div className={styles.contentGrid}>
        {/* Column 1: Image Gallery */}
        <div className={styles.imageGallery}>
        <div className={styles.mainImageContainer} onClick={handleMainImageClick}>
            <img
              src={currentMainImageUrl} // Use the URL based on mainImageIndex state
              alt={t(product.nameKey)}
              className={styles.mainImage}
            />
            {hasImages && <div className={styles.zoomIndicator}>🔍</div>}
          </div>
          {/* Optional: Thumbnails (render if more than 1 image) */}
          {hasMultipleImages && (
             <div className={styles.thumbnailContainer}>
               {product.imageUrls.map((url, index) => (
                 <img
                   key={index}
                   src={url}
                   alt={`${t(product.nameKey)} - view ${index + 1}`}
                   // Add active class based on mainImageIndex state
                   className={`${styles.thumbnailImage} ${index === mainImageIndex ? styles.activeThumbnail : ''}`} // Add .activeThumbnail style in CSS
                   // Change main image on click
                   onClick={() => handleThumbnailClick(index)}
                 />
               ))}
             </div>
           )}
        </div>

        {/* Column 2: Product Details */}
        <div className={styles.detailsSection}>
          <h1 className={styles.productName}>{t(product.nameKey)}</h1>
          <p className={styles.productPrice}>GEL {product.price.toFixed(2)}</p>
          {product.basePriceUnit && (
            <p className={styles.productBasePrice}>{product.basePriceUnit}</p>
          )}

          {/* Add Description Section */}
          <div className={styles.descriptionSection}>
            <h2>{t('productDescriptionTitle')}</h2>
            <p>{t(product.nameKey + 'Desc', "Default description if key missing...")}</p> {/* Example: Use a specific desc key */}
          </div>
          

          <div className={styles.quantitySelector}>
             <button onClick={handleDecrement} className={styles.quantityButton} aria-label={t('ariaDecrementQuantity')}>-</button>
             <input type="number" min="1" value={quantity} onChange={handleQuantityChange} className={styles.quantityInput} aria-label={t('ariaQuantityInput')}/>
             <button onClick={handleIncrement} className={styles.quantityButton} aria-label={t('ariaIncrementQuantity')}>+</button>
          </div>

          <button onClick={handleAddToCartClick} className={styles.addToCartButton}>
            {t('buttonAddToCart')}
          </button>

          {/* Other info like SKU, Categories, etc. can go here */}
        </div>
      </div>

      {/* Render the Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentImageIndex}
        on={{ view: ({ index: newIndex }) => setCurrentImageIndex(newIndex) }}
        // plugins={[Thumbnails, Zoom]} // Add plugins if installed and desired
      />
      
    </div>
  );
};

export default ProductDetailPage;