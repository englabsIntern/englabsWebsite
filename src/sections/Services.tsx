import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CubeWireframeIcon, CompassIcon, CNCGearIcon, FactoryGearIcon } from "./Icons";

gsap.registerPlugin(ScrollTrigger);

const industries = ["All", "Aerospace", "Healthcare", "Automotive", "Defence"];

const services = [
  {
    icon: CubeWireframeIcon,
    title: "Additive Manufacturing",
    subtitle: "ADVANCED SLS & MULTI-JET FUSION",
    summary: "Eliminate hard-tooling costs and bridge the gap from prototype to production with high-throughput industrial 3D arrays.",
    tags: ["Aerospace", "Automotive", "Healthcare", "Defence"],
    specs: [
      { label: "Technology", value: "SLA,SLS,FDM,MJF" },
      { label: "Materials", value: "Engineering Thermoplastics & Metals" },
      { label: "Geometry", value: "Absolute Design Freedom" },
      { label: "Lead Time", value: "From 3-5 business days" },
    ],
    // Elegant technical SVG illustration
    graphic: (
      <svg className="w-full h-full text-forest" viewBox="0 0 200 200" fill="none">
        <defs>
          <linearGradient id="laser-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#05F4B7" stopOpacity="0" />
            <stop offset="50%" stopColor="#05F4B7" stopOpacity="1" />
            <stop offset="100%" stopColor="#05F4B7" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Isometric Grid Background */}
        <path d="M20 100 L100 60 L180 100 L100 140 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
        <path d="M40 100 L100 70 L160 100 L100 130 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="3 3" />
        <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
        {/* Bounding box */}
        <path d="M60 70 L100 50 L140 70 L100 90 Z" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <path d="M60 130 L100 110 L140 130 L100 150 Z" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <line x1="60" y1="70" x2="60" y2="130" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <line x1="100" y1="50" x2="100" y2="110" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <line x1="140" y1="70" x2="140" y2="130" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        {/* Layer 3D print effect */}
        <path d="M60 100 L100 80 L140 100 L100 120 Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
        {/* Laser line scan */}
        <line x1="30" y1="85" x2="170" y2="85" stroke="url(#laser-grad)" strokeWidth="3" className="animate-pulse" />
        {/* Glowing laser point */}
        <circle cx="100" cy="85" r="4" fill="#05F4B7" className="animate-ping" />
        <circle cx="100" cy="85" r="2.5" fill="#05F4B7" />
      </svg>
    ),
  },
  {
    icon: CNCGearIcon,
    title: "Precision Manufacturing",
    subtitle: "MULTI-AXIS CNC MACHINING",
    summary: "Achieve absolute structural integrity for mission-critical parts with our 5-axis vertical machining centers.",
    tags: ["Aerospace", "Automotive", "Defence"],
    specs: [
      { label: "Machining", value: "5-Axis CNC and Vertical Mining" },
      { label: "Tolerances", value: "±0.005mm" },
      { label: "Applications", value: "Aerospace Structural & Engine Parts" },
      { label: "Finishes", value: "Anodizing, Bead Blasting, Passivation" },
    ],
    graphic: (
      <svg className="w-full h-full text-forest" viewBox="0 0 200 200" fill="none">
        {/* Rotating Circular Chuck */}
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.1" />
        <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 5" />
        <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
        {/* CNC Tool Tip */}
        <path d="M100 10 L100 55 L95 65 L105 65 L100 55 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="85" y1="65" x2="115" y2="65" stroke="currentColor" strokeWidth="1" />
        {/* Measurement guidelines */}
        <line x1="40" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
        <line x1="100" y1="40" x2="100" y2="160" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
        {/* Precision crosshairs */}
        <circle cx="100" cy="65" r="3" fill="#05F4B7" />
        <path d="M90 65 L110 65" stroke="#05F4B7" strokeWidth="1" />
        <path d="M100 55 L100 75" stroke="#05F4B7" strokeWidth="1" />
      </svg>
    ),
  },
  {
    icon: CompassIcon,
    title: "Reverse Engineering",
    subtitle: "3D METROLOGY & CAD DIGITIZATION",
    summary: "Bring legacy hardware into the digital age using portable non-contact laser metrology and point-cloud generation.",
    tags: ["Aerospace", "Healthcare", "Automotive"],
    specs: [
      { label: "Inspection", value: "Laser Scanning & CMM verification" },
      { label: "Output", value: "Native CAD Parameters (IGES, STEP)" },
      { label: "Validation", value: "Deviation checks & DFM analysis" },
      { label: "Accuracy", value: "Up to ±25 microns" },
    ],
    graphic: (
      <svg className="w-full h-full text-forest" viewBox="0 0 200 200" fill="none">
        {/* Turbine Mesh representation */}
        <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
        {/* Mesh nodes & links */}
        <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.2">
          <line x1="100" y1="50" x2="135" y2="65" />
          <line x1="135" y1="65" x2="150" y2="100" />
          <line x1="150" y1="100" x2="135" y2="135" />
          <line x1="135" y1="135" x2="100" y2="150" />
          <line x1="100" y1="150" x2="65" y2="135" />
          <line x1="65" y1="135" x2="50" y2="100" />
          <line x1="50" y1="100" x2="65" y2="65" />
          <line x1="65" y1="65" x2="100" y2="50" />

          {/* Internal links */}
          <line x1="100" y1="100" x2="100" y2="50" />
          <line x1="100" y1="100" x2="135" y2="65" />
          <line x1="100" y1="100" x2="150" y2="100" />
          <line x1="100" y1="100" x2="135" y2="135" />
          <line x1="100" y1="100" x2="100" y2="150" />
          <line x1="100" y1="100" x2="65" y2="135" />
          <line x1="100" y1="100" x2="50" y2="100" />
          <line x1="100" y1="100" x2="65" y2="65" />
        </g>
        {/* Glowing node vertices */}
        <circle cx="100" cy="50" r="3.5" fill="#05F4B7" />
        <circle cx="135" cy="65" r="3.5" fill="currentColor" />
        <circle cx="150" cy="100" r="3.5" fill="#05F4B7" />
        <circle cx="135" cy="135" r="3.5" fill="currentColor" />
        <circle cx="100" cy="150" r="3.5" fill="#05F4B7" />
        <circle cx="65" cy="135" r="3.5" fill="currentColor" />
        <circle cx="50" cy="100" r="3.5" fill="#05F4B7" />
        <circle cx="65" cy="65" r="3.5" fill="currentColor" />
        <circle cx="100" cy="100" r="4.5" fill="#05F4B7" />
      </svg>
    ),
  },
  {
    icon: FactoryGearIcon,
    title: "Tooling & Casting",
    subtitle: "Vaccum Casting and SOft Molding Frameworks",
    summary: "Unlock functional alpha-testing without the expense of injection hard-tooling using silicone patterns and polyurethanes.",
    tags: ["Automotive", "Defence", "Healthcare"],
    specs: [
      { label: "Production", value: "High-Fidelity Polyurethane Parts" },
      { label: "Patterns", value: "Master Silicone Mold Engineering" },
      { label: "Turnaround", value: "Rapid Batch Verification (7-10 days)" },
      { label: "Volume", value: "10 to 100+ production-grade units" },
    ],
    graphic: (
      <svg className="w-full h-full text-forest" viewBox="0 0 200 200" fill="none">
        {/* Mold halves splitting apart */}
        {/* Upper Mold Half */}
        <path d="M40 70 L160 70 L160 50 L40 50 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
        <path d="M70 70 L70 85 L90 85 L90 70" stroke="currentColor" strokeWidth="1.5" />
        <path d="M110 70 L110 85 L130 85 L130 70" stroke="currentColor" strokeWidth="1.5" />
        {/* Lower Mold Half */}
        <path d="M40 130 L160 130 L160 150 L40 150 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
        <path d="M70 130 L70 115 L90 115 L90 130" stroke="currentColor" strokeWidth="1.5" />
        <path d="M110 130 L110 115 L130 115 L130 130" stroke="currentColor" strokeWidth="1.5" />
        {/* Mold Core flowing liquid fill */}
        <path d="M75 92 L85 92 L85 108 L75 108 Z" fill="#05F4B7" fillOpacity="0.7" />
        <path d="M115 92 L125 92 L125 108 L115 108 Z" fill="#05F4B7" fillOpacity="0.7" />
        {/* Mold flow directional arrows */}
        <path d="M100 30 L100 60" stroke="#05F4B7" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M96 55 L100 60 L104 55" stroke="#05F4B7" strokeWidth="1.5" />
      </svg>
    ),
  },
];

