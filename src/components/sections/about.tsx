"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  { icon: "✓", text: "Licensed Professional Counselor (LPC, NCC, CPCS)" },
  { icon: "✓", text: "Culturally Competent & Affirming Care" },
  { icon: "✓", text: "Telehealth & In-Person Sessions Available" },
  { icon: "✓", text: "CareSource GA, Amerigroup GA & Self-Pay Accepted" },
];

export function AboutSection() {
  return (
    <section style={{ padding: "6rem 0", backgroundColor: "#fff" }}>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: "relative" }}
        >
          <div
            style={{
              position: "relative", borderRadius: 16, overflow: "hidden",
              aspectRatio: "4/5", maxWidth: 480,
            }}
          >
            <Image
              src="/maggie-dunn.jpg"
              alt="Maggie Dunn, LPC, NCC, CPCS"
              fill
              sizes="(max-width:768px) 100vw, 480px"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              right: "-1.5rem",
              backgroundColor: "var(--accent)",
              color: "#fff",
              borderRadius: 16,
              padding: "1.5rem",
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(147,51,234,0.35)",
              minWidth: 140,
            }}
          >
            <div style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.6rem", fontWeight: 700, lineHeight: 1.2 }}>LPC · NCC<br />CPCS</div>
            <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.4rem" }}>
              Licensed &amp;<br />Supervision-Qualified
            </div>
          </motion.div>

          {/* Decorative teal block */}
          <div
            style={{
              position: "absolute",
              top: "-1.5rem",
              left: "-1.5rem",
              width: 80, height: 80,
              backgroundColor: "var(--primary)",
              borderRadius: 12,
              zIndex: -1,
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Dedicated to Your <span>Mental Wellness</span>
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "1.02rem" }}>
            Dunn Behavioral Health is an individual private practice based in Kingsland, Georgia, serving Camden County and the surrounding Southeast Georgia community — plus virtual clients across the whole state.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "1.02rem" }}>
            As a solo practitioner, I&apos;m committed to providing personalized, evidence-based care in a safe and affirming environment — helping you overcome challenges, heal from past trauma, and build the life you deserve.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
            {highlights.map((h, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{
                  width: 24, height: 24, borderRadius: "50%",
                  backgroundColor: "var(--primary)",
                  color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.8rem", fontWeight: 700, flexShrink: 0,
                }}>
                  {h.icon}
                </span>
                <span style={{ color: "var(--text-dark)", fontWeight: 600 }}>{h.text}</span>
              </div>
            ))}
          </div>

          <Link href="/about" className="btn-primary">
            Meet Maggie
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
