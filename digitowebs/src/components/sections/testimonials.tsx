"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const testimonials = [
  {
    name: "Adebayo Ogunlade",
    role: "CEO, TravelMax Agency",
    text: "Slatech Solutions transformed our online presence completely. Their team delivered a stunning website that increased our bookings by 150%. Highly recommended!",
    rating: 5,
  },
  {
    name: "Chioma Nwankwo",
    role: "Founder, ShopNow Store",
    text: "Working with Slatech was a game-changer for our e-commerce business. The website is fast, secure, and our conversion rates have doubled since launch.",
    rating: 5,
  },
  {
    name: "Ibrahim Musa",
    role: "Director, EduLearn Academy",
    text: "Professional, responsive, and creative. They understood our vision from day one and delivered beyond our expectations. The best web agency in Lagos!",
    rating: 5,
  },
  {
    name: "Funke Adeyemi",
    role: "Manager, MediCare Health",
    text: "From design to deployment, the entire process was seamless. Our patients love the new website, and it has significantly improved our online appointment bookings.",
    rating: 5,
  },
  {
    name: "Emeka Obi",
    role: "Owner, Elite Real Estate",
    text: "Exceptional quality and attention to detail. The team went above and beyond to ensure our property listings look amazing. Five stars all the way!",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-primary">Clients</span> Say
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Don&apos;t just take our word for it — hear from businesses we&apos;ve helped succeed online.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Testimonial Card */}
            <div className="bg-accent rounded-2xl p-8 sm:p-10 border border-border relative overflow-hidden">
              {/* Quote icon */}
              <svg
                className="absolute top-6 right-6 w-12 h-12 text-primary/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <div className="relative">
                <StarRating rating={testimonials[current].rating} />
                <p className="text-foreground text-lg leading-relaxed mt-4 mb-6 min-h-[80px]">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {testimonials[current].name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Previous testimonial"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Next testimonial"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
