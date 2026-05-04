import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Dunn Behavioral Health – Kingsland, GA",
  description: "Explore our full range of behavioral health services including individual therapy, couples counseling, family therapy, teen support, anxiety treatment, and trauma recovery.",
};

const services = [
  {
    id: "individual",
    icon: "🧘",
    title: "Individual Therapy",
    desc: "One-on-one sessions tailored to your personal goals. We use evidence-based approaches including Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), and mindfulness-based techniques to help you overcome challenges, build resilience, and thrive.",
    approaches: ["Cognitive Behavioral Therapy (CBT)", "Acceptance & Commitment Therapy (ACT)", "Mindfulness-Based Therapy", "Solution-Focused Brief Therapy"],
  },
  {
    id: "couples",
    icon: "💑",
    title: "Couples Counseling",
    desc: "Whether you're experiencing conflict, communication breakdowns, trust issues, or major life transitions, couples therapy can help. Our therapists create a safe space for both partners to be heard and understood, building stronger foundations for lasting connection.",
    approaches: ["Gottman Method", "Emotionally Focused Therapy (EFT)", "Communication Skills Training", "Conflict Resolution"],
  },
  {
    id: "family",
    icon: "👨‍👩‍👧",
    title: "Family Therapy",
    desc: "Family dynamics can be complex. Our family therapists work with the whole system — parents, children, and extended family — to improve communication, resolve conflict, and build a healthier, more connected home environment.",
    approaches: ["Structural Family Therapy", "Narrative Therapy", "Attachment-Based Therapy", "Parenting Skills"],
  },
  {
    id: "teen",
    icon: "🌱",
    title: "Teen & Adolescent Support",
    desc: "Teens face unique pressures — social media, academic stress, identity exploration, peer relationships. Our adolescent therapists are specially trained to connect with young people and provide the support they need to navigate these critical years.",
    approaches: ["Adolescent CBT", "Motivational Interviewing", "Play Therapy", "Social Skills Training"],
  },
  {
    id: "anxiety",
    icon: "💙",
    title: "Anxiety & Depression Treatment",
    desc: "Anxiety and depression are among the most common — and most treatable — mental health conditions. Our therapists combine evidence-based interventions with genuine compassion to help you reclaim your energy, motivation, and joy.",
    approaches: ["Exposure Therapy", "Behavioral Activation", "Cognitive Restructuring", "Relaxation Techniques"],
  },
  {
    id: "trauma",
    icon: "🕊️",
    title: "Trauma & PTSD Recovery",
    desc: "Trauma can profoundly affect every area of life. Our trauma-informed therapists provide a safe, paced environment to process difficult experiences and develop lasting healing using proven trauma therapies.",
    approaches: ["EMDR Therapy", "Trauma-Focused CBT", "Somatic Techniques", "Prolonged Exposure Therapy"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "10rem", paddingBottom: "5rem", background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)", textAlign: "center" }}>
        <div className="container">
          <span className="section-label" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--accent-light)" }}>What We Offer</span>
          <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff", marginTop: "0.5rem", marginBottom: "1rem" }}>
            Our Services
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
            Comprehensive behavioral health services designed to meet you where you are and help you become who you want to be.
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "6rem 0", backgroundColor: "#fff" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "3rem",
                alignItems: "start",
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              <div style={{ padding: "2.5rem", backgroundColor: "var(--bg-light)", borderRadius: 16, border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{service.icon}</div>
                <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "2rem", color: "var(--primary)", marginBottom: "1rem" }}>
                  {service.title}
                </h2>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{service.desc}</p>
                <Link href="/contact" className="btn-primary" style={{ fontSize: "0.85rem" }}>Book This Service</Link>
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", color: "var(--primary)", marginBottom: "1.25rem" }}>
                  Therapeutic Approaches
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {service.approaches.map((approach, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.9rem 1.25rem", backgroundColor: "#fff", borderRadius: 8, border: "1px solid var(--border)" }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--accent)", flexShrink: 0 }} />
                      <span style={{ color: "var(--text-dark)", fontWeight: 600 }}>{approach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 0", backgroundColor: "var(--bg-light)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="section-subtitle" style={{ margin: "0 auto 2rem" }}>
            Contact us today to discuss which service is right for you and schedule your first appointment.
          </p>
          <Link href="/contact" className="btn-primary">Book Your Appointment</Link>
        </div>
      </section>
    </>
  );
}
