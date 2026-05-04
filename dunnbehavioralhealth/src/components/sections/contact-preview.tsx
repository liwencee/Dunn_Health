"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const info = [
  {
    icon: "📍",
    label: "Our Location",
    value: "140 The Lakes Blvd Suite 218\nKingsland, GA 31548",
    link: "https://maps.google.com/?q=140+The+Lakes+Blvd+Suite+218+Kingsland+GA+31548",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "(912) 999-0000",
    link: "tel:+19129990000",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "info@dunnbehavioralhealth.us",
    link: "mailto:info@dunnbehavioralhealth.us",
  },
  {
    icon: "🕐",
    label: "Office Hours",
    value: "Mon–Fri: 8am – 6pm\nSat: 9am – 2pm",
    link: null,
  },
];

export function ContactPreview() {
  return (
    <section style={{ padding: "6rem 0", backgroundColor: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            We&apos;re Here to <span>Help You</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Reach out today to schedule your first appointment or ask any questions. Our friendly team responds promptly.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "start" }}>
          {/* Contact info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {info.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: "flex", gap: "1.25rem", alignItems: "flex-start",
                  padding: "1.5rem",
                  backgroundColor: "var(--bg-light)",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                }}
              >
                <div style={{
                  width: 50, height: 50, borderRadius: 10,
                  backgroundColor: "var(--primary)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.3rem", flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                    {item.label}
                  </div>
                  {item.link ? (
                    <a href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      style={{ color: "var(--text-dark)", textDecoration: "none", whiteSpace: "pre-line", lineHeight: 1.6, fontWeight: 500 }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: "var(--text-dark)", whiteSpace: "pre-line", lineHeight: 1.6 }}>{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: "var(--bg-light)",
              borderRadius: 16, padding: "2.5rem",
              border: "1px solid var(--border)",
            }}
          >
            <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.8rem", color: "var(--primary)", marginBottom: "1.5rem" }}>
              Send Us a Message
            </h3>
            <form style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {[
                { label: "Full Name", type: "text", placeholder: "Your full name" },
                { label: "Email Address", type: "email", placeholder: "your@email.com" },
                { label: "Phone Number", type: "tel", placeholder: "(912) 000-0000" },
              ].map((field) => (
                <div key={field.label}>
                  <label style={{ display: "block", fontWeight: 600, fontSize: "0.88rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: "100%", padding: "0.75rem 1rem",
                      borderRadius: 8, border: "1.5px solid var(--border)",
                      fontSize: "0.95rem", color: "var(--text-dark)",
                      backgroundColor: "#fff", outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontWeight: 600, fontSize: "0.88rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  style={{
                    width: "100%", padding: "0.75rem 1rem",
                    borderRadius: 8, border: "1.5px solid var(--border)",
                    fontSize: "0.95rem", color: "var(--text-dark)",
                    backgroundColor: "#fff", outline: "none", resize: "vertical",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <Link href="/contact" className="btn-primary" style={{ textAlign: "center", textDecoration: "none" }}>
                Send Message
              </Link>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
