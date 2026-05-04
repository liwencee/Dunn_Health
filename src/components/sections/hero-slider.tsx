"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 0,
    image: "https://images.unsplash.com/photo-1620934125844-611fa7aaca69?w=1920&q=85",
    title: "Your Journey to\nHealing Starts Here",
    subtitle:
      "Professional behavioral health services tailored to your unique needs in Kingsland, Georgia.",
    cta: { label: "Book Appointment", href: "/contact" },
    ctaSecondary: { label: "Our Services", href: "/services" },
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=85",
    title: "Compassionate Care\nfor Mind & Soul",
    subtitle:
      "Expert therapists dedicated to your mental wellness, recovery, and long-term flourishing.",
    cta: { label: "Meet Our Team", href: "/about" },
    ctaSecondary: { label: "Learn More", href: "/about" },
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=85",
    title: "Rebuilding Lives,\nRestoring Hope",
    subtitle:
      "Evidence-based treatment for individuals, couples, and families — because everyone deserves to thrive.",
    cta: { label: "Get Started Today", href: "/contact" },
    ctaSecondary: { label: "Our Approach", href: "/services" },
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export function HeroSlider() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number) => {
      const dir = next > current ? 1 : -1;
      setCurrent([((next % slides.length) + slides.length) % slides.length, dir]);
    },
    [current]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(current + 1), 6000);
    return () => clearInterval(id);
  }, [current, paused, go]);

  const slide = slides[current];

  return (
    <section
      style={{ position: "relative", height: "100svh", minHeight: 620, overflow: "hidden" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          {/* Dark gradient overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(13,43,56,0.82) 0%, rgba(13,43,56,0.55) 55%, rgba(13,43,56,0.2) 100%)",
          }} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div
        className="container"
        style={{
          position: "relative", zIndex: 10,
          height: "100%",
          display: "flex", flexDirection: "column", justifyContent: "center",
          paddingTop: "6rem",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: 680 }}
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: "rgba(201,162,39,0.2)",
                border: "1px solid rgba(201,162,39,0.5)",
                color: "var(--accent-light)",
                padding: "0.35rem 1rem",
                borderRadius: 50, fontSize: "0.78rem",
                letterSpacing: "0.14em", textTransform: "uppercase",
                fontWeight: 700, marginBottom: "1.25rem",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--accent)", display: "inline-block", animation: "pulse-ring 2s infinite" }} />
              Behavioral Health Services · Kingsland, GA
            </motion.div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
                color: "#fff",
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: "1.25rem",
                whiteSpace: "pre-line",
              }}
            >
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(1rem, 2vw, 1.2rem)", marginBottom: "2rem", lineHeight: 1.7 }}>
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href={slide.cta.href} className="btn-primary">
                {slide.cta.label}
              </Link>
              <Link href={slide.ctaSecondary.href} className="btn-outline">
                {slide.ctaSecondary.label}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div
        style={{
          position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: "0.75rem", zIndex: 20,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? 36 : 10,
              height: 10,
              borderRadius: 5,
              border: "2px solid rgba(255,255,255,0.7)",
              backgroundColor: i === current ? "var(--accent)" : "transparent",
              cursor: "pointer",
              transition: "all 0.4s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => go(current - 1)}
        aria-label="Previous slide"
        style={{
          position: "absolute", left: "1.5rem", top: "50%", transform: "translateY(-50%)",
          zIndex: 20, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff", width: 48, height: 48, borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", fontSize: "1.2rem", backdropFilter: "blur(4px)",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(201,162,39,0.5)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)")}
      >
        ‹
      </button>
      <button
        onClick={() => go(current + 1)}
        aria-label="Next slide"
        style={{
          position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)",
          zIndex: 20, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff", width: 48, height: 48, borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", fontSize: "1.2rem", backdropFilter: "blur(4px)",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(201,162,39,0.5)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)")}
      >
        ›
      </button>

      {/* Progress bar */}
      <motion.div
        key={current}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 6, ease: "linear" }}
        style={{
          position: "absolute", bottom: 0, left: 0,
          width: "100%", height: 3,
          backgroundColor: "var(--accent)",
          transformOrigin: "left",
          zIndex: 20,
        }}
      />
    </section>
  );
}
