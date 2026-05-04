"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 1500, suffix: "+", label: "Clients Helped" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 6, suffix: "", label: "Therapy Specialties" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const inc = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += inc;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsBar() {
  return (
    <section style={{ backgroundColor: "var(--primary)", padding: "3.5rem 0" }}>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        {stats.map((s, i) => (
          <div key={i} style={{ padding: "0.5rem" }}>
            <div
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 700,
                color: "var(--accent)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.92rem", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
