import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <nav className={`nav__links ${open ? 'open' : 'closed'}`}>
          <Link to="/services">Services</Link>
          <Link to="/film-production">Film Production</Link>
          <Link to="/branding">Branding</Link>
          <Link to="/art-curation">Art Curation</Link>
          <button className="nav__cta">Let’s Talk</button>
        </nav>
        <button className="nav__icon" aria-label="menu" onClick={() => setOpen(!open)}>
          &gt;
        </button>
      </div>
    </header>
  );
}
