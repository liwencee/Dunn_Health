import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinical Supervision (CPCS) in Georgia | Dunn Behavioral Health",
  description:
    "LPC clinical supervision in Georgia with Maggie Dunn, CPCS — supporting associate counselors pursuing licensure. Consulting and compliance services offered through a separate business.",
};

// TODO: replace with the registered name of the separate consulting business.
const CONSULTING_BUSINESS = "a separate consulting business";

export default function SupervisionPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "5rem",
          background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <span className="section-label" style={{ backgroundColor: "rgba(147,51,234,0.2)", color: "var(--accent-light)" }}>
            For Counselors
          </span>
          <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff", marginTop: "0.5rem", marginBottom: "1rem" }}>
            Clinical Supervision
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: 640, margin: "0 auto" }}>
            Supporting the next generation of Georgia counselors on the path to licensure.
          </p>
        </div>
      </section>

      {/* LPC Supervision */}
      <section style={{ padding: "5rem 0", backgroundColor: "#fff" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <span className="section-label">LPC Supervision in Georgia</span>
          <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>Supervision Toward Licensure</h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
            As a Certified Professional Counselor Supervisor (CPCS), I provide clinical supervision for associate and provisionally licensed counselors working toward full LPC licensure in Georgia. With more than 25 years in behavioral health — as a therapist, clinical director, and quality-assurance leader — I bring both clinical depth and real-world systems experience to supervision.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "2rem" }}>
            Supervision is a collaborative, growth-focused relationship. Together we strengthen your clinical skills, case conceptualization, documentation, ethics and boundaries, and confidence as a developing counselor.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "1rem" }}>
            {[
              { icon: "👤", title: "Individual & Group", desc: "Available one-on-one or in small groups, based on your needs and learning style." },
              { icon: "💻", title: "In-Person or Virtual", desc: "Meet at the Kingsland office or securely online from anywhere in Georgia." },
              { icon: "🧭", title: "Skill & Ethics Focused", desc: "Case conceptualization, documentation, ethics, boundaries, and clinical growth." },
              { icon: "📈", title: "Career Development", desc: "Guidance rooted in clinical leadership, program development, and QA experience." },
            ].map((c) => (
              <div key={c.title} style={{ backgroundColor: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "0.6rem" }}>{c.icon}</div>
                <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.25rem", color: "var(--primary)", marginBottom: "0.4rem" }}>{c.title}</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.92rem" }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/contact" className="btn-primary">Inquire About Supervision</Link>
          </div>
        </div>
      </section>

      {/* Consulting & Compliance — separate business */}
      <section style={{ padding: "4rem 0 5.5rem", backgroundColor: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ backgroundColor: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: "2.5rem" }}>
            <span className="section-label">Consulting & Compliance</span>
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.8rem", color: "var(--primary)", marginBottom: "1rem" }}>
              Clinical Consulting & Medicaid Compliance
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
              Drawing on years of experience in clinical leadership, program development, quality assurance and improvement, Medicaid compliance, and audit preparation, I also offer consulting services for behavioral health organizations and practices — including documentation improvement, chart and audit readiness, and quality-assurance support.
            </p>
            <p style={{ color: "var(--text-dark)", lineHeight: 1.8, fontSize: "0.95rem", fontWeight: 600, backgroundColor: "var(--bg-light)", borderRadius: 10, padding: "1rem 1.25rem" }}>
              Please note: these consulting and compliance services are offered through {CONSULTING_BUSINESS}, separate from my counseling practice, and are not counseling or clinical supervision. To learn more, please <Link href="/contact" style={{ color: "var(--primary)" }}>reach out</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
