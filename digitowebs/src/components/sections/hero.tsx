"use client";

import Link from "next/link";
import { useTyping } from "@/hooks/use-typing";

export function HeroSection() {
  const typedText = useTyping(
    ["Web Design", "E-Commerce", "SEO", "Digital Marketing", "Web Development"],
    80,
    50,
    2000
  );

  return (
    <section className="relative bg-secondary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary-light blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-medium rounded-full mb-6 border border-primary/30 animate-[fade-in-up_0.6s_ease-out]">
              Turning Ideas into Powerful Digital Brands
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-[fade-in-up_0.6s_ease-out_0.2s_both]">
              The Best{" "}
              <span className="text-primary">{typedText}</span>
              <span className="animate-pulse text-primary">|</span>
              {" "}Company
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg animate-[fade-in-up_0.6s_ease-out_0.4s_both]">
              We help small and large businesses create stunning websites that
              are beautiful, fast, secure, and mobile-friendly. Let us bring
              your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 animate-[fade-in-up_0.6s_ease-out_0.6s_both]">
              <Link
                href="/services"
                className="inline-flex items-center px-7 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95"
              >
                Explore Our Services
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
              >
                Talk To Us
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10 animate-[fade-in-up_0.6s_ease-out_0.8s_both]">
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <p className="text-3xl font-bold text-primary">2k+</p>
                <p className="text-sm text-gray-400">Projects Delivered</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block relative animate-[fade-in-up_0.8s_ease-out_0.4s_both]">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Abstract design cards */}
              <div className="absolute top-8 right-8 w-64 h-44 bg-white rounded-2xl shadow-2xl p-5 rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-105">
                <div className="w-full h-3 bg-gray-100 rounded mb-3" />
                <div className="w-3/4 h-3 bg-gray-100 rounded mb-6" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 bg-primary/10 rounded-lg" />
                  <div className="h-16 bg-secondary/10 rounded-lg" />
                  <div className="h-16 bg-primary/10 rounded-lg" />
                </div>
              </div>
              <div className="absolute bottom-12 left-4 w-56 h-40 bg-white rounded-2xl shadow-2xl p-5 -rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20" />
                  <div>
                    <div className="w-20 h-2.5 bg-gray-100 rounded" />
                    <div className="w-14 h-2 bg-gray-100 rounded mt-1.5" />
                  </div>
                </div>
                <div className="w-full h-2.5 bg-secondary/10 rounded mb-2" />
                <div className="w-full h-2.5 bg-secondary/10 rounded mb-2" />
                <div className="w-2/3 h-2.5 bg-secondary/10 rounded" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-2xl shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: "3s" }}>
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
