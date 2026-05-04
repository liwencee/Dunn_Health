import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Dunn Behavioral Health – Kingsland, GA",
  description: "Learn about the team and mission behind Dunn Behavioral Health, providing compassionate mental health care in Kingsland, Georgia.",
};

const team = [
  {
    name: "Dr. Dunn",
    title: "Founder & Licensed Clinical Psychologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    bio: "With over a decade of clinical experience, Dr. Dunn founded this practice with a simple mission: make high-quality behavioral health care accessible, compassionate, and transformative for everyone.",
  },
  {
    name: "Sarah Williams, LCSW",
    title: "Licensed Clinical Social Worker",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Sarah specializes in trauma-informed care and family systems therapy. She brings warmth and evidence-based techniques to every session.",
  },
  {
    name: "Marcus Johnson, LPC",
    title: "Licensed Professional Counselor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Marcus focuses on anxiety, depression, and life transitions. His background in CBT and mindfulness equips clients with powerful, lasting tools.",
  },
];

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
          <span className="section-label" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--accent-light)" }}>Our Story</span>
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
            <span className="section-label">Our Mission</span>
            <h2 className="section-title">Healing the Whole Person</h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              At Dunn Behavioral Health, we believe that mental and emotional well-being is not a luxury — it&apos;s a necessity. Our practice was founded on the belief that every person deserves access to compassionate, high-quality behavioral health care.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Located at 140 The Lakes Blvd Suite 218, Kingsland GA 31548, we serve individuals, couples, and families throughout Camden County and the broader coastal Georgia community.
            </p>
            <Link href="/contact" className="btn-primary">Book a Session</Link>
          </div>
          <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
            <Image src="https://images.unsplash.com/photo-1556695725-3cc4a29d4ef7?w=900&q=85" alt="Our office" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Our Team</span>
            <h2 className="section-title">Meet Your <span>Therapists</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {team.map((member, i) => (
              <div key={i} style={{ backgroundColor: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 30px rgba(30,81,101,0.08)", border: "1px solid var(--border)" }}>
                <div style={{ position: "relative", height: 260 }}>
                  <Image src={member.image} alt={member.name} fill sizes="300px" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.5rem", color: "var(--primary)", marginBottom: "0.25rem" }}>{member.name}</h3>
                  <div style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.83rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.9rem" }}>{member.title}</div>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.93rem" }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
