import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Whole-Person Wellness | Dunn Behavioral Health – Kingsland, GA",
  description:
    "Educational information about complementary, non-invasive wellness technologies and healthy lifestyle practices — a separate offering from Maggie Dunn's licensed counseling services.",
};

const callout: React.CSSProperties = {
  backgroundColor: "var(--bg-light)",
  border: "1px solid var(--border)",
  borderRadius: 14,
  padding: "1.75rem 2rem",
  marginTop: "1.5rem",
};

export default function WellnessPage() {
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
          <span className="section-label" style={{ backgroundColor: "rgba(236,72,153,0.2)", color: "var(--pink-light)" }}>
            A Separate Offering
          </span>
          <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff", marginTop: "0.5rem", marginBottom: "1rem" }}>
            Whole-Person Wellness
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto" }}>
            Caring for the mind, body, and spirit — together.
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "5rem 0", backgroundColor: "#fff" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <p style={{ color: "var(--text-dark)", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
            I believe true wellness extends beyond emotional health. Caring for our minds, bodies, and spirits often works together to help us become the healthiest version of ourselves.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
            In addition to providing professional counseling services, I enjoy educating individuals about non-invasive wellness technologies and healthy lifestyle practices that may support overall well-being. While these options are not counseling services and are not intended to diagnose, treat, cure, or prevent any disease, many individuals choose to explore complementary wellness approaches as part of their personal health journey.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "2.5rem" }}>
            If you&apos;re interested in learning more about these wellness options, I&apos;d be happy to share educational information and my personal experience so you can decide whether they&apos;re a good fit for your own wellness goals.
          </p>

          {/* Wellness Disclaimer */}
          <div style={callout}>
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", color: "var(--primary)", marginBottom: "0.75rem" }}>
              Wellness Disclaimer
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>
              The wellness information shared on this website is provided for educational purposes only and should not be considered medical advice, medical treatment, or mental health treatment. Any complementary wellness technologies discussed are not intended to diagnose, treat, cure, or prevent any disease. Always consult your physician or other qualified healthcare provider regarding medical concerns or before beginning any new wellness program.
            </p>
          </div>

          {/* Professional Boundaries */}
          <div style={callout}>
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", color: "var(--primary)", marginBottom: "0.75rem" }}>
              Professional Boundaries Statement
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>
              My counseling services and any wellness education I provide are separate offerings. Counseling services are provided within the scope of my professional licensure. Information regarding complementary wellness technologies is shared independently for educational purposes and for individuals who express an interest in learning more.
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/contact" className="btn-primary">Ask About Wellness</Link>
          </div>
        </div>
      </section>
    </>
  );
}
