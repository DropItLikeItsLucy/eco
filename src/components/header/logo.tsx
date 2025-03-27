import React from 'react';
// We might pass the actual logo source as a prop later
// import logoSrc from '../../assets/logo.png'; // Assuming you'll add a logo file

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      {/* If you have an SVG or image file, use an <img> tag */}
      {/* <img src={logoSrc} alt="Eco Generation Logo" style={{ height: '40px' }} /> */}
      {/* For now, just text */}
      <a href="/" style={{ textDecoration: 'none', color: '#2c7a4d', fontWeight: 'bold', fontSize: '1.5rem' }}>
        Eco Generation {/* Placeholder text or logo image */}
      </a>
    </div>
  );
};

export default Logo;