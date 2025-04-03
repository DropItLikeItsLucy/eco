import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 1. Import Routes and Route
import './App.css';

// Import the components we just created
import Header from './components/header';
// import Hero from './components/Hero';
import Footer from './components/footer';

import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';
import ShopPage from './pages/ShopPage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Header appears on all pages */}
      <Header />

      <main>
        {/* 2. Define the routes */}
        <Routes>
          {/* Route for the homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Route for the terms page */}
          <Route path="/terms" element={<TermsPage />} />

          {/* --- Add routes for the new pages --- */}
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* --- --- */}

          {/* Optional: Add a 404 Not Found route */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>

      {/* Footer appears on all pages */}
      <Footer />
    </div>
  );
}

export default App;