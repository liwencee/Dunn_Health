"use client";

import { useEffect, useRef, useState } from "react";

type Animation =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "blur-in";

const animationClasses: Record<Animation, string> = {
  "fade-up": "translate-y-8 opacity-0",
  "fade-in": "opacity-0",
  "slide-left": "-translate-x-8 opacity-0",
  "slide-right": "translate-x-8 opacity-0",
  "scale-up": "scale-95 opacity-0",
  "blur-in": "opacity-0 blur-sm",
};

export function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if already in viewport
    const check = () => {
      const rect = element.getBoundingClientRect();
      const h = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < h * 0.85 && rect.bottom > 0) {
        setIsVisible(true);
      }
    };

    // Check on mount
    check();

    // Check on scroll
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 translate-x-0 opacity-100 scale-100 blur-0" : animationClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
