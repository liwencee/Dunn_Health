import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Maggie Dunn, LPC, NCC, CPCS | Dunn Behavioral Health – Kingsland, GA",
  description: "Meet Maggie Dunn, LPC, NCC, CPCS — owner of Dunn Behavioral Health, an individual private practice providing compassionate mental health care in Kingsland, Georgia and virtually statewide.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "10rem", paddingBottom: "5rem",
          background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <span className="section-label" style={{ backgroundColor: "rgba(147,51,234,0.2)", color: "var(--accent-light)" }}>My Story</span>
          <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff", marginBottom: "1rem", marginTop: "0.5rem" }}>
            About Dunn Behavioral Health
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: 640, margin: "0 auto" }}>
            Rooted in compassion. Grounded in evidence. Committed to your healing.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: "6rem 0", backgroundColor: "#fff" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div>
            <span className="section-label">My Mission</span>
            <h2 className="section-title">Healing the Whole Person</h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              At Dunn Behavioral Health, I believe that mental and emotional well-being is not a luxury — it&apos;s a necessity. This practice was founded on the belief that every person deserves access to compassionate, high-quality behavioral health care.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Located at 140 The Lakes Blvd Suite 218, Kingsland GA 31548, I serve individuals and families throughout Camden County and the surrounding Southeast Georgia community in person — plus virtual clients across all of Georgia (CareSource GA &amp; Amerigroup GA), North Carolina, and border Florida (self-pay).
            </p>
            <Link href="/contact" className="btn-primary">Book a Session</Link>
          </div>
          <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
            <Image src="https://images.unsplash.com/photo-1556695725-3cc4a29d4ef7?w=900&q=85" alt="Dunn Behavioral Health office" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Meet Maggie */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Meet the Owner</span>
            <h2 className="section-title">Meet <span>Maggie</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "start", maxWidth: 900, margin: "0 auto" }}>
            <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 30px rgba(37,99,235,0.12)", border: "1px solid var(--border)" }}>
              <Image src="/maggie-dunn.jpg" alt="Maggie Dunn, LPC, NCC, CPCS" fill sizes="400px" style={{ objectFit: "cover" }} />
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.8rem", color: "var(--primary)", marginBottom: "0.25rem" }}>Maggie Dunn</h3>
              <div style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                Owner &amp; Therapist · LPC, NCC, CPCS
              </div>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "0.98rem" }}>
                I&apos;m a Licensed Professional Counselor (LPC), National Certified Counselor (NCC), and Certified Professional Counselor Supervisor (CPCS), and the owner of this individual private practice. I work with individuals, teens, and families using Cognitive Behavioral Therapy, Trauma-Focused CBT (ages 5–18), Solution-Focused Brief Therapy, and Person-Centered Therapy.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.98rem" }}>
                As a CPCS, I also provide clinical supervision for associate counselors working toward full LPC licensure in Georgia — individually or in small groups, in-person or virtually.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ fontSize: "0.85rem" }}>Book a Session</Link>
                <Link href="/services#supervision" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem", alignSelf: "center" }}>
                  Learn About Supervision →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
