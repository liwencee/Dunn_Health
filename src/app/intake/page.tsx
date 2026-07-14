"use client";

import { useState } from "react";
import Link from "next/link";

/* ---------- shared styles ---------- */
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.7rem 0.9rem",
  borderRadius: 8,
  border: "1.5px solid var(--border)",
  fontSize: "0.95rem",
  color: "var(--text-dark)",
  backgroundColor: "#fff",
  outline: "none",
  fontFamily: "inherit",
};
const labelStyle: React.CSSProperties = {
  display: "block",
  fontWeight: 600,
  fontSize: "0.87rem",
  color: "var(--text-dark)",
  marginBottom: "0.4rem",
};

const GENDERS = ["Male", "Female", "Non-Binary", "Prefer to self-describe / Other"];
const DIAGNOSES = ["Depression", "Anxiety", "PTSD", "Bipolar", "ADHD", "OCD", "Psychotic Disorder", "Substance Use Disorder", "Other"];
const SYMPTOMS = ["Sadness / Low Mood", "Anxiety / Worry", "Panic Attacks", "Sleep Issues", "Appetite Changes", "Irritability", "Poor Concentration", "Hallucinations", "Racing Thoughts", "Suicidal Thoughts", "Substance Use", "Other"];

type Form = {
  fullName: string; preferredName: string; email: string; phone: string; dob: string; age: string; gender: string; homeAddress: string;
  emergencyName: string; emergencyRelationship: string; emergencyPhone: string;
  chiefComplaint: string; concernsBegan: string; symptomsChanged: string; triggers: string;
  prevCare: string; diagnoses: string[]; hospitalizations: string; suicidalHistory: string; selfHarm: string;
  symptoms: string[];
  medicalConditions: string; pcp: string; lastPhysical: string; allergies: string; medications: string;
  famDepression: string; famAnxiety: string; famBipolar: string; famSchizophrenia: string; famSubstance: string; famSuicide: string;
  alcohol: string; cannabis: string; pastSubstanceTreatment: string;
  treatmentGoals: string; treatmentConcerns: string;
  signature: string; signatureDate: string; consent: boolean;
};

const INITIAL: Form = {
  fullName: "", preferredName: "", email: "", phone: "", dob: "", age: "", gender: "", homeAddress: "",
  emergencyName: "", emergencyRelationship: "", emergencyPhone: "",
  chiefComplaint: "", concernsBegan: "", symptomsChanged: "", triggers: "",
  prevCare: "", diagnoses: [], hospitalizations: "", suicidalHistory: "", selfHarm: "",
  symptoms: [],
  medicalConditions: "", pcp: "", lastPhysical: "", allergies: "", medications: "",
  famDepression: "", famAnxiety: "", famBipolar: "", famSchizophrenia: "", famSubstance: "", famSuicide: "",
  alcohol: "", cannabis: "", pastSubstanceTreatment: "",
  treatmentGoals: "", treatmentConcerns: "",
  signature: "", signatureDate: "", consent: false,
};

