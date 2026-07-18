"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function WellnessPreview() {
  return (
    <section style={{ padding: "6rem 0", backgroundColor: "var(--bg-cream)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: 820,
            margin: "0 auto",
            textAlign: "center",
            backgroundColor: "#fff",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: "3rem 2.5rem",
            boxShadow: "0 10px 40px rgba(37,99,235,0.06)",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🌿</div>
          <span className="section-label" style={{ backgroundColor: "rgba(236,72,153,0.12)", color: "var(--pink-dark)" }}>
            A Separate Offering
          </span>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.75rem)", color: "var(--primary)", margin: "0.5rem 0 1rem" }}>
            Whole-Person Wellness
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            True wellness extends beyond emotional health — caring for our minds, bodies, and spirits often works together to help us become the healthiest version of ourselves. Beyond counseling, I enjoy sharing educational information about non-invasive wellness technologies and healthy lifestyle practices that may support overall well-being.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "2rem", fontStyle: "italic" }}>
            Please note: wellness education is a separate offering from my counseling services. It is shared for educational purposes only and is not counseling, medical advice, or treatment.
          </p>
          <Link href="/wellness" className="btn-primary">Learn More</Link>
        </motion.div>
      </div>
    </section>
  );
}
