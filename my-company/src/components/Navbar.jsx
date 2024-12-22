// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '10px',
    backgroundColor: '#f4f4f4'
  };

  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
