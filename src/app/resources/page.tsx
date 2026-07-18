import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mental Health Resources | Dunn Behavioral Health – Kingsland, GA",
  description:
    "Crisis lines and mental-health support resources for Georgia and beyond, shared by Dunn Behavioral Health. In an emergency, call 988 or 911.",
};

const crisis = [
  { name: "988 Suicide & Crisis Lifeline", detail: "Call or text 988 — free, confidential, 24/7.", href: "tel:988" },
  { name: "Crisis Text Line", detail: "Text HOME to 741741 to connect with a trained crisis counselor.", href: "sms:741741" },
  { name: "Veterans Crisis Line", detail: "Dial 988, then press 1 — or text 838255.", href: "tel:988" },
  { name: "Georgia Crisis & Access Line (GCAL)", detail: "1-800-715-4225 — 24/7 help for mental health, drug, or alcohol crises in Georgia.", href: "tel:18007154225" },
  { name: "Emergency", detail: "If you or someone else is in immediate danger, call 911.", href: "tel:911" },
];

const support = [
  { name: "SAMHSA National Helpline", detail: "1-800-662-4357 — free, confidential treatment referral and information, 24/7.", href: "tel:18006624357" },
  { name: "NAMI HelpLine", detail: "1-800-950-6264 — information, resources, and support from the National Alliance on Mental Illness.", href: "tel:18009506264" },
  { name: "National Domestic Violence Hotline", detail: "1-800-799-7233 — confidential support 24/7 (text START to 88788).", href: "tel:18007997233" },
  { name: "SAMHSA Treatment Locator", detail: "findtreatment.gov — search for mental health and substance use treatment near you.", href: "https://findtreatment.gov" },
];

function ResourceCard({ name, detail, href }: { name: string; detail: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{
        display: "block",
        backgroundColor: "#fff",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: "1.5rem 1.75rem",
        textDecoration: "none",
      }}
    >
      <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "1.05rem", marginBottom: "0.35rem" }}>{name}</div>
      <div style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.95rem" }}>{detail}</div>
    </a>
  );
}

export default function ResourcesPage() {
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
            Help & Support
          </span>
          <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff", marginTop: "0.5rem", marginBottom: "1rem" }}>
            Resources
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto" }}>
            Trusted crisis lines and support services — for you or someone you care about.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 0 5rem", backgroundColor: "#fff" }}>
        <div className="container" style={{ maxWidth: 780 }}>
          {/* Emergency banner */}
          <div style={{ backgroundColor: "var(--pink)", color: "#fff", borderRadius: 14, padding: "1.5rem 1.75rem", marginBottom: "3rem" }}>
            <div style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.35rem" }}>In a crisis? Help is available right now.</div>
            <p style={{ lineHeight: 1.7, fontSize: "0.97rem", opacity: 0.95 }}>
              If you are thinking about harming yourself or are in immediate danger, call or text <a href="tel:988" style={{ color: "#fff", fontWeight: 700, textDecoration: "underline" }}>988</a> (Suicide &amp; Crisis Lifeline) or call <a href="tel:911" style={{ color: "#fff", fontWeight: 700, textDecoration: "underline" }}>911</a>. You are not alone.
            </p>
          </div>

          {/* Crisis */}
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.8rem", color: "var(--primary)", marginBottom: "1.25rem" }}>Crisis & Emergency Lines</h2>
          <div style={{ display: "grid", gap: "1rem", marginBottom: "3rem" }}>
            {crisis.map((r) => <ResourceCard key={r.name} {...r} />)}
          </div>

          {/* Support */}
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.8rem", color: "var(--primary)", marginBottom: "1.25rem" }}>Support & Information</h2>
          <div style={{ display: "grid", gap: "1rem", marginBottom: "2.5rem" }}>
            {support.map((r) => <ResourceCard key={r.name} {...r} />)}
          </div>

          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.7, fontStyle: "italic", borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
            These resources are provided for informational purposes and are operated by independent organizations. They are not a substitute for professional care or emergency services, and listing them here is not an endorsement. If you are an existing client experiencing a crisis between sessions, please use the crisis lines above or call 911.
          </p>
        </div>
      </section>
    </>
  );
}
