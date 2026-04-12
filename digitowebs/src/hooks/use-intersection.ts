"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function useIntersection(threshold: number = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = useCallback(() => {
    const element = ref.current;
    if (!element || isVisible) return;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const ratio = visibleHeight / rect.height;

    if (ratio >= threshold) {
      setIsVisible(true);
    }
  }, [isVisible, threshold]);

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return;

    // Check immediately in case element is already visible
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    if (visibleHeight / rect.height >= threshold) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    // Also listen for scroll as fallback
    const onScroll = () => checkVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [isVisible, threshold, checkVisibility]);

  return { ref, isVisible };
}
