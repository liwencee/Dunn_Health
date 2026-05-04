"use client";

import Link from "next/link";

const services = [
  { label: "Individual Therapy", href: "/services#individual" },
  { label: "Couples Counseling", href: "/services#couples" },
  { label: "Family Therapy", href: "/services#family" },
  { label: "Teen Support", href: "/services#teen" },
  { label: "Anxiety & Depression", href: "/services#anxiety" },
  { label: "Trauma & PTSD", href: "/services#trauma" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Book Appointment", href: "/contact" },
];

const socials = [
  { label: "Facebook", slug: "f", href: "#" },
  { label: "Instagram", slug: "ig", href: "#" },
  { label: "LinkedIn", slug: "in", href: "#" },
  { label: "Twitter", slug: "tw", href: "#" },
];

export function Footer() {
  return (
    <>
      <style>{`
        .footer-link { color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.92rem; transition: color 0.2s; }
        .footer-link:hover { color: var(--accent-light); }
        .footer-social { width:36px; height:36px; border-radius:50%; background:rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; font-size:0.88rem; color:rgba(255,255,255,0.7); text-decoration:none; transition:all 0.3s; }
        .footer-social:hover { background:var(--accent); color:#fff; }
        .footer-legal-link { color:rgba(255,255,255,0.5); text-decoration:none; transition:color 0.2s; }
        .footer-legal-link:hover { color:rgba(255,255,255,0.85); }
      `}</style>

      <footer style={{ backgroundColor: "var(--bg-dark)", color: "rgba(255,255,255,0.75)" }}>
        {/* Main footer */}
        <div className="container" style={{ padding: "5rem 1.5rem 3rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
          }}>
            {/* Brand */}
            <div>
              <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem", textDecoration: "none" }}>
                <div style={{
                  width: 44, height: 44, backgroundColor: "var(--accent)", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0,
                }}>🧠</div>
                <div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>Dunn</div>
                  <div style={{ fontSize: "0.68rem", color: "var(--accent-light)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Behavioral Health</div>
                </div>
              </Link>
              <p style={{ lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                Compassionate, evidence-based behavioral health services for individuals, couples, and families in Kingsland, Georgia.
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} className="footer-social">{s.slug}</a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {quickLinks.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="footer-link">→ {l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                Our Services
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="footer-link">→ {s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                Contact Info
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "Address", value: "140 The Lakes Blvd Suite 218\nKingsland, GA 31548 USA", href: null },
                  { label: "Phone", value: "+1 (252) 245-2590", href: "tel:+12522452590" },
                  { label: "Email", value: "info@dunnbehavioralhealth.us", href: "mailto:info@dunnbehavioralhealth.us" },
                  { label: "Hours", value: "Mon–Fri: 8am – 6pm\nSaturday: 9am – 2pm", href: null },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ color: "var(--accent-light)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.3rem" }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.9rem", whiteSpace: "pre-line", lineHeight: 1.7 }}>{item.value}</a>
                    ) : (
                      <p style={{ fontSize: "0.9rem", lineHeight: 1.7, whiteSpace: "pre-line" }}>{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "1.5rem" }}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", fontSize: "0.83rem" }}>
            <span>© {new Date().getFullYear()} Dunn Behavioral Health. All rights reserved.</span>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
              <Link href="/terms" className="footer-legal-link">Terms of Service</Link>
            </div>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>dunnbehavioralhealth.us</span>
          </div>
        </div>
      </footer>
    </>
  );
}
