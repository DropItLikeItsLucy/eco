import React from 'react';

// Placeholder icons/text - we'll replace these later
const LanguageSwitcher: React.FC = () => <div style={{ cursor: 'pointer' }}>🇬🇪 ▼</div>; // Placeholder flag & dropdown arrow
const UserAuth: React.FC = () => <div style={{ cursor: 'pointer' }}>👤 შესვლა</div>; // Placeholder icon & Login text
const CartIcon: React.FC = () => <div style={{ cursor: 'pointer' }}>🛒 (0)</div>; // Placeholder cart & count

const HeaderControls: React.FC = () => {
  return (
    <div className="header-controls" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <LanguageSwitcher />
      <UserAuth />
      <CartIcon />
    </div>
  );
};

export default HeaderControls;