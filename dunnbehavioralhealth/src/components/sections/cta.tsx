"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section
      style={{
        padding: "6rem 0",
        background: "linear-gradient(135deg, var(--accent-dark) 0%, var(--accent) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .cta-btn-white { background:#fff; color:var(--accent-dark); padding:0.9rem 2.5rem; border-radius:4px; font-weight:800; font-size:0.95rem; letter-spacing:0.06em; text-transform:uppercase; text-decoration:none; transition:all 0.3s; display:inline-block; box-shadow:0 8px 30px rgba(0,0,0,0.15); }
        .cta-btn-white:hover { transform:translateY(-3px); box-shadow:0 16px 40px rgba(0,0,0,0.2); }
        .cta-btn-outline-white { background:transparent; color:#fff; padding:0.9rem 2.5rem; border-radius:4px; font-weight:700; font-size:0.95rem; letter-spacing:0.06em; text-transform:uppercase; text-decoration:none; border:2px solid rgba(255,255,255,0.7); transition:all 0.3s; display:inline-block; }
        .cta-btn-outline-white:hover { background:rgba(255,255,255,0.15); }
      `}</style>

      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)" }} />

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,255,255,0.15)", color: "#fff", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 1rem", borderRadius: 50, marginBottom: "1.5rem" }}>
            Take the First Step
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#fff", fontWeight: 700, marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Ready to Begin Your Healing Journey?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Scheduling your first appointment is simple. Our caring team is ready to listen, support, and walk alongside you every step of the way.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="cta-btn-white">Book Appointment</Link>
            <a href="tel:+19129990000" className="cta-btn-outline-white">📞 Call Now</a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", marginTop: "1.5rem" }}>
            New clients seen within 48–72 hours · Insurance accepted · Telehealth available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
