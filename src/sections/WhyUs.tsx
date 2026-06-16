import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Integrated Digital Workflow",
    subtitle: "CAD Ingestion & DFM Validation",
    body: "Our proprietary digital thread locks in quality from day one. We bridge the gap between complex CAD data and industrial production, ensuring that what you design is exactly what we deliver.",
  },
  {
    number: "02",
    title: "One Partner. Total Control",
    subtitle: "Supply Chain Consolidation",
    body: "Bringing a product to life should not mean managing multiple vendors, delays and inconsistencies. We simplify the entire journey — combining design, prototyping and precision manufacturing into one integrated system.",
  },
  {
    number: "03",
    title: "Precision You Can Trust",
    subtitle: "ISO 9001 Certified Auditing",
    body: "With ISO 9001 compliant processes and dedicated inspection systems, every component that leaves our facility meets exact specifications every time.",
  },
  {
    number: "04",
    title: "Faster Results",
    subtitle: "In-house Delivery Speed",
    body: "From concept to final production, every stage is handled in-house. This eliminates handovers, reduces errors and accelerates time to market.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const verticalLineRef = useRef<SVGLineElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Animate horizontal progress line
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        }
      );
    }

    // Animate vertical progress line (mobile)
    if (verticalLineRef.current) {
      gsap.fromTo(
        verticalLineRef.current,
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 50%",
            scrub: 0.5,
          },
        }
      );
    }

    // Animate step cards staggering in
    stepRefs.current.forEach((step) => {
      if (!step) return;
      gsap.fromTo(
        step,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            once: true,
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="about" className="w-full bg-off-white py-16 md:py-20 overflow-hidden border-b border-border-light/10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Split Section Header matching mosey split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-24">
          <div className="lg:col-span-5">
            <p className="font-body font-bold text-xs uppercase tracking-widest text-forest mb-3">
              Why Partner With Us
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight">
              Get to production, faster.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-8 lg:border-l-2 lg:border-forest/20 flex items-center">
            <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed">
              We eliminate supply chain fragmentation by combining design, metrology, and high-performance manufacturing under a single roof. Our sequential process ensures absolute control from initial CAD import to final product shipment.
            </p>
          </div>
        </div>

        {/* Workflow Timeline Container */}
        <div className="relative mt-12">
          
          {/* Connecting Line - Desktop (Horizontal) */}
          <div className="absolute top-[28px] left-[12.5%] w-[75%] h-[2px] hidden md:block z-0 pointer-events-none">
            <svg className="w-full h-full overflow-visible" fill="none">
              <line
                ref={lineRef}
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="#285D60"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeDashoffset="1000"
              />
            </svg>
          </div>

          {/* Connecting Line - Mobile (Vertical) */}
          <div className="absolute left-[24px] top-[40px] bottom-[40px] w-[2px] block md:hidden z-0 pointer-events-none">
            <svg className="w-full h-full overflow-visible" fill="none">
              <line
                ref={verticalLineRef}
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                stroke="#285D60"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeDashoffset="1000"
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => { stepRefs.current[index] = el; }}
                className="flex flex-col md:items-center text-left md:text-center group"
              >
                {/* Step Circle & Number */}
                <div className="flex md:justify-center items-center mb-6 md:mb-8">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-forest/20 text-forest flex items-center justify-center font-display font-bold text-lg shadow-sm group-hover:border-forest group-hover:bg-forest group-hover:text-white transition-all duration-300 relative z-20">
                    {step.number}
                  </div>
                </div>

                {/* Step Card Content */}
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-border-light shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Subtitle */}
                    <span className="block font-body text-[10px] font-bold uppercase tracking-wider text-forest/70 mb-2">
                      {step.subtitle}
                    </span>
                    {/* Title */}
                    <h3 className="font-display font-bold text-lg md:text-xl text-text-primary tracking-tight mb-3">
                      {step.title}
                    </h3>
                    {/* Body */}
                    <p className="font-body text-xs leading-relaxed text-text-secondary">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
