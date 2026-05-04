"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", sessionType: "in-person",
    preferredDate: "", preferredTime: "", insurance: "", notes: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const services = [
    "Individual Therapy", "Couples Counseling", "Family Therapy",
    "Teen & Adolescent Support", "Anxiety & Depression Treatment", "Trauma & PTSD Recovery",
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.8rem 1rem",
    borderRadius: 8, border: "1.5px solid var(--border)",
    fontSize: "0.95rem", color: "var(--text-dark)",
    backgroundColor: "#fff", outline: "none",
    fontFamily: "inherit",
  };

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "10rem", paddingBottom: "5rem", background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)", textAlign: "center" }}>
        <div className="container">
          <span className="section-label" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--accent-light)" }}>Get In Touch</span>
          <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff", marginTop: "0.5rem", marginBottom: "1rem" }}>
            Book Your Appointment
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: 580, margin: "0 auto" }}>
            Fill out the form below and our team will reach out within 24 hours to confirm your appointment.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ padding: "6rem 0", backgroundColor: "#fff" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>
          {/* Form */}
          <div style={{ backgroundColor: "var(--bg-light)", borderRadius: 16, padding: "2.5rem", border: "1px solid var(--border)" }}>
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "2rem", color: "var(--primary)", marginBottom: "2rem" }}>
              Request an Appointment
            </h2>

            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.8rem", color: "var(--primary)", marginBottom: "0.75rem" }}>
                  Request Received!
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                  Thank you! Our team will contact you within 24 hours to confirm your appointment details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                {/* Name + Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontWeight: 600, fontSize: "0.87rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>Full Name *</label>
                    <input required style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name"
                      onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontWeight: 600, fontSize: "0.87rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>Email *</label>
                    <input required type="email" style={inputStyle} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com"
                      onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: "0.87rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>Phone *</label>
                  <input required type="tel" style={inputStyle} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(912) 000-0000"
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                </div>

                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: "0.87rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>Service *</label>
                  <select required style={{ ...inputStyle, cursor: "pointer" }} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}>
                    <option value="">Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Session type */}
                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: "0.87rem", color: "var(--text-dark)", marginBottom: "0.6rem" }}>Session Type</label>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    {["in-person", "telehealth"].map((t) => (
                      <label key={t} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontWeight: 500, color: "var(--text-dark)" }}>
                        <input type="radio" name="sessionType" value={t} checked={form.sessionType === t} onChange={() => setForm({ ...form, sessionType: t })} />
                        {t === "in-person" ? "In-Person" : "Telehealth"}
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontWeight: 600, fontSize: "0.87rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>Preferred Date *</label>
                    <input required type="date" style={inputStyle} value={form.preferredDate} onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontWeight: 600, fontSize: "0.87rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>Preferred Time *</label>
                    <select required style={{ ...inputStyle, cursor: "pointer" }} value={form.preferredTime} onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}>
                      <option value="">Select time...</option>
                      {["8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"].map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: "0.87rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>Insurance Provider (if applicable)</label>
                  <input style={inputStyle} value={form.insurance} onChange={(e) => setForm({ ...form, insurance: e.target.value })} placeholder="e.g. BlueCross, Aetna, Medicaid..."
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                </div>

                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: "0.87rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>Additional Notes</label>
                  <textarea rows={3} style={{ ...inputStyle, resize: "vertical" }} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Anything else you'd like us to know..."
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                </div>

                {status === "error" && (
                  <div style={{ color: "#c0392b", backgroundColor: "#fdecea", padding: "0.75rem 1rem", borderRadius: 8, fontSize: "0.9rem" }}>
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}

                <button type="submit" className="btn-primary" disabled={status === "loading"} style={{ textAlign: "center", opacity: status === "loading" ? 0.7 : 1 }}>
                  {status === "loading" ? "Submitting..." : "Request Appointment"}
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "2rem", color: "var(--primary)", marginBottom: "1.5rem" }}>Visit Us</h3>
              {[
                { icon: "📍", label: "Address", value: "140 The Lakes Blvd Suite 218\nKingsland, GA 31548 USA", href: "https://maps.google.com/?q=140+The+Lakes+Blvd+Suite+218+Kingsland+GA" },
                { icon: "📞", label: "Phone", value: "(912) 999-0000", href: "tel:+19129990000" },
                { icon: "✉️", label: "Email", value: "info@dunnbehavioralhealth.us", href: "mailto:info@dunnbehavioralhealth.us" },
                { icon: "🕐", label: "Hours", value: "Mon–Fri: 8am–6pm\nSaturday: 9am–2pm", href: null },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.25rem", borderBottom: "1px solid var(--border)" }}>
                  <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.3rem" }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        style={{ color: "var(--text-dark)", textDecoration: "none", whiteSpace: "pre-line", lineHeight: 1.6 }}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ whiteSpace: "pre-line", color: "var(--text-dark)", lineHeight: 1.6 }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed */}
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)", height: 280 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352!2d-81.682!3d30.797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sThe+Lakes+Blvd%2C+Kingsland%2C+GA+31548!5e0!3m2!1sen!2sus!4v1"
                width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Dunn Behavioral Health Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
