"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        backgroundColor: scrolled ? "var(--primary-dark)" : "transparent",
        boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.18)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          backgroundColor: "var(--accent)",
          padding: "0.4rem 0",
          fontSize: "0.82rem",
          color: "#fff",
          textAlign: "center",
          letterSpacing: "0.03em",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <span>📍 140 The Lakes Blvd Suite 218, Kingsland GA 31548</span>
          <span>📞 <a href="tel:+12522452590" style={{ color: "#fff", textDecoration: "none" }}>+1 (252) 245-2590</a></span>
          <span>✉️ <a href="mailto:info@dunnbehavioralhealth.us" style={{ color: "#fff", textDecoration: "none" }}>info@dunnbehavioralhealth.us</a></span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.5rem" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: 48, height: 48,
            backgroundColor: "var(--accent)",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.4rem",
          }}>🧠</div>
          <div>
            <div style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>
              Dunn
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--accent-light)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Behavioral Health
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "rgba(255,255,255,0.9)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                transition: "color 0.2s",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ fontSize: "0.82rem", padding: "0.6rem 1.4rem" }}>
            Book Appointment
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "none", flexDirection: "column", gap: "5px", padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: 26, height: 2.5, backgroundColor: "#fff", borderRadius: 2, transition: "all 0.3s" }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: "var(--primary-dark)",
              overflow: "hidden",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="container" style={{ padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: "1rem", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ textAlign: "center", marginTop: "0.5rem" }}>
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
