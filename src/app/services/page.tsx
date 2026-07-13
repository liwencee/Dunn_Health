import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Dunn Behavioral Health – Kingsland, GA",
  description: "Explore the full range of behavioral health services offered by Maggie Dunn, LPC, NCC, CPCS — individual therapy, family therapy, teen/TF-CBT support, anxiety treatment, trauma recovery, assessment & treatment planning, and clinical supervision.",
};

const services = [
  {
    id: "individual",
    icon: "🧘",
    title: "Individual Therapy",
    desc: "One-on-one sessions tailored to your personal goals. I use evidence-based approaches — Cognitive Behavioral Therapy (CBT), Solution-Focused Brief Therapy, and Person-Centered Therapy — to help you overcome challenges, build resilience, and thrive.",
    rightHeading: "Therapeutic Approaches",
    approaches: ["Cognitive Behavioral Therapy (CBT)", "Solution-Focused Brief Therapy", "Person-Centered Therapy"],
  },
  {
    id: "family",
    icon: "👨‍👩‍👧",
    title: "Family Therapy",
    desc: "Family dynamics can be complex. I work with the whole family system — parents, children, and extended family — to improve communication, resolve conflict, and build a healthier, more connected home environment.",
    rightHeading: "Therapeutic Approaches",
    approaches: ["Cognitive Behavioral Therapy (CBT)", "Solution-Focused Brief Therapy", "Person-Centered Therapy"],
  },
  {
    id: "teen",
    icon: "🌱",
    title: "Teen & Adolescent Support",
    desc: "Teens face unique pressures — social media, academic stress, identity exploration, peer relationships. For ages 5–18, I provide Trauma-Focused CBT (TF-CBT) alongside other evidence-based approaches to help young people navigate these critical years.",
    rightHeading: "Therapeutic Approaches",
    approaches: ["Trauma-Focused CBT (TF-CBT, ages 5–18)", "Cognitive Behavioral Therapy (CBT)", "Solution-Focused Brief Therapy", "Person-Centered Therapy"],
  },
  {
    id: "anxiety",
    icon: "💙",
    title: "Anxiety & Depression Treatment",
    desc: "Anxiety and depression are among the most common — and most treatable — mental health conditions. I combine evidence-based interventions with genuine compassion to help you reclaim your energy, motivation, and joy.",
    rightHeading: "Therapeutic Approaches",
    approaches: ["Cognitive Behavioral Therapy (CBT)", "Solution-Focused Brief Therapy", "Person-Centered Therapy"],
  },
  {
    id: "trauma",
    icon: "🕊️",
    title: "Trauma & PTSD Recovery",
    desc: "Trauma can profoundly affect every area of life. I provide a safe, paced environment to process difficult experiences — including Trauma-Focused CBT for ages 5–18, and CBT, Solution-Focused, and Person-Centered approaches for adults.",
    rightHeading: "Therapeutic Approaches",
    approaches: ["Trauma-Focused CBT (TF-CBT, ages 5–18)", "Cognitive Behavioral Therapy (CBT)", "Solution-Focused Brief Therapy", "Person-Centered Therapy"],
  },
  {
    id: "assessment",
    icon: "📋",
    title: "Assessment & Treatment Planning",
    desc: "Every client starts with a comprehensive clinical assessment to understand your history, needs, and goals. From there, I develop a customized, individualized treatment plan that guides every session toward measurable progress.",
    rightHeading: "What's Included",
    approaches: ["Comprehensive Diagnostic/Clinical Assessment", "Individualized Treatment Plan Development", "Ongoing Progress Review & Plan Updates"],
  },
  {
    id: "supervision",
    icon: "🎓",
    title: "Clinical Supervision",
    desc: "As a Certified Professional Counselor Supervisor (CPCS), I provide clinical supervision for associate counselors working toward full LPC licensure in Georgia — offered individually or in small groups, in-person or virtually.",
    rightHeading: "What's Included",
    approaches: ["Individual & Group Supervision", "Case Consultation", "GA LPC Licensure Requirement Support", "Flexible In-Person or Virtual Sessions"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "10rem", paddingBottom: "5rem", background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)", textAlign: "center" }}>
        <div className="container">
          <span className="section-label" style={{ backgroundColor: "rgba(147,51,234,0.2)", color: "var(--accent-light)" }}>What I Offer</span>
          <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff", marginTop: "0.5rem", marginBottom: "1rem" }}>
            Services
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
            Comprehensive behavioral health services designed to meet you where you are and help you become who you want to be.
          </p>
        </div>
      </section>

      {/* Insurance & Service Area */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Insurance &amp; Service Area</span>
            <h2 className="section-title" style={{ margin: "0 auto 1rem" }}>Who I Can <span>See, and Where</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.75rem" }}>
            {[
              { icon: "🩺", title: "CareSource GA", desc: "Includes Tricare and other plans administered through CareSource. Available virtually anywhere in Georgia." },
              { icon: "🩺", title: "Amerigroup GA", desc: "Available virtually anywhere in Georgia." },
              { icon: "💳", title: "Self-Pay", desc: "Available in Georgia, throughout North Carolina, and in Florida within 50 miles of the Kingsland office." },
            ].map((c, i) => (
              <div key={i} style={{ backgroundColor: "#fff", borderRadius: 12, padding: "2rem", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{c.icon}</div>
                <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.3rem", color: "var(--primary)", marginBottom: "0.5rem" }}>{c.title}</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.93rem" }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "var(--text-muted)", marginTop: "2rem", fontSize: "0.95rem" }}>
            Working on getting in-network with more insurance plans — <Link href="/contact" style={{ color: "var(--accent)", fontWeight: 700 }}>contact me</Link> to check your coverage.
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
                  {service.rightHeading}
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
            Contact me today to discuss which service is right for you and schedule your first appointment.
          </p>
          <Link href="/contact" className="btn-primary">Book Your Appointment</Link>
        </div>
      </section>
    </>
  );
}
