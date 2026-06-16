import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRightIcon } from "./Icons";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll(".cta-animate");
    gsap.from(elements, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full clip-diagonal overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A4A3A 0%, #0D1B17 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-8 md:py-20 text-center">
        <h2 className="cta-animate font-display font-bold text-3xl md:text-5xl lg:text-6xl text-off-white tracking-tight mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="cta-animate font-body text-base md:text-lg text-silver max-w-[560px] mx-auto mb-10">
          Upload your CAD file for an instant quote, or talk to our engineering
          team about your requirements.
        </p>
        <button className="cta-animate inline-flex items-center gap-3 px-10 py-4 rounded-full font-body font-semibold text-base text-off-white bg-forest hover:brightness-110 transition-all duration-200 group">
          Upload Your CAD
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