// ----------------------------------------------------
// Icon components for the Instant Quote Tool
// ----------------------------------------------------
const UploadIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
  </svg>
);

const LockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const TrashIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const FileIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

export default function Services() {
  const [activeIndustry, setActiveIndustry] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Instant Quote States
  const [file, setFile] = useState<File | null>(null);
  const [uploadState, setUploadState] = useState<"idle" | "uploading" | "analyzing" | "success">("idle");
  const [progress, setProgress] = useState(0);
  const [material, setMaterial] = useState("nylon");
  const [finish, setFinish] = useState("standard");
  const [quantity, setQuantity] = useState(1);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const simulateUpload = (selectedFile: File) => {
    setFile(selectedFile);
    setUploadState("uploading");
    setProgress(0);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setUploadState("analyzing");
        setTimeout(() => {
          setUploadState("success");
        }, 1200);
      }
    }, 150);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      simulateUpload(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      simulateUpload(e.dataTransfer.files[0]);
    }
  };

  const handleReset = () => {
    setFile(null);
    setUploadState("idle");
    setProgress(0);
    setMaterial("nylon");
    setFinish("standard");
    setQuantity(1);
  };

  // Pricing Model
  const materialPricing: Record<string, { basePrice: number; perUnit: number; name: string }> = {
    nylon: { basePrice: 15, perUnit: 8.5, name: "Nylon 12 (SLS)" },
    resin: { basePrice: 18, perUnit: 12.0, name: "Tough Resin (SLA)" },
    pla: { basePrice: 8, perUnit: 3.5, name: "PLA (FDM)" },
    aluminium: { basePrice: 85, perUnit: 42.0, name: "Aluminium 6061-T6 (CNC)" },
    steel: { basePrice: 120, perUnit: 65.0, name: "Stainless Steel 316L (CNC)" },
  };

  const finishPricing: Record<string, { multiplier: number; name: string }> = {
    standard: { multiplier: 1.0, name: "Standard (As Printed/Machined)" },
    beadblast: { multiplier: 1.15, name: "Bead Blasted" },
    anodized: { multiplier: 1.35, name: "Anodized / Polished" },
  };

  const selectedMaterialOpt = materialPricing[material] || materialPricing.nylon;
  const selectedFinishOpt = finishPricing[finish] || finishPricing.standard;
  const unitPrice = (selectedMaterialOpt.basePrice + selectedMaterialOpt.perUnit) * selectedFinishOpt.multiplier;
  
  let discount = 1.0;
  if (quantity >= 50) discount = 0.75;
  else if (quantity >= 10) discount = 0.85;
  else if (quantity >= 5) discount = 0.90;

  const totalPrice = unitPrice * quantity * discount;

  useGSAP(() => {
    // 1. Quote Section Entrance Animation
    if (quoteRef.current) {
      gsap.from(quoteRef.current.querySelectorAll(".quote-fade-in"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }

    // 2. Note Cards Entrance (Smooth fade and slide up)
    cardRefs.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          }
        }
      );
    });
  }, { scope: sectionRef });

  const sheetBgClasses = [
    "bg-[#FFF5EE] border-[#FFE5D5]", // Orange/Peach tint
    "bg-[#F0F5FA] border-[#DCE8F5]", // Blue tint
    "bg-[#FAF0FC] border-[#EEDBF5]", // Lavender/Purple tint
    "bg-[#EEFAF4] border-[#D8F3E5]"  // Teal/Green tint
  ];
  const textColors = [
    "text-orange-500/80",
    "text-blue-500/80",
    "text-purple-500/80",
    "text-emerald-500/80"
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full bg-off-white py-16 md:py-20 border-b border-border-light/10"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Capabilities Section Header matching mosey split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <p className="font-body font-bold text-xs uppercase tracking-widest text-forest mb-3">
              Capabilities In-House
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight">
              Advanced Engineering Services
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-8 lg:border-l-2 lg:border-forest/20 flex items-center">
            <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed">
              Industrial-grade B2B design, validation, and agile prototyping capabilities. Filter by industry below to pinpoint how our digital manufacturing ecosystem serves your sector.
            </p>
          </div>
        </div>

        {/* Industry Filter badging */}
        <div className="flex flex-wrap gap-2 mb-16 relative z-20">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setActiveIndustry(industry)}
              className={`px-4 py-1.5 rounded-full font-body text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${activeIndustry === industry
                ? "bg-forest text-off-white shadow-sm"
                : "bg-transparent text-text-primary border border-border-light/60 hover:border-forest"
                }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Services staggered stack */}
        <div className="relative w-full py-8">

          {/* Map-style Dotted Connector Line */}
          <svg
            className="absolute inset-0 w-full h-full hidden md:block z-0 pointer-events-none overflow-visible"
            viewBox="0 0 1000 1200"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="map-trail-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0E4269" />
                <stop offset="50%" stopColor="#A5B7C6" />
                <stop offset="100%" stopColor="#56E5B9" />
              </linearGradient>
            </defs>
            <path
              d="M 250 120 C 550 120, 750 240, 750 420 C 750 580, 450 720, 250 720 C 50 720, 750 860, 750 1020 C 750 1100, 620 1150, 500 1150"
              stroke="url(#map-trail-grad)"
              strokeWidth="5"
              strokeDasharray="1 15"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            {/* Start point indicator */}
            <circle cx="250" cy="120" r="5" fill="#0E4269" />
            <circle cx="250" cy="120" r="12" stroke="#0E4269" strokeWidth="1.5" strokeOpacity="0.4" className="animate-pulse" />
            
            {/* End point indicator */}
            <circle cx="500" cy="1150" r="5" fill="#56E5B9" />
            <circle cx="500" cy="1150" r="12" stroke="#56E5B9" strokeWidth="1.5" strokeOpacity="0.4" className="animate-pulse" />
          </svg>

          {/* Staggered notes stack */}
          <div className="relative z-10 flex flex-col gap-16 md:gap-24 w-full">
            {services.map((service, index) => {
              const isHighlighted = activeIndustry === "All" || service.tags.includes(activeIndustry);
              const sheetBg = sheetBgClasses[index];
              const numColor = textColors[index];
              const sideClass = index % 2 === 0 ? "justify-start" : "justify-end";

              return (
                <div key={service.title} className={`w-full flex ${sideClass} transition-all duration-500`}>
                  
                  {/* Card element */}
                  <div
                    ref={(el) => { cardRefs.current[index] = el; }}
                    className={`relative bg-white p-5 rounded-[24px] shadow-[0_12px_36px_rgba(0,0,0,0.05)] border border-neutral-100 transition-all duration-500 w-full max-w-[650px] ${
                      isHighlighted
                        ? "opacity-100 scale-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:scale-[1.01]"
                        : "opacity-30 scale-95 pointer-events-none filter grayscale-[30%]"
                    }`}
                  >
                    
                    {/* Sheet content wrapper */}
                    <div className={`rounded-[18px] border p-6 flex flex-col md:flex-row gap-6 items-center md:items-start ${sheetBg}`}>
                      
                      {/* Left: Content */}
                      <div className="flex-1 text-left">
                        {/* Number & Subtitle */}
                        <div className="flex justify-between items-start mb-3">
                          <span className={`font-serif italic text-3xl font-bold leading-none ${numColor}`}>
                            0{index + 1}
                          </span>
                          <span className="font-body text-[9px] font-bold uppercase tracking-wider text-text-muted mt-1 bg-white/50 px-2.5 py-0.5 rounded border border-black/5">
                            {service.subtitle}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display font-black text-xl md:text-2xl text-near-black tracking-tight mb-2">
                          {service.title}
                        </h3>

                        {/* Summary */}
                        <p className="font-body text-xs text-text-secondary leading-relaxed mb-6">
                          {service.summary}
                        </p>

                        {/* Specs Grid */}
                        <div className="border-t border-black/10 pt-4 space-y-3">
                          <span className="block font-display font-bold text-[10px] uppercase tracking-wider text-near-black">
                            Technical Specifications
                          </span>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                            {service.specs.map((spec) => (
                              <div key={spec.label} className="flex flex-col border-b border-black/5 pb-1">
                                <span className="font-body text-[8px] font-semibold uppercase tracking-wider text-text-muted">
                                  {spec.label}
                                </span>
                                <span className="font-body text-[11px] font-bold text-text-primary mt-0.5 whitespace-pre-line leading-tight">
                                  {spec.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-5">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-full font-body text-[8px] font-bold uppercase tracking-wider text-forest bg-forest/5 border border-forest/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Technical SVG Illustration Frame */}
                      <div className="w-[170px] h-[170px] rounded-xl bg-white border border-black/5 p-4 flex items-center justify-center shrink-0 self-center shadow-inner relative overflow-hidden">
                        {service.graphic}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Instant Quote Section */}
        <div
          ref={quoteRef}
          id="quote-section"
          className="pt-12 border-t border-border-light/20 scroll-mt-24 mt-8 relative overflow-hidden"
        >
          {/* Decorative background isometric SVGs */}
          <div className="absolute left-[-50px] top-[40%] opacity-20 pointer-events-none hidden xl:block select-none">
            <svg className="w-56 h-56 text-forest" viewBox="0 0 200 200" fill="none">
              <path d="M50 150 L100 120 L150 150 L100 180 Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M50 150 L50 90 L100 60 L150 90 L150 150 L100 180 Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M100 120 L100 180" stroke="currentColor" strokeWidth="1.5" />
              <line x1="50" y1="90" x2="100" y2="120" stroke="currentColor" strokeWidth="1.5" />
              <line x1="150" y1="90" x2="100" y2="120" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="100" cy="90" rx="30" ry="18" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>
          <div className="absolute right-[-50px] top-[30%] opacity-20 pointer-events-none hidden xl:block select-none">
            <svg className="w-56 h-56 text-forest" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M40 100 L160 100" stroke="currentColor" strokeWidth="1" />
              <path d="M100 40 L100 160" stroke="currentColor" strokeWidth="1" />
              <path d="M57.6 57.6 L142.4 142.4" stroke="currentColor" strokeWidth="1" />
              <path d="M57.6 142.4 L142.4 57.6" stroke="currentColor" strokeWidth="1" />
              <polygon points="100,40 142.4,57.6 160,100 142.4,142.4 100,160 57.6,142.4 40,100 57.6,57.6" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="quote-fade-in font-body font-bold text-xs uppercase tracking-widest text-forest mb-3">
              Get Started Instantly
            </p>
            <h2 className="quote-fade-in font-display font-black text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-4 leading-none">
              Custom Manufacturing On Demand
            </h2>
            <p className="quote-fade-in font-body text-base md:text-lg text-text-secondary">
              The platform for everyone from startups to global enterprises
            </p>
          </div>

          {/* Interactive Quote Card */}
          <div className="quote-fade-in max-w-4xl mx-auto">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".step,.stp,.sldprt,.stl,.dxf,.ipt,.x_t,.x_b,.3dxml,.catpart,.prt,.sat,.3mf"
              className="hidden"
            />

            {uploadState === "idle" && (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-[32px] p-12 text-center cursor-pointer transition-all duration-300 ${
                  isDragOver
                    ? "border-forest bg-[#eef5fa] scale-[1.01]"
                    : "border-border-light bg-[#F0F5FA] hover:bg-[#E6F0FA] hover:border-forest/50"
                }`}
              >
                <div className="flex flex-col items-center gap-6">
                  {/* Upload Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md text-forest">
                    <UploadIcon className="w-8 h-8" />
                  </div>

                  <button
                    type="button"
                    className="flex items-center gap-2 bg-[#0E4269] hover:bg-[#071F30] text-white font-body text-sm font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200"
                  >
                    Get an Instant Quote
                  </button>

                  <p className="font-body text-xs text-text-secondary leading-relaxed max-w-md">
                    STEP • STP • SLDPRT • STL • DXF • IPT • X_T • X_B • 3DXML • CATPART • PRT • SAT • 3MF • JT files
                  </p>

                  <div className="flex items-center gap-2 text-[11px] font-bold text-forest bg-forest/5 px-4 py-2 rounded-full border border-forest/10">
                    <LockIcon className="w-3.5 h-3.5" />
                    <span>All uploads are secure and confidential.</span>
                  </div>
                </div>
              </div>
            )}

            {(uploadState === "uploading" || uploadState === "analyzing") && (
              <div className="bg-[#F0F5FA] border border-border-light rounded-[32px] p-12 text-center">
                <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
                  {/* Circular progress loader */}
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#e2e8f0"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#0E4269"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={251.2}
                        strokeDashoffset={251.2 - (251.2 * (uploadState === "uploading" ? progress : 100)) / 100}
                        className="transition-all duration-150"
                      />
                    </svg>
                    <span className="font-display font-bold text-xl text-forest">
                      {uploadState === "uploading" ? `${progress}%` : "100%"}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-near-black">
                      {uploadState === "uploading" ? "Uploading CAD Geometry..." : "Analyzing Part Features..."}
                    </h3>
                    <p className="font-body text-xs text-text-secondary leading-relaxed">
                      {uploadState === "uploading"
                        ? `Sending "${file?.name || "model"}" securely to our analysis cluster...`
                        : "Detecting surfaces, manufacturing volumes, and computing DFM metrics..."}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {uploadState === "success" && file && (
              <div className="bg-white border border-border-light rounded-[32px] p-8 shadow-card-hover flex flex-col lg:flex-row gap-8">
                {/* Left side: CAD part details */}
                <div className="flex-1 bg-[#F5F3EE] rounded-[24px] p-6 border border-border-light/60 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-forest/5 border border-forest/10 flex items-center justify-center text-forest">
                          <FileIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-lg text-near-black truncate max-w-[220px]" title={file.name}>
                            {file.name}
                          </h4>
                          <p className="font-body text-[10px] text-text-secondary">
                            {(file.size / (1024 * 1024)).toFixed(2)} MB • CAD Model
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={handleReset}
                        className="text-text-muted hover:text-red-500 transition-colors p-1.5 rounded-lg hover:bg-red-50"
                        title="Remove file"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Part measurements */}
                    <div className="border-t border-black/5 pt-4 space-y-4">
                      <span className="block font-display font-bold text-[10px] uppercase tracking-wider text-near-black">
                        Simulated CAD Diagnostics
                      </span>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/80 p-3 rounded-xl border border-black/5">
                          <span className="block font-body text-[8px] font-semibold uppercase tracking-wider text-text-muted">
                            Dimensions (X, Y, Z)
                          </span>
                          <span className="font-body text-xs font-bold text-near-black mt-0.5 block">
                            {((file.name.length * 7) % 50 + 50).toFixed(1)} x {((file.name.length * 9) % 50 + 50).toFixed(1)} x {((file.name.length * 3) % 30 + 10).toFixed(1)} mm
                          </span>
                        </div>
                        <div className="bg-white/80 p-3 rounded-xl border border-black/5">
                          <span className="block font-body text-[8px] font-semibold uppercase tracking-wider text-text-muted">
                            Volume
                          </span>
                          <span className="font-body text-xs font-bold text-near-black mt-0.5 block">
                            {((file.name.length * 15) % 150 + 40).toFixed(1)} cm³
                          </span>
                        </div>
                        <div className="bg-white/80 p-3 rounded-xl border border-black/5">
                          <span className="block font-body text-[8px] font-semibold uppercase tracking-wider text-text-muted">
                            Surfaces detected
                          </span>
                          <span className="font-body text-xs font-bold text-near-black mt-0.5 block">
                            {(file.name.length * 4 + 12)} planar / cylindrical
                          </span>
                        </div>
                        <div className="bg-white/80 p-3 rounded-xl border border-black/5">
                          <span className="block font-body text-[8px] font-semibold uppercase tracking-wider text-text-muted">
                            DFM Status
                          </span>
                          <span className="flex items-center gap-1 font-body text-xs font-bold text-emerald-600 mt-0.5">
                            <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                            Ready to manufacture
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-black/5 flex items-center gap-2 text-[10px] text-text-secondary">
                    <LockIcon className="w-3.5 h-3.5" />
                    <span>Confidentiality agreement active</span>
                  </div>
                </div>

                {/* Right side: configurator & pricing */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="font-display font-bold text-2xl text-near-black">
                      Manufacturing Settings
                    </h3>

                    {/* Material Select */}
                    <div className="space-y-2">
                      <label className="block font-body text-xs font-bold uppercase tracking-wider text-text-muted">
                        Select Material
                      </label>
                      <select
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                        className="w-full bg-[#F5F3EE] border border-border-light rounded-xl px-4 py-3 font-body text-sm font-semibold text-near-black focus:outline-none focus:border-forest"
                      >
                        <option value="nylon">Nylon 12 (SLS) - Industrial grade polymers</option>
                        <option value="pla">PLA (FDM) - Fast prototyping</option>
                        <option value="resin">Tough Resin (SLA) - High detail, smooth surface</option>
                        <option value="aluminium">Aluminium 6061-T6 (CNC) - Aerospace grade metal</option>
                        <option value="steel">Stainless Steel 316L (CNC) - High structural integrity</option>
                      </select>
                    </div>

                    {/* Finish Select */}
                    <div className="space-y-2">
                      <label className="block font-body text-xs font-bold uppercase tracking-wider text-text-muted">
                        Surface Finish
                      </label>
                      <select
                        value={finish}
                        onChange={(e) => setFinish(e.target.value)}
                        className="w-full bg-[#F5F3EE] border border-border-light rounded-xl px-4 py-3 font-body text-sm font-semibold text-near-black focus:outline-none focus:border-forest"
                      >
                        <option value="standard">Standard (As Printed / Machined)</option>
                        <option value="beadblast">Bead Blasted (Matte texture)</option>
                        <option value="anodized">Anodized / Polished (Smooth finish)</option>
                      </select>
                    </div>

                    {/* Quantity Selector */}
                    <div className="space-y-2">
                      <label className="block font-body text-xs font-bold uppercase tracking-wider text-text-muted">
                        Quantity
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 rounded-lg bg-[#F5F3EE] border border-border-light flex items-center justify-center font-bold text-near-black hover:bg-[#E6F0FA] transition-colors"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          min="1"
                          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-16 h-10 border border-border-light rounded-lg text-center font-body text-sm font-bold text-near-black bg-[#F5F3EE] focus:outline-none focus:border-forest"
                        />
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 rounded-lg bg-[#F5F3EE] border border-border-light flex items-center justify-center font-bold text-near-black hover:bg-[#E6F0FA] transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="mt-8 border-t border-border-light pt-6 space-y-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="block font-body text-[10px] font-bold uppercase tracking-wider text-text-muted">
                          Estimated Total
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-display font-black text-4xl text-forest">
                            ${totalPrice.toFixed(2)}
                          </span>
                          <span className="font-body text-xs text-text-secondary">USD</span>
                        </div>
                      </div>
                      
                      {/* Shipping details */}
                      <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                        <ClockIcon className="w-4 h-4" />
                        <span>Ships in 3-5 business days</span>
                      </div>
                    </div>

                    {quantity >= 5 && (
                      <div className="bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg border border-emerald-100 flex items-center justify-between">
                        <span>Volume Discount Applied</span>
                        <span>
                          {quantity >= 50 ? "25%" : quantity >= 10 ? "15%" : "10%"} Off
                        </span>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <button
                        onClick={handleReset}
                        className="flex-1 bg-white hover:bg-neutral-50 text-near-black border border-border-light font-body text-xs font-bold py-3 rounded-lg transition-all"
                      >
                        Upload Another
                      </button>
                      <button
                        onClick={() => alert(`Simulating checkout for ${quantity} x ${file.name}`)}
                        className="flex-[2] flex items-center justify-center gap-2 bg-[#0E4269] hover:bg-[#071F30] text-white font-body text-xs font-bold py-3 rounded-lg shadow-md transition-all transform hover:scale-[1.01]"
                      >
                        <span>Configure and Order</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