export default function IntakePage() {
  const [form, setForm] = useState<Form>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (k: keyof Form, v: string | boolean | string[]) => setForm((f) => ({ ...f, [k]: v }));
  const toggle = (k: "diagnoses" | "symptoms", v: string) =>
    setForm((f) => ({ ...f, [k]: f[k].includes(v) ? f[k].filter((x) => x !== v) : [...f[k], v] }));

  const focus = (e: React.FocusEvent<HTMLElement>) => (e.currentTarget.style.borderColor = "var(--primary)");
  const blur = (e: React.FocusEvent<HTMLElement>) => (e.currentTarget.style.borderColor = "var(--border)");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.consent) return;
    setStatus("loading");

    const y = (v: string) => v || "—";
    const list = (a: string[]) => (a.length ? a.join(", ") : "None reported");

    const sections = [
      { heading: "Patient Information", items: [
        { label: "Full Name", value: y(form.fullName) },
        { label: "Preferred Name", value: y(form.preferredName) },
        { label: "Email", value: y(form.email) },
        { label: "Phone", value: y(form.phone) },
        { label: "Date of Birth", value: y(form.dob) },
        { label: "Age", value: y(form.age) },
        { label: "Gender", value: y(form.gender) },
        { label: "Home Address", value: y(form.homeAddress) },
        { label: "Emergency Contact Name", value: y(form.emergencyName) },
        { label: "Relationship to Patient", value: y(form.emergencyRelationship) },
        { label: "Emergency Contact Phone", value: y(form.emergencyPhone) },
      ]},
      { heading: "Reason for Visit", items: [
        { label: "Chief Complaint", value: y(form.chiefComplaint) },
        { label: "When concerns began", value: y(form.concernsBegan) },
        { label: "Have symptoms changed?", value: y(form.symptomsChanged) },
        { label: "Known triggers / contributing factors", value: y(form.triggers) },
      ]},
      { heading: "Psychiatric History", items: [
        { label: "Previous mental health care?", value: y(form.prevCare) },
        { label: "Past psychiatric diagnoses", value: list(form.diagnoses) },
        { label: "Psychiatric hospitalizations?", value: y(form.hospitalizations) },
        { label: "Suicidal thoughts or attempts?", value: y(form.suicidalHistory) },
        { label: "History of self-harm?", value: y(form.selfHarm) },
      ]},
      { heading: "Current Symptom Checklist", items: [
        { label: "Current symptoms", value: list(form.symptoms) },
      ]},
      { heading: "Medical & Medication History", items: [
        { label: "Medical Conditions", value: y(form.medicalConditions) },
        { label: "Primary Care Provider", value: y(form.pcp) },
        { label: "Date of last physical exam", value: y(form.lastPhysical) },
        { label: "Allergies", value: y(form.allergies) },
        { label: "Current Medications", value: y(form.medications) },
      ]},
      { heading: "Family Mental Health History", items: [
        { label: "Depression", value: y(form.famDepression) },
        { label: "Anxiety", value: y(form.famAnxiety) },
        { label: "Bipolar", value: y(form.famBipolar) },
        { label: "Schizophrenia", value: y(form.famSchizophrenia) },
        { label: "Substance Use", value: y(form.famSubstance) },
        { label: "Suicide / Attempts", value: y(form.famSuicide) },
      ]},
      { heading: "Substance Use", items: [
        { label: "Currently use alcohol?", value: y(form.alcohol) },
        { label: "Currently use cannabis or other substances?", value: y(form.cannabis) },
        { label: "Past treatment for substance use?", value: y(form.pastSubstanceTreatment) },
      ]},
      { heading: "Treatment Goals", items: [
        { label: "Treatment goals", value: y(form.treatmentGoals) },
        { label: "Concerns about treatment", value: y(form.treatmentConcerns) },
      ]},
      { heading: "Signature & Consent", items: [
        { label: "Patient / Guardian Signature", value: y(form.signature) },
        { label: "Date", value: y(form.signatureDate) },
        { label: "Terms & Conditions Acknowledged", value: form.consent ? "Yes" : "No" },
      ]},
    ];

    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.fullName, email: form.email, phone: form.phone, sections }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  /* ---------- reusable field renderers ---------- */
  const Text = (label: string, k: keyof Form, opts: { required?: boolean; type?: string; placeholder?: string } = {}) => (
    <div>
      <label style={labelStyle}>{label}{opts.required && " *"}</label>
      <input
        required={opts.required} type={opts.type || "text"} placeholder={opts.placeholder}
        style={inputStyle} value={form[k] as string}
        onChange={(e) => set(k, e.target.value)} onFocus={focus} onBlur={blur}
      />
    </div>
  );

  const Area = (label: string, k: keyof Form, opts: { required?: boolean; placeholder?: string } = {}) => (
    <div>
      <label style={labelStyle}>{label}{opts.required && " *"}</label>
      <textarea
        required={opts.required} rows={3} placeholder={opts.placeholder}
        style={{ ...inputStyle, resize: "vertical" }} value={form[k] as string}
        onChange={(e) => set(k, e.target.value)} onFocus={focus} onBlur={blur}
      />
    </div>
  );

  const Radio = (label: string, k: keyof Form, options: string[], required = true) => (
    <div>
      <label style={labelStyle}>{label}{required && " *"}</label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {options.map((o) => (
          <label key={o} style={{ display: "flex", alignItems: "center", gap: "0.45rem", cursor: "pointer", fontWeight: 500, color: "var(--text-dark)", fontSize: "0.92rem" }}>
            <input type="radio" name={k} value={o} required={required} checked={form[k] === o} onChange={() => set(k, o)} />
            {o}
          </label>
        ))}
      </div>
    </div>
  );

  const Checks = (label: string, k: "diagnoses" | "symptoms", options: string[]) => (
    <div>
      <label style={labelStyle}>{label}</label>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.5rem" }}>
        {options.map((o) => (
          <label key={o} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontWeight: 500, color: "var(--text-dark)", fontSize: "0.9rem" }}>
            <input type="checkbox" checked={form[k].includes(o)} onChange={() => toggle(k, o)} />
            {o}
          </label>
        ))}
      </div>
    </div>
  );

  const Section = (title: string, children: React.ReactNode) => (
    <div style={{ backgroundColor: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem", marginBottom: "1.75rem" }}>
      <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.6rem", color: "var(--primary)", marginBottom: "1.5rem" }}>{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>{children}</div>
    </div>
  );

  const grid2 = (children: React.ReactNode) => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>{children}</div>
  );

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "10rem", paddingBottom: "4rem", background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)", textAlign: "center" }}>
        <div className="container">
          <span className="section-label" style={{ backgroundColor: "rgba(147,51,234,0.2)", color: "var(--accent-light)" }}>New Clients</span>
          <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.3rem, 6vw, 3.6rem)", color: "#fff", marginTop: "0.5rem", marginBottom: "1rem" }}>
            Client Intake Form
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", maxWidth: 620, margin: "0 auto" }}>
            Please complete this form before your first appointment. Your information is kept confidential and helps us provide the best possible care.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: "4rem 0 6rem", backgroundColor: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          {status === "success" ? (
            <div style={{ backgroundColor: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: "3.5rem 2rem", textAlign: "center" }}>
              <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✅</div>
              <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "2rem", color: "var(--primary)", marginBottom: "0.75rem" }}>Intake Form Received</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 1.5rem" }}>
                Thank you, {form.fullName.split(" ")[0]}. We&apos;ve received your intake form and will reach out shortly to schedule your first appointment. A confirmation has been sent to {form.email}.
              </p>
              <Link href="/" className="btn-primary">Back to Home</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {Section("Patient Information", <>
                {grid2(<>
                  {Text("Full Name", "fullName", { required: true, placeholder: "Your full legal name" })}
                  {Text("Preferred Name", "preferredName", { placeholder: "What you'd like to be called" })}
                </>)}
                {grid2(<>
                  {Text("Email", "email", { required: true, type: "email", placeholder: "your@email.com" })}
                  {Text("Phone", "phone", { required: true, type: "tel", placeholder: "(912) 000-0000" })}
                </>)}
                {grid2(<>
                  {Text("Date of Birth", "dob", { required: true, type: "date" })}
                  {Text("Age", "age", { placeholder: "Age" })}
                </>)}
                <div>
                  <label style={labelStyle}>Gender *</label>
                  <select required style={{ ...inputStyle, cursor: "pointer" }} value={form.gender} onChange={(e) => set("gender", e.target.value)} onFocus={focus} onBlur={blur}>
                    <option value="">Select...</option>
                    {GENDERS.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                {Text("Home Address", "homeAddress", { required: true, placeholder: "Street, City, State, ZIP" })}
                {grid2(<>
                  {Text("Emergency Contact Name", "emergencyName", { required: true })}
                  {Text("Relationship to Patient", "emergencyRelationship", { required: true })}
                </>)}
                {Text("Emergency Contact Phone", "emergencyPhone", { required: true, type: "tel", placeholder: "(912) 000-0000" })}
              </>)}

              {Section("Reason for Visit", <>
                {Area("Chief Complaint — what brings you in?", "chiefComplaint", { placeholder: "Briefly describe your main concern" })}
                {Text("When did your concerns begin?", "concernsBegan", { placeholder: "e.g. 3 months ago, since childhood…" })}
                {Radio("Have your symptoms changed?", "symptomsChanged", ["Worsened", "Improved", "Same"])}
                {Area("Known triggers or contributing factors", "triggers")}
              </>)}

              {Section("Psychiatric History", <>
                {Radio("Have you received previous mental health care?", "prevCare", ["Yes", "No"])}
                {Checks("Past psychiatric diagnoses (check all that apply)", "diagnoses", DIAGNOSES)}
                {Radio("Any psychiatric hospitalizations?", "hospitalizations", ["Yes", "No"])}
                {Radio("Suicidal thoughts or attempts?", "suicidalHistory", ["Never", "Past", "Current"])}
                {Radio("History of self-harm?", "selfHarm", ["Yes", "No"])}
              </>)}

              {Section("Current Symptoms", <>
                {Checks("Which are you currently experiencing? (check all that apply)", "symptoms", SYMPTOMS)}
              </>)}

              {Section("Medical & Medication History", <>
                {Area("Medical Conditions", "medicalConditions", { required: true, placeholder: "List any current or past medical conditions, or 'None'" })}
                {grid2(<>
                  {Text("Primary Care Provider", "pcp", { required: true })}
                  {Text("Date of last physical exam", "lastPhysical", { required: true, type: "date" })}
                </>)}
                {Area("Allergies", "allergies", { required: true, placeholder: "Medication/food/other allergies, or 'None'" })}
                {Area("Current Medications", "medications", { required: true, placeholder: "Name, dose, and frequency — or 'None'" })}
              </>)}

              {Section("Family Mental Health History", <>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "-0.5rem" }}>
                  If any apply, note the family member (e.g. &quot;mother&quot;, &quot;sibling&quot;). Leave blank if none.
                </p>
                {grid2(<>
                  {Text("Depression", "famDepression")}
                  {Text("Anxiety", "famAnxiety")}
                </>)}
                {grid2(<>
                  {Text("Bipolar", "famBipolar")}
                  {Text("Schizophrenia", "famSchizophrenia")}
                </>)}
                {grid2(<>
                  {Text("Substance Use", "famSubstance")}
                  {Text("Suicide / Attempts", "famSuicide")}
                </>)}
              </>)}

              {Section("Substance Use", <>
                {Radio("Do you currently use alcohol?", "alcohol", ["Yes", "No"])}
                {Radio("Do you currently use cannabis or other substances?", "cannabis", ["Yes", "No"])}
                {Radio("Past treatment for substance use?", "pastSubstanceTreatment", ["Yes", "No"])}
              </>)}

              {Section("Treatment Goals", <>
                {Area("What are your treatment goals?", "treatmentGoals", { required: true })}
                {Area("Any concerns about treatment?", "treatmentConcerns")}
              </>)}

              {Section("Signature & Consent", <>
                {grid2(<>
                  {Text("Patient / Guardian Signature (type full name)", "signature", { required: true, placeholder: "Type your full name" })}
                  {Text("Date", "signatureDate", { required: true, type: "date" })}
                </>)}
                <label style={{ display: "flex", alignItems: "flex-start", gap: "0.7rem", cursor: "pointer", color: "var(--text-dark)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  <input type="checkbox" required checked={form.consent} onChange={(e) => set("consent", e.target.checked)} style={{ marginTop: "0.25rem" }} />
                  <span>
                    I certify that the information provided is accurate to the best of my knowledge, and I consent to treatment at Dunn Behavioral Health. I agree to the practice&apos;s Terms &amp; Conditions and{" "}
                    <Link href="/privacy" style={{ color: "var(--accent)", fontWeight: 600 }}>Privacy Policy</Link>. *
                  </span>
                </label>
              </>)}

              {status === "error" && (
                <div style={{ color: "#c0392b", backgroundColor: "#fdecea", padding: "0.85rem 1rem", borderRadius: 8, fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                  Something went wrong submitting your form. Please try again, or call us at (912) 848-5335.
                </div>
              )}

              <button type="submit" className="btn-primary" disabled={status === "loading"} style={{ width: "100%", textAlign: "center", padding: "1rem", fontSize: "1rem", opacity: status === "loading" ? 0.7 : 1 }}>
                {status === "loading" ? "Submitting…" : "Submit Intake Form"}
              </button>
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", textAlign: "center", marginTop: "1rem" }}>
                Your information is sent securely to our office and treated as confidential.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
