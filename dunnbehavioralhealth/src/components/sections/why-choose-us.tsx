"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🎓",
    title: "Evidence-Based Treatment",
    desc: "All our therapists use scientifically validated methods including CBT, DBT, EMDR, and mindfulness-based approaches.",
  },
  {
    icon: "🔒",
    title: "Confidential & Safe",
    desc: "Your privacy is our priority. All sessions are completely confidential and conducted in a judgment-free environment.",
  },
  {
    icon: "💻",
    title: "Telehealth Available",
    desc: "Access therapy from the comfort of your home through secure video sessions — flexible scheduling to fit your life.",
  },
  {
    icon: "🏥",
    title: "Insurance Accepted",
    desc: "We work with most major insurance providers to make quality mental health care accessible and affordable for everyone.",
  },
  {
    icon: "🌍",
    title: "Culturally Affirming",
    desc: "Our diverse team provides culturally competent care that honors your identity, background, and lived experiences.",
  },
  {
    icon: "⚡",
    title: "Quick Appointments",
    desc: "New clients typically seen within 48–72 hours. We understand that when you're ready to heal, waiting isn't an option.",
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
            backgroundColor: "rgba(201,162,39,0.15)", color: "var(--accent-light)",
            fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", padding: "0.35rem 1rem", borderRadius: 50, marginBottom: "1rem",
          }}>
            Why Choose Us
          </span>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff", marginBottom: "1rem" }}>
            The Dunn Difference
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            We combine clinical excellence with genuine compassion — creating an experience that feels both professional and deeply human.
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
