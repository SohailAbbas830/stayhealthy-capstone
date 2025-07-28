// src/components/Header.jsx
import React, { useState } from 'react';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true); // Simulate login state

  const handleLogout = () => {
    setLoggedIn(false);
    alert("Logged out!");
  };

  return (
    <header>
      <h1>StayHealthy</h1>
      {loggedIn && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </header>
  );
};

export default Header;
