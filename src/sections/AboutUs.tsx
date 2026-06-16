import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Coins, ShieldCheck, Cpu, Target, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface VisionNode {
  id: string;
  title: string;
  shortDesc: string;
  icon: any;
  color: string;
  detailTitle: string;
  details: string[];
  metric: string;
}

const visionNodes: VisionNode[] = [
  {
    id: "cost-effective",
    title: "Cost Effective",
    shortDesc: "Integrated workflows and material science minimize baseline costs.",
    icon: Coins,
    color: "#56E5B9", // Mint accent
    detailTitle: "Automated Economic Optimization",
    details: [
      "Real-time Design for Manufacturability (DFM) assessment feedback.",
      "Smart nesting algorithms reduce raw material scrap rates by 22%.",
      "High-throughput digital batches bypass traditional hard-tooling costs."
    ],
    metric: "up to -30% cost reduction"
  },
  {
    id: "reliable",
    title: "Reliable",
    shortDesc: "Backed by strict ISO 9001 compliance and 50+ years of technical manufacturing depth.",
    icon: ShieldCheck,
    color: "#A5B7C6", // Silver accent
    detailTitle: "Industrial Grade Quality Assurance",
    details: [
      "Rigorous ISO 9001:2015 process compliance auditing.",
      "100% CMM non-contact laser scanning validation.",
      "Full traceability tracking from raw powder/billet to final shipment."
    ],
    metric: "100% CMM validated"
  },
  {
    id: "smart",
    title: "Smart",
    shortDesc: "Unified CNC, laser, and additive ecosystem for rapid turnaround from CAD to Part.",
    icon: Cpu,
    color: "#56E5B9", // Mint accent
    detailTitle: "Closed-Loop Cyber-Physical System",
    details: [
      "Direct CAD-to-GCode automated translation pipeline.",
      "Real-time sensor-monitored print layers and machining feedback.",
      "Integrated metrology-driven calibration for zero-drift tolerances."
    ],
    metric: "<24h CAD-to-GCode"
  }
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const visualContainerRef = useRef<HTMLDivElement>(null);

  const visionSectionRef = useRef<HTMLDivElement>(null);
  const visionHubRef = useRef<HTMLDivElement>(null);
  const connectionLinesRef = useRef<SVGSVGElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeNode, setActiveNode] = useState<string>("cost-effective");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    if (textContainerRef.current) {
      const items = textContainerRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textContainerRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }

    if (visualContainerRef.current) {
      gsap.fromTo(
        visualContainerRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: visualContainerRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.to(".about-float", {
        y: "random(-6, 6)",
        x: "random(-4, 4)",
        duration: "random(3.5, 5.5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.7,
      });
    }

    // Vision Section Animations
    if (visionSectionRef.current) {
      // Hub scale and fade in
      if (visionHubRef.current) {
        gsap.fromTo(
          visionHubRef.current,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: visionHubRef.current,
              start: "top 80%",
              once: true,
            }
          }
        );
      }

      // Connection paths stroke offset drawing (energy flow)
      const paths = connectionLinesRef.current?.querySelectorAll("path");
      if (paths) {
        paths.forEach((path) => {
          const length = path.getTotalLength();
          gsap.fromTo(
            path,
            { strokeDasharray: length, strokeDashoffset: length },
            {
              strokeDashoffset: 0,
              duration: 1.5,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: visionHubRef.current,
                start: "bottom 85%",
                once: true,
              }
            }
          );
        });
      }

      // Nodes entrance
      nodeRefs.current.forEach((node, idx) => {
        if (!node) return;
        gsap.fromTo(
          node,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: idx * 0.2 + 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: visionHubRef.current,
              start: "bottom 85%",
              once: true,
            }
          }
        );
      });

      // Subtle float animation for the Vision nodes
      nodeRefs.current.forEach((node, idx) => {
        if (!node) return;
        gsap.to(node, {
          y: idx % 2 === 0 ? "+=8" : "-=8",
          duration: 3 + idx * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: idx * 0.3,
        });
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="relative w-full bg-white overflow-hidden border-b border-border-light/10 py-10 md:py-[50px]"
    >
      {/* Background Tech Dot Matrix Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none"
        style={{
          backgroundImage: "radial-gradient(#071F30 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center mb-0 md:mb-20 gap-6 md:gap-0 md:min-h-[520px]">

          {/* ── Left Column ── */}
          <div
            ref={textContainerRef}
            className="flex flex-col justify-center text-left w-full md:w-[42%] pr-0 md:pr-12 flex-shrink-0"
          >
            <h2
              className="font-display font-black uppercase leading-none"
              style={{ fontSize: "clamp(2.2rem,5vw,4.5rem)", color: "#0E2A45", letterSpacing: "-0.02em" }}
            >
              About Us
            </h2>
            <div 
              className="w-[88px] h-[3px] mt-3.5 mb-6 md:mb-8" 
              style={{ background: "#0E2A45" }} 
            />

            <p
              className="font-body italic leading-relaxed mb-6 md:mb-10 text-justify md:text-left"
              style={{ fontSize: "clamp(0.95rem,1.2vw,1.15rem)", color: "#4A5568", maxWidth: "460px" }}
            >
              We deliver uncompromising engineering excellence by integrating advanced production
              technologies. We provide our clients with absolute precision, speed, and scalable
              quality in every custom part we produce.
            </p>

            <button
              className="group inline-flex items-center gap-2.5 font-body font-bold uppercase tracking-widest text-white transition-all duration-300"
              style={{
                background: "#0E2A45",
                borderRadius: "999px",
                padding: "14px 28px",
                fontSize: "0.72rem",
                width: "fit-content",
                boxShadow: "0 4px 14px rgba(14,42,69,0.25)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#1a3d5c")}
              onMouseLeave={e => (e.currentTarget.style.background = "#0E2A45")}
            >
              <span>Learn More</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* ── Right visual area — stretches to right viewport edge ── */}
          <div
            ref={visualContainerRef}
            className="relative w-full md:flex-1 h-[340px] sm:h-[420px] md:h-[520px]"
          >

            {/*
              BLUE PILL
              - Positioned so its right edge bleeds off screen
              - Left edge sits ~20% (mobile) to ~28% (desktop) into this column so blobs can overlap it
              - border-radius: responsive capsule/stadium shape
            */}
            <div
              className="absolute overflow-hidden rounded-[180px] sm:rounded-[240px] md:rounded-[280px] left-[20%] md:left-[28%] right-[-24px] md:right-[-60px] top-0 bottom-0 z-[2]"
              style={{
                background: "#0D3655",
              }}
            >
              {/* Image fills the pill */}
              <img
                src="/images/about_us_rajesh.png"
                alt="Engineering Specialist Rajesh"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>

            {/*
              FEATHER STROKES
              Right side, partially behind pill right edge.
              We extend them beyond the pill to peek out at the right.
            */}
            <svg
              className="about-float absolute pointer-events-none w-[18%] md:w-[13%] right-[-16px] md:right-[-40px] top-[4%] z-[3]"
              viewBox="0 0 80 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="fg" x1="0%" y1="0%" x2="90%" y2="100%">
                  <stop offset="0%" stopColor="#6E90AB" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#AAA69F" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              <path d="M 65 6  C 52 48, 22 66, 4 96  C 24 72, 52 52, 65 6  Z"  fill="url(#fg)"/>
              <path d="M 68 82 C 54 126, 24 148, 3 180 C 24 156, 52 134, 68 82 Z" fill="url(#fg)"/>
              <path d="M 64 160 C 50 204, 20 226, 2 256 C 22 234, 50 212, 64 160 Z" fill="url(#fg)"/>
              <path d="M 60 238 C 46 280, 18 300, 1 328 C 20 308, 46 288, 60 238 Z" fill="url(#fg)"/>
            </svg>

            {/*
              GREY CIRCLE
              Sits to the left of the pill, bottom half of section.
              Centered so the navy blob and berry stem overlap it.
            */}
            <div
              className="about-float absolute rounded-full w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[190px] md:h-[190px] bottom-[20px] md:bottom-[30px] left-[5%] md:left-[10%] z-[4]"
              style={{
                background: "#C5C1BA",
                opacity: 0.8,
              }}
            />

            {/*
              DARK NAVY OVAL BLOB
              Overlaps the grey circle — offset slightly right+down from circle center.
            */}
            <div
              className="about-float absolute w-[85px] h-[105px] sm:w-[105px] sm:h-[130px] md:w-[130px] md:h-[160px] bottom-[15px] md:bottom-[22px] left-[9%] md:left-[14%] z-[5]"
              style={{
                background: "#071F30",
                borderRadius: "50%",
                opacity: 0.94,
              }}
            />

            {/*
              BERRY STEM SVG
              Centred over the navy blob.
            */}
            <svg
              className="about-float absolute pointer-events-none bottom-[10px] md:bottom-[16px] left-[8.5%] md:left-[13.5%] w-[45px] md:w-[65px] h-[110px] md:h-[160px] z-[6]"
              viewBox="0 0 65 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Stem */}
              <path
                d="M 32 155 Q 30 122 26 95 Q 22 68 28 44 Q 34 22 31 6"
                stroke="#0E3A5E"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Berries alternating sides */}
              <circle cx="16" cy="90"  r="8"   fill="#0E3A5E"/>
              <circle cx="44" cy="70"  r="8"   fill="#0E3A5E"/>
              <circle cx="14" cy="50"  r="7"   fill="#0E3A5E"/>
              <circle cx="43" cy="32"  r="6.5" fill="#0E3A5E"/>
              <circle cx="16" cy="15"  r="5.5" fill="#0E3A5E"/>
            </svg>

            {/* MINT SPARKLE — bottom-right, inside the pill area */}
            <div
              className="absolute pointer-events-none bottom-[15%] right-[6%] w-[14px] md:w-[18px] h-[14px] md:h-[18px] z-[10]"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 1L13.8 10.2L23 12L13.8 13.8L12 23L10.2 13.8L1 12L10.2 10.2L12 1Z"
                  fill="#3DD6A3"
                />
              </svg>
            </div>

          </div>
        </div>

        {/* ROW 2: Our Vision & Interactive Node Map */}
        <div ref={visionSectionRef} className="hidden md:block border-t border-border-light pt-12">
          
          {/* Header Description */}
          <div className="max-w-[850px] mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/5 border border-forest/10 mb-4">
              <Target className="w-4 h-4 text-forest" />
              <span className="font-body text-[10px] font-light uppercase tracking-wider text-forest">
                Strategic Directive
              </span>
            </div>
            
            <h3 className="font-display font-bold text-3xl md:text-4xl text-near-black uppercase tracking-tight mb-6">
              Our Vision
            </h3>
            
            <p className="font-body text-base md:text-lg lg:text-xl text-text-primary leading-relaxed font-light">
              "To be the world's most trusted and agile manufacturing partner, transforming complex engineering designs into flawless realities without friction and delay."
            </p>
          </div>

          {/* Interactive Flow Schematic Map */}
          <div className="relative w-full max-w-[1000px] mx-auto min-h-[580px] lg:min-h-[460px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 mt-8">
            
            {/* Connection Lines (Desktop SVG representation) */}
            <svg
              ref={connectionLinesRef}
              className="absolute inset-0 w-full h-full hidden lg:block z-0 pointer-events-none overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Path 1: Central Vision (x:50%, y:50%) -> Left Node (x:15%, y:30%) */}
              <path
                d="M 500 230 C 400 230, 200 230, 200 130"
                stroke={hoveredNode === "cost-effective" || activeNode === "cost-effective" ? "#56E5B9" : "#E0DEDA"}
                strokeWidth={hoveredNode === "cost-effective" || activeNode === "cost-effective" ? "3" : "1.5"}
                className="transition-colors duration-300"
              />
              
              {/* Path 2: Central Vision -> Center-Bottom Node (x:50%, y:80%) */}
              <path
                d="M 500 230 Q 500 300 500 370"
                stroke={hoveredNode === "reliable" || activeNode === "reliable" ? "#56E5B9" : "#E0DEDA"}
                strokeWidth={hoveredNode === "reliable" || activeNode === "reliable" ? "3" : "1.5"}
                className="transition-colors duration-300"
              />
              
              {/* Path 3: Central Vision -> Right Node (x:85%, y:30%) */}
              <path
                d="M 500 230 C 600 230, 800 230, 800 130"
                stroke={hoveredNode === "smart" || activeNode === "smart" ? "#56E5B9" : "#E0DEDA"}
                strokeWidth={hoveredNode === "smart" || activeNode === "smart" ? "3" : "1.5"}
                className="transition-colors duration-300"
              />

              {/* Animated energy pulses flowing along active path */}
              {activeNode && (
                <path
                  d={
                    activeNode === "cost-effective"
                      ? "M 500 230 C 400 230, 200 230, 200 130"
                      : activeNode === "reliable"
                      ? "M 500 230 Q 500 300 500 370"
                      : "M 500 230 C 600 230, 800 230, 800 130"
                  }
                  stroke="#56E5B9"
                  strokeWidth="3.5"
                  strokeDasharray="10 30"
                  strokeDashoffset="100"
                  className="animate-shimmer"
                  style={{ animation: "shimmer-sweep 3s linear infinite" }}
                />
              )}
            </svg>

            {/* Node 1: Cost Effective (Top Left on desktop) */}
            <div
              ref={(el) => { nodeRefs.current[0] = el; }}
              onClick={() => setActiveNode("cost-effective")}
              onMouseEnter={() => setHoveredNode("cost-effective")}
              onMouseLeave={() => setHoveredNode(null)}
              className={`lg:absolute lg:top-0 lg:left-0 z-10 w-full sm:w-[320px] bg-white border rounded-2xl p-6 cursor-pointer transition-all duration-300 shadow-md ${
                activeNode === "cost-effective"
                  ? "border-forest ring-1 ring-forest bg-forest/5 shadow-card-hover -translate-y-1.5"
                  : "border-border-light hover:border-forest/50 hover:shadow-card hover:-translate-y-1"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  activeNode === "cost-effective" ? "bg-forest text-white" : "bg-forest/5 text-forest"
                }`}>
                  <Coins className="w-5 h-5" />
                </span>
                <h4 className="font-display font-bold text-lg text-near-black uppercase tracking-wide">
                  Cost Effective
                </h4>
              </div>
              <p className="font-body text-xs text-text-secondary leading-relaxed">
                Integrated workflows and material science minimize baseline production costs.
              </p>
              <span className="block mt-4 font-body text-[10px] font-bold uppercase tracking-wider text-forest/70">
                {visionNodes[0].metric}
              </span>
            </div>

            {/* Central Hub Node Representation (Always visible center) */}
            <div
              ref={visionHubRef}
              className="hidden lg:flex absolute top-[180px] left-[450px] z-20 w-[100px] h-[100px] rounded-full bg-forest border-4 border-white shadow-xl flex-col items-center justify-center select-none text-white"
            >
              <Target className="w-7 h-7 animate-pulse text-mint" />
              <span className="font-display font-bold text-[9px] uppercase tracking-widest mt-1 text-silver">
                Hub
              </span>
            </div>

            {/* Node 2: Reliable (Bottom Center on desktop) */}
            <div
              ref={(el) => { nodeRefs.current[1] = el; }}
              onClick={() => setActiveNode("reliable")}
              onMouseEnter={() => setHoveredNode("reliable")}
              onMouseLeave={() => setHoveredNode(null)}
              className={`lg:absolute lg:bottom-0 lg:left-[340px] z-10 w-full sm:w-[320px] bg-white border rounded-2xl p-6 cursor-pointer transition-all duration-300 shadow-md ${
                activeNode === "reliable"
                  ? "border-forest ring-1 ring-forest bg-forest/5 shadow-card-hover -translate-y-1.5"
                  : "border-border-light hover:border-forest/50 hover:shadow-card hover:-translate-y-1"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  activeNode === "reliable" ? "bg-forest text-white" : "bg-forest/5 text-forest"
                }`}>
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <h4 className="font-display font-bold text-lg text-near-black uppercase tracking-wide">
                  Reliable
                </h4>
              </div>
              <p className="font-body text-xs text-text-secondary leading-relaxed">
                Backed by strict ISO 9001 compliance and 50+ years of technical manufacturing depth.
              </p>
              <span className="block mt-4 font-body text-[10px] font-bold uppercase tracking-wider text-forest/70">
                {visionNodes[1].metric}
              </span>
            </div>

            {/* Node 3: Smart (Top Right on desktop) */}
            <div
              ref={(el) => { nodeRefs.current[2] = el; }}
              onClick={() => setActiveNode("smart")}
              onMouseEnter={() => setHoveredNode("smart")}
              onMouseLeave={() => setHoveredNode(null)}
              className={`lg:absolute lg:top-0 lg:right-0 z-10 w-full sm:w-[320px] bg-white border rounded-2xl p-6 cursor-pointer transition-all duration-300 shadow-md ${
                activeNode === "smart"
                  ? "border-forest ring-1 ring-forest bg-forest/5 shadow-card-hover -translate-y-1.5"
                  : "border-border-light hover:border-forest/50 hover:shadow-card hover:-translate-y-1"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  activeNode === "smart" ? "bg-forest text-white" : "bg-forest/5 text-forest"
                }`}>
                  <Cpu className="w-5 h-5" />
                </span>
                <h4 className="font-display font-bold text-lg text-near-black uppercase tracking-wide">
                  Smart
                </h4>
              </div>
              <p className="font-body text-xs text-text-secondary leading-relaxed">
                Unified CNC, laser, and additive ecosystem for rapid turnaround from CAD to Part.
              </p>
              <span className="block mt-4 font-body text-[10px] font-bold uppercase tracking-wider text-forest/70">
                {visionNodes[2].metric}
              </span>
            </div>

          </div>

          {/* Detailed Node Information Panel below the map */}
          <div className="mt-12 lg:mt-16 max-w-[800px] mx-auto bg-off-white rounded-3xl p-8 border border-border-light shadow-inner transition-all duration-500">
            {visionNodes.map((node) => {
              if (node.id !== activeNode) return null;
              const ActiveIcon = node.icon;
              return (
                <div key={node.id} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start animate-fade-up">
                  <div className="p-4 bg-white rounded-2xl border border-border-light shadow-sm flex items-center justify-center self-start">
                    <ActiveIcon className="w-8 h-8 text-forest" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3 mb-4">
                      <h4 className="font-display font-bold text-2xl text-near-black uppercase tracking-wide leading-none">
                        {node.detailTitle}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full font-body text-[9px] font-bold uppercase tracking-wider text-forest bg-forest/5 border border-forest/10">
                        {node.metric}
                      </span>
                    </div>
                    
                    <ul className="space-y-3">
                      {node.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex gap-2.5 items-start text-xs text-text-secondary leading-relaxed font-body">
                          <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}