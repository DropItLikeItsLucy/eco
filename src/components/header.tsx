import React from 'react';

// Import the sub-components
import Logo from './header/logo';
import Navigation from './header/navigation';
import HeaderControls from './header/headerControls';

const Header: React.FC = () => {
  return (
    <header style={{
      display: 'flex',            // Use flexbox for layout
      justifyContent: 'space-between', // Pushes Logo/Nav left, Controls right
      alignItems: 'center',       // Vertically center items
      padding: '1rem 2rem',       // Add some padding (vertical, horizontal)
      borderBottom: '1px solid #eee' // Add a subtle bottom border like the original
    }}>
      {/* Combine Logo and Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
         <Logo />
         <Navigation />
      </div>
      <HeaderControls />
    </header>
  );
};

export default Header;