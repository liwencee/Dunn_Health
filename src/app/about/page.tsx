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
          <div style={{ display: "grid", gridTemplateColumns: "minmax(240px, 320px) 1fr", gap: "3rem", alignItems: "start", maxWidth: 1040, margin: "0 auto" }} className="meet-grid">
            <div style={{ position: "sticky", top: "6rem" }}>
              <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 30px rgba(37,99,235,0.12)", border: "1px solid var(--border)" }}>
                <Image src="/maggie-dunn.jpg" alt="Maggie Dunn, LPC, NCC, CPCS" fill sizes="320px" style={{ objectFit: "cover" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.8rem", color: "var(--primary)", marginTop: "1.25rem", marginBottom: "0.25rem" }}>Maggie Dunn</h3>
              <div style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                Owner &amp; Therapist · LPC, NCC, CPCS
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ fontSize: "0.85rem" }}>Book a Session</Link>
                <Link href="/services#supervision" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem", alignSelf: "center" }}>
                  Supervision →
                </Link>
              </div>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.6rem", lineHeight: 1.4, color: "var(--primary)", fontWeight: 600, borderLeft: "4px solid var(--accent)", paddingLeft: "1.25rem", marginBottom: "2rem" }}>
                Helping people heal isn&apos;t simply my profession — it&apos;s my purpose.
              </p>
              {[
                "My journey into the mental health field began in 1999 while working with survivors of Hurricane Floyd in North Carolina. Witnessing the resilience of individuals and families during one of the most difficult seasons of their lives inspired a lifelong commitment to helping others find hope, healing, and renewed purpose.",
                "Today, with more than 25 years of experience in behavioral health, I have had the privilege of serving clients in clinical, leadership, consulting, and supervisory roles. Throughout my career I have worked as a paraprofessional, therapist, Qualified Professional, program director, clinical director, quality assurance and quality improvement specialist, Medicaid compliance consultant, and clinical supervisor. These diverse experiences have given me a comprehensive understanding of behavioral healthcare while reinforcing one central belief: every person deserves compassionate, individualized care.",
                "I earned my Master’s degree in Mental Health Counseling from Capella University and am licensed as a Licensed Professional Counselor in both Georgia and North Carolina. I am also a National Certified Counselor (NCC) and a Certified Professional Counselor Supervisor (CPCS), providing supervision for associate counselors pursuing licensure in Georgia. I have completed extensive training in Trauma-Focused Cognitive Behavioral Therapy (TF-CBT) and am preparing to complete my certification and become nationally rostered.",
                "My passion is helping children, adolescents, adults, and older adults navigate life’s challenges, including trauma, anxiety, depression, grief, stress, life transitions, relationship concerns, and personal growth. I believe counseling should be a collaborative process where clients feel safe, heard, respected, and empowered to create lasting change.",
                "As a Christian, my faith is the foundation of my life and influences the compassion, integrity, and hope I strive to bring into every interaction. For clients who desire faith-based counseling, I am honored to thoughtfully integrate biblical principles with evidence-based therapeutic approaches while always respecting each person’s beliefs, values, and treatment goals.",
                "Outside the counseling office, I am a proud North Carolina native, entrepreneur, and the mother of an amazing adult son. I believe in lifelong learning and am passionate about helping people grow mentally, emotionally, physically, spiritually, and financially.",
                "Beyond providing therapy, I have spent much of my career strengthening behavioral healthcare systems through clinical leadership, program development, quality assurance and improvement, Medicaid compliance consulting, audit preparation, and supervising the next generation of counselors. These experiences have given me a unique perspective that allows me to serve clients with both compassion and clinical excellence.",
                "No matter what season of life you’re facing, you don’t have to walk through it alone. Healing is possible, hope is real, and taking the first step toward change can make all the difference. It would be my privilege to walk alongside you on your journey toward healing and wholeness.",
              ].map((para, i) => (
                <p key={i} style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "0.98rem" }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
          <style>{`@media (max-width: 720px){ .meet-grid{ grid-template-columns: 1fr !important; } .meet-grid > div:first-child{ position: static !important; } }`}</style>
        </div>
      </section>
    </>
  );
}
