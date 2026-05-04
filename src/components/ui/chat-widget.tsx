"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  "Individual Therapy",
  "Couples Counseling",
  "Family Therapy",
  "Teen Support",
  "Anxiety & Depression",
  "Trauma & PTSD",
];

const TIMES = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

type Role = "bot" | "user";
type Step =
  | "welcome"
  | "name"
  | "email"
  | "phone"
  | "service"
  | "session_type"
  | "date"
  | "time"
  | "notes"
  | "submitting"
  | "done"
  | "error";

interface Message {
  id: number;
  role: Role;
  text: string;
  options?: string[];
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  sessionType: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

const INITIAL_FORM: FormData = {
  name: "", email: "", phone: "", service: "",
  sessionType: "", preferredDate: "", preferredTime: "", notes: "",
};

let msgId = 0;
const msg = (role: Role, text: string, options?: string[]): Message => ({
  id: ++msgId, role, text, options,
});

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("welcome");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addBotMsg = (text: string, options?: string[]) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, msg("bot", text, options)]);
    }, 700);
  };

  useEffect(() => {
    if (open && messages.length === 0) {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages([
          msg("bot", "👋 Welcome to Dunn Behavioral Health! I'm here to help you schedule an appointment or answer your questions."),
        ]);
        setTimeout(() => {
          addBotMsg("To get started, may I have your full name?");
          setStep("name");
        }, 800);
      }, 600);
    }
    if (open) setUnread(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open, step]);

  const addUserMsg = (text: string) => {
    setMessages((prev) => [...prev, msg("user", text)]);
  };

  const needsTextInput = !["service", "session_type", "time", "done", "submitting", "error"].includes(step);

  const handleOption = (option: string) => {
    addUserMsg(option);
    processAnswer(option);
  };

  const handleSubmitInput = () => {
    const val = input.trim();
    if (!val) return;
    addUserMsg(val);
    setInput("");
    processAnswer(val);
  };

  const processAnswer = (val: string) => {
    switch (step) {
      case "name":
        setForm((f) => ({ ...f, name: val }));
        setStep("email");
        addBotMsg(`Nice to meet you, ${val.split(" ")[0]}! 😊 What's your email address?`);
        break;

      case "email": {
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        if (!emailOk) { addBotMsg("That doesn't look like a valid email. Please try again."); return; }
        setForm((f) => ({ ...f, email: val }));
        setStep("phone");
        addBotMsg("Got it! And your phone number?");
        break;
      }

      case "phone":
        setForm((f) => ({ ...f, phone: val }));
        setStep("service");
        addBotMsg(
          "Here are the services we offer at Dunn Behavioral Health. Which one are you interested in?",
          SERVICES
        );
        break;

      case "service":
        setForm((f) => ({ ...f, service: val }));
        setStep("session_type");
        addBotMsg("Would you prefer an in-person or telehealth session?", ["In-Person", "Telehealth"]);
        break;

      case "session_type":
        setForm((f) => ({ ...f, sessionType: val.toLowerCase() }));
        setStep("date");
        addBotMsg("What date works best for your appointment? (e.g. 05/20/2026)");
        break;

      case "date": {
        const dateOk = /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(val);
        if (!dateOk) { addBotMsg("Please enter a date like 05/20/2026."); return; }
        setForm((f) => ({ ...f, preferredDate: val }));
        setStep("time");
        addBotMsg("What time slot works for you?", TIMES);
        break;
      }

      case "time":
        setForm((f) => ({ ...f, preferredTime: val }));
        setStep("notes");
        addBotMsg("Almost done! Is there anything else you'd like us to know before your appointment? (Type 'none' to skip)");
        break;

      case "notes": {
        const notes = val.toLowerCase() === "none" ? "" : val;
        const finalForm = { ...form, notes };
        setForm(finalForm);
        setStep("submitting");
        addBotMsg("Perfect! Let me submit your appointment request... ⏳");
        submitAppointment(finalForm);
        break;
      }
    }
  };

  const submitAppointment = async (data: FormData) => {
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStep("done");
        addBotMsg(
          `✅ Thank you, ${data.name.split(" ")[0]}! Your appointment request for **${data.service}** on ${data.preferredDate} at ${data.preferredTime} has been received. Our team will confirm shortly at ${data.email} or ${data.phone}. Have a wonderful day! 💙`
        );
      } else {
        throw new Error("API error");
      }
    } catch {
      setStep("error");
      addBotMsg("Sorry, something went wrong submitting your request. Please call us at +1 (252) 245-2590 or email info@dunnbehavioralhealth.us.");
    }
  };

  const restart = () => {
    setMessages([]);
    setForm(INITIAL_FORM);
    setStep("welcome");
    setOpen(true);
    msgId = 0;
  };

  return (
    <>
      {/* Floating button */}
      <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 9999 }}>
        <AnimatePresence>
          {!open && unread && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{
                position: "absolute", top: -10, right: -6,
                backgroundColor: "#e53e3e", color: "#fff",
                borderRadius: "50%", width: 20, height: 20,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.7rem", fontWeight: 700,
              }}
            >1</motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((v) => !v)}
          style={{
            width: 58, height: 58, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--primary, #1a4a5a) 0%, var(--accent, #c9a84c) 100%)",
            border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.6rem", color: "#fff",
          }}
          aria-label="Open chat"
        >
          {open ? "✕" : "💬"}
        </motion.button>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            style={{
              position: "fixed", bottom: "5.5rem", right: "1.5rem",
              width: "min(380px, calc(100vw - 2rem))",
              height: "min(560px, calc(100vh - 8rem))",
              zIndex: 9998, borderRadius: 20,
              boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
              display: "flex", flexDirection: "column",
              overflow: "hidden", backgroundColor: "#fff",
            }}
          >
            {/* Header */}
            <div style={{
              background: "linear-gradient(135deg, var(--primary, #1a4a5a) 0%, #2d6a7f 100%)",
              padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.75rem",
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.3rem", flexShrink: 0,
              }}>🧠</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>Dunn Behavioral Health</div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.75rem", display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#68d391", display: "inline-block" }} />
                  Online — typically replies instantly
                </div>
              </div>
              {(step === "done" || step === "error") && (
                <button onClick={restart} style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 8, color: "#fff", padding: "0.3rem 0.7rem", fontSize: "0.75rem", cursor: "pointer" }}>
                  Restart
                </button>
              )}
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: "auto", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem", backgroundColor: "#f7f9fc" }}>
              {messages.map((m) => (
                <div key={m.id} style={{ display: "flex", flexDirection: "column", alignItems: m.role === "user" ? "flex-end" : "flex-start", gap: "0.5rem" }}>
                  <div style={{
                    maxWidth: "85%", padding: "0.65rem 1rem", borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                    backgroundColor: m.role === "user" ? "var(--primary, #1a4a5a)" : "#fff",
                    color: m.role === "user" ? "#fff" : "#2d3748",
                    fontSize: "0.88rem", lineHeight: 1.6,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                  }}>
                    {m.text}
                  </div>
                  {m.options && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", maxWidth: "90%" }}>
                      {m.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOption(opt)}
                          disabled={!["service", "session_type", "time"].includes(step)}
                          style={{
                            padding: "0.4rem 0.85rem", borderRadius: 20,
                            border: "1.5px solid var(--primary, #1a4a5a)",
                            backgroundColor: "#fff", color: "var(--primary, #1a4a5a)",
                            fontSize: "0.8rem", fontWeight: 600, cursor: "pointer",
                            transition: "all 0.2s",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--primary, #1a4a5a)"; e.currentTarget.style.color = "#fff"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.color = "var(--primary, #1a4a5a)"; }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {typing && (
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <div style={{
                    padding: "0.65rem 1rem", borderRadius: "18px 18px 18px 4px",
                    backgroundColor: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                    display: "flex", gap: 5, alignItems: "center",
                  }}>
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        style={{ display: "block", width: 7, height: 7, borderRadius: "50%", backgroundColor: "#a0aec0" }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            {needsTextInput && step !== "submitting" && step !== "done" && step !== "error" && (
              <div style={{
                padding: "0.75rem 1rem", borderTop: "1px solid #e2e8f0",
                display: "flex", gap: "0.5rem", backgroundColor: "#fff",
              }}>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmitInput()}
                  placeholder={
                    step === "name" ? "Your full name..." :
                    step === "email" ? "Your email address..." :
                    step === "phone" ? "Your phone number..." :
                    step === "date" ? "MM/DD/YYYY" :
                    step === "notes" ? "Any notes... (or type 'none')" : "Type a message..."
                  }
                  style={{
                    flex: 1, padding: "0.6rem 1rem", borderRadius: 24,
                    border: "1.5px solid #e2e8f0", outline: "none",
                    fontSize: "0.88rem", color: "#2d3748",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary, #1a4a5a)")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
                <button
                  onClick={handleSubmitInput}
                  disabled={!input.trim()}
                  style={{
                    width: 40, height: 40, borderRadius: "50%", border: "none",
                    background: input.trim() ? "var(--primary, #1a4a5a)" : "#e2e8f0",
                    color: input.trim() ? "#fff" : "#a0aec0",
                    cursor: input.trim() ? "pointer" : "default",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1rem", flexShrink: 0, transition: "all 0.2s",
                  }}
                >
                  ➤
                </button>
              </div>
            )}

            {(step === "done" || step === "error") && (
              <div style={{ padding: "0.75rem 1rem", borderTop: "1px solid #e2e8f0", backgroundColor: "#fff", textAlign: "center" }}>
                <button onClick={restart} style={{
                  padding: "0.6rem 1.5rem", borderRadius: 24,
                  background: "var(--primary, #1a4a5a)", color: "#fff",
                  border: "none", cursor: "pointer", fontSize: "0.88rem", fontWeight: 600,
                }}>
                  Start a new conversation
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
