import { useRef, useState, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const rotatingWords = ["SCAN", "DESIGN", "MODEL", "REVERSE ENGINEERING", "PROTOTYPING", "MANUFACTURE"];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  const tick = useCallback(() => {
    const currentWord = rotatingWords[wordIndex];

    if (!isDeleting) {
      setDisplayText(currentWord.substring(0, displayText.length + 1));
      if (displayText.length + 1 === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2200);
        return;
      }
    } else {
      setDisplayText(currentWord.substring(0, displayText.length - 1));
      if (displayText.length - 1 === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        return;
      }
    }
  }, [displayText, isDeleting, wordIndex]);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  useEffect(() => {
    if (wordRef.current && displayText.length === rotatingWords[wordIndex].length) {
      gsap.fromTo(
        wordRef.current,
        { scale: 1.04 },
        { scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [wordIndex, displayText]);

  useGSAP(() => {
    if (!contentRef.current) return;
    const items = contentRef.current.querySelectorAll("[data-hero-anim]");

    if (bgRef.current) {
      gsap.from(bgRef.current, {
        scale: 1.12,
        duration: 2.5,
        ease: "power2.out",
      });
    }

    gsap.from(items, {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.3,
    });
  }, { scope: sectionRef });

  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-0 md:min-h-screen flex items-start md:items-end pt-32 md:pt-24 pb-10 md:pb-16 overflow-hidden"
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <img
          src="/images/hero-light-bg.png"
          alt="CNC machined precision part"
          className="w-full h-full object-cover object-[center_25%] md:object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,31,48,0.5) 0%, rgba(7,31,48,0.3) 40%, rgba(7,31,48,0.6) 100%)",
          }}
        />
      </div>

      {/* Content — bottom-left aligned */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-8 pb-10 md:pb-16"
      >
        {/* Headline */}
        <h1
          data-hero-anim
          className="font-display font-extrabold uppercase tracking-tight leading-[0.92] mb-6 max-w-[900px] text-center md:text-left mx-auto md:mx-0"
        >
          <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            ONE STOP
          </span>
          <span className="flex flex-col sm:flex-row items-center sm:items-baseline justify-center md:justify-start gap-1 sm:gap-3 md:gap-5">
            <span
              ref={wordRef}
              className="inline-block text-mint text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold"
              style={{
                minWidth: "3ch",
                textShadow: "0 0 60px rgba(86,229,185,0.25)",
              }}
            >
              {displayText}
              <span className="inline-block w-[3px] h-[0.7em] bg-mint/70 ml-1 animate-caret-blink align-baseline" />
            </span>
            <span className="text-white/50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
              SOLUTION
            </span>
          </span>
        </h1>

        {/* Body text */}
        <p
          data-hero-anim
          className="font-body text-sm md:text-base text-white/75 leading-relaxed mb-1.5 max-w-[480px] text-center md:text-left mx-auto md:mx-0"
        >
          For scan, design and manufacturing jobs — as a service.
        </p>
        <p
          data-hero-anim
          className="font-body text-xs md:text-sm text-white/45 leading-relaxed mb-8 max-w-[480px] text-center md:text-left mx-auto md:mx-0"
        >
          A future-looking startup transforming complex engineering designs
          into flawless realities. ISO 9001:2015 Certified.
        </p>

        {/* CTA Buttons */}
        <div data-hero-anim className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
          <button
            onClick={() => scrollToSection("#contact")}
            className="group px-7 py-3 rounded-full font-body font-bold text-xs uppercase tracking-wider text-near-black bg-mint hover:bg-white transition-all duration-300 shadow-lg"
          >
            <span className="flex items-center gap-2">
              Upload Your CAD
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => scrollToSection("#services")}
            className="px-7 py-3 rounded-full font-body font-semibold text-xs uppercase tracking-wider text-white/90 border border-white/25 hover:border-white/50 hover:bg-white/10 transition-all duration-300"
          >
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}
