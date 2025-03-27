import React from 'react';

// We'll make these links dynamic later
const navItems = [
  { label: 'მთავარი', path: '/' },       // Home
  { label: 'მაღაზია', path: '/shop' },    // Shop
  { label: 'პარტნიორები', path: '/partners' }, // Partners (Assuming, based on original image text)
  { label: 'ჩვენ შესახებ', path: '/about' }, // About Us
  { label: 'კონტაქტი', path: '/contact' }, // Contact
];

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0, gap: '1.5rem' }}> {/* Basic flex layout */}
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.path} style={{ textDecoration: 'none', color: '#333' }}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;