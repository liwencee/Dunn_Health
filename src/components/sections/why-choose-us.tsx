"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: "📅",
    title: "25+ Years of Experience",
    desc: "More than two and a half decades in behavioral health — as a therapist, clinical director, supervisor, and consultant.",
  },
  {
    icon: "📜",
    title: "Licensed in GA & NC",
    desc: "A Licensed Professional Counselor in both Georgia and North Carolina, and a National Certified Counselor (NCC).",
  },
  {
    icon: "🎓",
    title: "Certified Supervisor (CPCS)",
    desc: "A Certified Professional Counselor Supervisor, training and mentoring the next generation of Georgia counselors.",
  },
  {
    icon: "🕊️",
    title: "Trauma-Informed Care",
    desc: "Extensively trained in Trauma-Focused CBT (TF-CBT), with care that centers safety, trust, and lasting healing.",
  },
  {
    icon: "🏥",
    title: "Clinical Leadership & Compliance",
    desc: "Deep expertise in clinical leadership, program development, quality assurance, and Medicaid compliance.",
  },
  {
    icon: "🤝",
    title: "Personalized Treatment",
    desc: "As a solo private practice, you work with me directly every session — care built around your goals, values, and season of life.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      style={{
        padding: "6rem 0",
        background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: 300, height: 300, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: 200, height: 200, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.07)" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{
            display: "inline-block",
            backgroundColor: "rgba(147,51,234,0.15)", color: "var(--accent-light)",
            fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", padding: "0.35rem 1rem", borderRadius: 50, marginBottom: "1rem",
          }}>
            Why Choose Maggie
          </span>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff", marginBottom: "1rem" }}>
            Experience, Compassion & Clinical Excellence
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            I combine more than 25 years of clinical experience with genuine compassion — care that feels both professional and deeply human.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.02 }}
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12, padding: "2rem",
                backdropFilter: "blur(8px)",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{r.icon}</div>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.35rem", color: "#fff", marginBottom: "0.6rem" }}>
                {r.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, fontSize: "0.93rem" }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
