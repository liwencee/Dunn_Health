"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: "🧘",
    title: "Individual Counseling",
    desc: "Personalized, one-on-one counseling for children, teens, adults, and older adults — using CBT, TF-CBT, Solution-Focused, and Person-Centered approaches.",
    href: "/services#individual",
  },
  {
    icon: "🕊️",
    title: "Trauma & PTSD (TF-CBT)",
    desc: "Compassionate, trauma-informed care to help you process difficult experiences and rebuild a sense of safety, stability, and hope.",
    href: "/services#trauma",
  },
  {
    icon: "💙",
    title: "Anxiety & Depression",
    desc: "Evidence-based treatment to help you manage anxiety and depression, reclaim your energy, and rediscover joy in everyday life.",
    href: "/services#anxiety",
  },
  {
    icon: "✝️",
    title: "Faith-Based Counseling",
    desc: "Upon request, biblical principles are thoughtfully integrated with evidence-based therapy — always respecting your beliefs, values, and goals.",
    href: "/services#faith",
  },
  {
    icon: "💻",
    title: "Telehealth",
    desc: "Secure virtual sessions across Georgia, plus self-pay telehealth in North Carolina and border Florida — care from wherever you are.",
    href: "/services#telehealth",
  },
  {
    icon: "🎓",
    title: "Clinical Supervision",
    desc: "CPCS supervision for associate counselors pursuing LPC licensure in Georgia — individually or in small groups, in person or virtually.",
    href: "/supervision",
  },
];

export function ServicesSection() {
  return (
    <section style={{ padding: "6rem 0", backgroundColor: "var(--bg-light)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">What We Offer</span>
          <h2 className="section-title" style={{ margin: "0 auto 1rem" }}>
            Comprehensive <span>Behavioral Health</span> Services
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            We provide a full spectrum of mental health and behavioral services designed to meet you where you are and guide you toward where you want to be.
          </p>
        </div>

        <style>{`
          .service-card { background:#fff; border-radius:12px; padding:2.25rem; height:100%; border:1px solid var(--border); transition:all 0.35s ease; cursor:pointer; position:relative; overflow:hidden; }
          .service-card:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(37,99,235,0.14); border-color:var(--accent); }
        `}</style>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={service.href}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div className="service-card">
                  {/* Accent top bar */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0,
                    height: 3, backgroundColor: "var(--accent)",
                    transform: "scaleX(0)", transformOrigin: "left",
                    transition: "transform 0.35s ease",
                  }} className="card-bar" />

                  <div
                    style={{
                      width: 60, height: 60,
                      backgroundColor: "rgba(147,51,234,0.1)",
                      borderRadius: 12,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.8rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "1.45rem",
                      color: "var(--primary)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                    {service.desc}
                  </p>
                  <div style={{ marginTop: "1.25rem", color: "var(--accent)", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.04em" }}>
                    Learn More →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
