'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TOPBAR */}
      <div style={{ textAlign: 'center', padding: '15px 0', background: 'var(--bg-body)', borderBottom: '1px solid var(--border-color)' }}>
        <Link href="/" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>
          ← Back to Home
        </Link>
      </div>
      <div className="topbar">🔒 <b>AUTHORIZED ACCESS ONLY</b> — This presentation is private</div>

      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <img src="/assets/logo.png" alt="SyncForces" className="nav-logo" />
          <div className="nav-live"><span className="live-dot"></span> LIVE</div>
        </div>
      </nav>
    </>
  );
}
