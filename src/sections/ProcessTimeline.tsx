import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CloudUploadIcon, BrainAIIcon, CalculatorIcon, FactoryGearIcon } from "./Icons";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const steps = [
  {
    icon: CloudUploadIcon,
    title: "NDA Protection",
    description: "We sign a safety agreement first to keep your data safe, then an engineer checks your file immediately.",
  },
  {
    icon: BrainAIIcon,
    title: "Expert Advice",
    description: "Our engineering team reviews your design and gives you a fixed, clear price for your production run.",
  },
  {
    icon: CalculatorIcon,
    title: "Vendor Setup",
    description: "We provide all the paperwork needed to set us up in your system within minutes.",
  },
  {
    icon: FactoryGearIcon,
    title: "Agile Production",
    description: "Track your project from start to finish with our real-time digital update system.",
  },
];

// 5 SVG path states for morphing (horizontal layout)
const pathStates = [
  "M 80 100 C 160 100, 200 60, 280 100 S 380 140, 480 100 S 580 60, 720 100",
  "M 80 100 C 160 100, 200 140, 280 100 S 380 60, 480 100 S 580 140, 720 100",
  "M 80 100 L 280 100 L 480 100 L 720 100",
  "M 80 100 C 160 70, 200 100, 280 100 C 360 100, 400 70, 480 100 C 560 100, 600 130, 720 100",
  "M 80 100 C 160 120, 200 80, 280 100 C 360 120, 400 80, 480 100 C 560 120, 600 80, 720 100",
];

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const connectorRef = useRef<SVGPathElement>(null);
  const tracersRef = useRef<(SVGCircleElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!sectionRef.current || !connectorRef.current) return;

    const connector = connectorRef.current;

    // Set initial path
    connector.setAttribute("d", pathStates[0]);

    // Create the main scroll-driven timeline for path morphing
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: 3,
      },
    });

    // Morph through path states
    for (let i = 0; i < pathStates.length - 1; i++) {
      tl.to(
        connector,
        {
          attr: { d: pathStates[i + 1] },
          duration: 1,
          ease: "none",
        },
        i * 0.2
      );
    }

    // Animate tracers along the path
    tracersRef.current.forEach((tracer, t) => {
      if (!tracer) return;

      gsap.fromTo(
        tracer,
        {
          motionPath: {
            path: connector,
            align: connector,
            alignOrigin: [0.5, 0.5],
            start: t * 0.25,
            end: t * 0.25,
          },
          opacity: 0,
          scale: 0,
        },
        {
          motionPath: {
            path: connector,
            align: connector,
            alignOrigin: [0.5, 0.5],
            start: (t + 1) * 0.25,
            end: (t + 1) * 0.25,
          },
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 3,
          },
        }
      );

      // Node pulse animation when tracer reaches each step
      const card = cardsRef.current[t];
      if (card) {
        gsap.fromTo(
          card.querySelector(".step-icon"),
          { scale: 1 },
          {
            scale: 1.15,
            duration: 0.3,
            yoyo: true,
            repeat: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `${30 + t * 15}% top`,
              once: true,
            },
          }
        );
      }
    });

    // Secondary: continuous stroke dash animation
    gsap.to(connector, {
      strokeDashoffset: -30,
      duration: 2,
      ease: "linear",
      repeat: -1,
    });

    // Card entrance animations
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.from(card, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    });
  }, { scope: sectionRef });

  // Fallback for browsers without MotionPathPlugin: use getPointAtLength
  useEffect(() => {
    if (!connectorRef.current) return;
    // Ensure MotionPathPlugin is available - if not, we'll use a simpler fallback
    try {
      const plugin = gsap.plugins.motionPath;
      if (!plugin) {
        // Simple fallback: just animate tracers with opacity
        tracersRef.current.forEach((tracer, i) => {
          if (!tracer) return;
          gsap.set(tracer, {
            attr: {
              cx: [80, 280, 480, 720][i],
              cy: 100,
            },
          });
        });
      }
    } catch {
      // MotionPath not available, use fallback
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative w-full bg-near-black py-16 md:py-20 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="font-body font-light text-xs uppercase tracking-widest text-[#56E5B9] mb-3">
            Our Process
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-off-white tracking-tight mb-4">
            From Digital to Physical
          </h2>
          <p className="font-body text-base md:text-lg text-silver max-w-[600px] mx-auto">
            Our streamlined process takes your concept from CAD file to finished
            part in as little as 48 hours.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* SVG Connector (desktop only) */}
          <div className="hidden md:block absolute top-0 left-0 right-0 h-[200px] -translate-y-1/2 pointer-events-none">
            <svg
              ref={svgRef}
              viewBox="0 0 800 200"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                ref={connectorRef}
                d={pathStates[0]}
                fill="none"
                stroke="#56E5B9"
                strokeOpacity="0.4"
                strokeWidth="2"
                strokeDasharray="20 10"
              />
              {/* Tracer circles */}
              {steps.map((_, i) => (
                <circle
                  key={i}
                  ref={(el) => { tracersRef.current[i] = el; }}
                  cx={[80, 280, 480, 720][i]}
                  cy="100"
                  r="5"
                  fill="#56E5B9"
                  opacity="0"
                />
              ))}
            </svg>
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon Node */}
                  <div className="step-icon w-20 h-20 rounded-full bg-[#56E5B9]/10 border-2 border-[#56E5B9]/80 text-[#56E5B9] flex items-center justify-center mb-6 transition-transform shadow-[0_0_15px_rgba(86,229,185,0.08)]">
                    <Icon className="w-10 h-10" />
                  </div>

                  {/* Step Number */}
                  <span className="font-display font-bold text-sm text-[#56E5B9]/90 mb-2 tracking-wider">
                    0{i + 1}
                  </span>

                  {/* Title */}
                  <h3 className="font-body font-bold text-lg md:text-xl text-off-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-silver/85 max-w-[240px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
