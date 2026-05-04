"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Kingsland, GA",
    text: "Dunn Behavioral Health changed my life. After years of struggling with anxiety, I finally found therapists who truly listened and gave me practical tools to reclaim my peace. I can't recommend them enough.",
    rating: 5,
    service: "Individual Therapy",
  },
  {
    name: "James & Tanya R.",
    location: "St. Marys, GA",
    text: "Our marriage was on the brink, but the couples counseling we received here gave us a new foundation. We communicate better, fight less, and actually enjoy each other again. Life-changing.",
    rating: 5,
    service: "Couples Counseling",
  },
  {
    name: "Michelle T.",
    location: "Brunswick, GA",
    text: "I was hesitant to seek help for my PTSD, but the trauma-informed approach here made me feel so safe. My therapist never pushed me faster than I was ready to go. I'm genuinely healing.",
    rating: 5,
    service: "Trauma Recovery",
  },
  {
    name: "David K.",
    location: "Woodbine, GA",
    text: "The telehealth option was perfect for my busy schedule. Same quality of care, right from my home office. My therapist is exceptional — truly invested in my progress.",
    rating: 5,
    service: "Telehealth Therapy",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "var(--accent)", fontSize: "1.1rem" }}>★</span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ padding: "6rem 0", backgroundColor: "var(--bg-cream)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">
            Real People, <span>Real Results</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Hear from members of our community who found their path to healing with Dunn Behavioral Health.
          </p>
        </div>

        {/* Main testimonial */}
        <div style={{ maxWidth: 780, margin: "0 auto 3rem" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              style={{
                backgroundColor: "#fff",
                borderRadius: 20,
                padding: "3rem",
                boxShadow: "0 10px 60px rgba(30,81,101,0.1)",
                position: "relative",
                border: "1px solid var(--border)",
                textAlign: "center",
              }}
            >
              {/* Quote mark */}
              <div style={{
                position: "absolute", top: "1.5rem", left: "2rem",
                fontFamily: "Georgia, serif", fontSize: "6rem",
                color: "rgba(201,162,39,0.15)", lineHeight: 1,
                userSelect: "none",
              }}>
                "
              </div>

              <Stars count={testimonials[active].rating} />
              <p style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                color: "var(--text-dark)",
                lineHeight: 1.6,
                margin: "1.5rem 0",
                fontStyle: "italic",
              }}>
                "{testimonials[active].text}"
              </p>

              <div>
                <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "1rem" }}>
                  {testimonials[active].name}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.87rem", marginTop: "0.2rem" }}>
                  {testimonials[active].location} · {testimonials[active].service}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Selector dots / thumbnails */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                background: "none", border: "none", cursor: "pointer", padding: "0.5rem",
                display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
              }}
            >
              <div style={{
                width: i === active ? 14 : 10,
                height: i === active ? 14 : 10,
                borderRadius: "50%",
                backgroundColor: i === active ? "var(--accent)" : "var(--border)",
                transition: "all 0.3s",
              }} />
              <span style={{ fontSize: "0.78rem", color: i === active ? "var(--primary)" : "var(--text-muted)", fontWeight: i === active ? 700 : 400 }}>
                {t.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
