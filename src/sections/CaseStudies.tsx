import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 1,
    category: "DEFENSE / UAV",
    title: "Aerospace",
    description:
      "Military-grade VTOL assembly engineered for high-precision mission reliability. We provided isotropic HP MJF PA12 structural airframes. Integrated in-house post-processing and tactical assembly.",
    techTags: ["PA12", "PRINT", "ASSEMBLY"],
    image: "/images/case-aerospace.jpg",
  },
  {
    id: 2,
    category: "MEDICAL IMAGING",
    title: "Precision Health",
    description:
      "Handheld retinal imaging systems representing 5+ years of continuous production excellence. We provided clinical-grade Med-SLA and MJF components with full clinical assembly.",
    techTags: ["SLA", "MJF", "PAINT", "ASSEMBLY"],
    image: "/images/case-healthcare.jpg",
  },
  {
    id: 3,
    category: "ROBOTICS / VTOL",
    title: "Precision Robotics",
    description:
      "Aircraft-grade machined components for long-endurance platforms. High-complexity 5-axis CNC rotor hubs with sub-10 micron tolerances for mission-critical reliability.",
    techTags: ["AL-7075", "5-AXIS", "MICRON"],
    image: "/images/case-automotive.jpg",
  },
  {
    id: 4,
    category: "ADVANCED DESIGN UNIT",
    title: "Digital Twin",
    description:
      "High-resolution 3D scanning and CAD replication for performance consumer appliances. We provided advanced teardowns and DFM optimization for our customer.",
    techTags: ["3DSCAN", "SOLIDWORKS", "DFM"],
    image: "/images/hero-bg.jpg",
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!headingRef.current) return;

    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="w-full bg-off-white py-14 md:py-16"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="mb-12 md:mb-16">
          <p className="font-body font-light text-xs uppercase tracking-wider text-forest mb-3">
            Portfolio
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-text-primary tracking-tight">
            Our Work
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {caseStudies.map((study, i) => (
            <div
              key={study.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="group rounded-2xl overflow-hidden bg-white border border-border-light/40 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Category */}
                <p className="font-body font-bold text-[10px] uppercase tracking-widest text-forest mb-2">
                  {study.category}
                </p>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary tracking-tight mb-3">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm leading-relaxed text-text-secondary mb-5">
                  {study.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full font-body text-[10px] font-bold uppercase tracking-wider text-forest border border-forest/20 bg-forest/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
