import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Dunn Behavioral Health – Kingsland, GA",
  description:
    "Answers about counseling with Maggie Dunn, LPC — ages served, therapy approaches, telehealth, service areas, insurance (CareSource GA, Amerigroup GA, self-pay), hours, and getting started.",
};

const faqs: { q: string; a: string }[] = [
  {
    q: "Who do you work with?",
    a: "I provide counseling for children, adolescents, adults, and older adults. My work spans trauma, anxiety, depression, grief, stress, life transitions, relationship concerns, and personal growth.",
  },
  {
    q: "What types of therapy do you offer?",
    a: "I use evidence-based approaches including Cognitive Behavioral Therapy (CBT), Trauma-Focused CBT (TF-CBT, for ages 5–18), Solution-Focused Brief Therapy, and Person-Centered Therapy — matched to your needs and goals.",
  },
  {
    q: "Do you offer telehealth / virtual sessions?",
    a: "Yes. I offer secure virtual sessions across all of Georgia, plus self-pay telehealth in North Carolina and in Florida communities bordering the office (within about 50 miles). In-person sessions are available at the Kingsland office.",
  },
  {
    q: "What areas do you serve?",
    a: "In person, I serve Kingsland, Camden County, and the surrounding Southeast Georgia community. Virtually, I can see clients throughout Georgia (CareSource GA and Amerigroup GA), as well as self-pay clients in North Carolina and border Florida.",
  },
  {
    q: "What insurance do you accept?",
    a: "I currently accept CareSource GA (which includes Tricare and others), Amerigroup GA, and self-pay. Additional plans are being added as I become in-network — please reach out to ask about your specific plan.",
  },
  {
    q: "What are your office hours?",
    a: "Tuesday–Thursday, 10am–4pm. Mondays and Fridays are by appointment only. The office is closed Saturday and Sunday. Virtual sessions are available.",
  },
  {
    q: "Do you offer faith-based or Christian counseling?",
    a: "Upon request. For clients who desire faith-based counseling, I thoughtfully integrate biblical principles with evidence-based therapeutic approaches, while always respecting each person's beliefs, values, and treatment goals.",
  },
  {
    q: "Do you provide clinical supervision?",
    a: "Yes. As a Certified Professional Counselor Supervisor (CPCS), I provide clinical supervision for associate counselors pursuing LPC licensure in Georgia — individually or in small groups, in person or virtually. See the Clinical Supervision page for details.",
  },
  {
    q: "What is the Whole-Person Wellness offering?",
    a: "Whole-Person Wellness is a separate, educational offering — information about complementary, non-invasive wellness technologies and healthy lifestyle practices. It is not counseling, medical advice, or treatment. See the Whole-Person Wellness page for full details and disclaimers.",
  },
  {
    q: "How do I get started?",
    a: "Request an appointment through the contact form or by phone at (912) 848-5335. New clients complete a brief intake form so I can understand your needs before your first session.",
  },
];

export default function FaqPage() {
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
            Questions & Answers
          </span>
          <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff", marginTop: "0.5rem", marginBottom: "1rem" }}>
            Frequently Asked Questions
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto" }}>
            A few things clients often ask before getting started.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section style={{ padding: "5rem 0", backgroundColor: "#fff" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <style>{`
            .faq-item { border: 1px solid var(--border); border-radius: 12px; margin-bottom: 1rem; overflow: hidden; background: #fff; }
            .faq-item summary { list-style: none; cursor: pointer; padding: 1.25rem 1.5rem; font-weight: 700; color: var(--primary); font-size: 1.02rem; display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
            .faq-item summary::-webkit-details-marker { display: none; }
            .faq-item summary::after { content: "+"; color: var(--accent); font-size: 1.4rem; font-weight: 700; transition: transform 0.2s; }
            .faq-item[open] summary::after { content: "–"; }
            .faq-item .faq-a { padding: 0 1.5rem 1.35rem; color: var(--text-muted); line-height: 1.8; font-size: 0.97rem; }
          `}</style>

          {faqs.map((f, i) => (
            <details key={i} className="faq-item">
              <summary>{f.q}</summary>
              <div className="faq-a">{f.a}</div>
            </details>
          ))}

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.25rem" }}>Still have a question?</p>
            <Link href="/contact" className="btn-primary">Contact Maggie</Link>
          </div>
        </div>
      </section>
    </>
  );
}
