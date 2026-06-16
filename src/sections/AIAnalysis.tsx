import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processes = ["3D Printing", "CNC Machining", "Injection Moulding", "Sheet Metal"];
const materials = [
  "Titanium Ti-6Al-4V",
  "Aluminum 6061",
  "Stainless Steel 316L",
  "PA12 Nylon",
  "ABS",
];

const basePrices: Record<string, number> = {
  "3D Printing": 85,
  "CNC Machining": 120,
  "Injection Moulding": 250,
  "Sheet Metal": 65,
};

const materialMultipliers: Record<string, number> = {
  "Titanium Ti-6Al-4V": 2.5,
  "Aluminum 6061": 1.0,
  "Stainless Steel 316L": 1.8,
  "PA12 Nylon": 0.6,
  ABS: 0.4,
};

function WireframeModel() {
  return (
    <svg viewBox="0 0 300 260" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Base plate */}
      <rect x="20" y="200" width="260" height="40" rx="4" fill="#E8E6E1" stroke="#C0C5CC" strokeWidth="1" />
      {/* Wireframe bracket model */}
      <g stroke="#0E4269" strokeWidth="1.2" fill="none" strokeLinejoin="round">
        {/* Front face */}
        <path d="M80 80 L220 80 L220 180 L180 200 L120 200 L80 180 Z" />
        {/* Back face (offset) */}
        <path d="M95 60 L235 60 L235 160 L195 180 L135 180 L95 160 Z" opacity="0.4" />
        {/* Connecting edges */}
        <line x1="80" y1="80" x2="95" y2="60" opacity="0.4" />
        <line x1="220" y1="80" x2="235" y2="60" opacity="0.4" />
        <line x1="220" y1="180" x2="235" y2="160" opacity="0.4" />
        <line x1="180" y1="200" x2="195" y2="180" opacity="0.4" />
        <line x1="120" y1="200" x2="135" y2="180" opacity="0.4" />
        <line x1="80" y1="180" x2="95" y2="160" opacity="0.4" />
        {/* Internal structure lines */}
        <line x1="150" y1="80" x2="150" y2="200" />
        <line x1="80" y1="130" x2="220" y2="130" />
        {/* Triangular mesh detail */}
        <path d="M150 80 L185 130 L115 130 Z" opacity="0.3" />
        <path d="M150 130 L185 180 L115 180 Z" opacity="0.3" />
        {/* Lattice infill pattern */}
        <g opacity="0.25" strokeWidth="0.8">
          <line x1="100" y1="90" x2="130" y2="120" />
          <line x1="130" y1="90" x2="100" y2="120" />
          <line x1="170" y1="90" x2="200" y2="120" />
          <line x1="200" y1="90" x2="170" y2="120" />
          <line x1="100" y1="140" x2="130" y2="170" />
          <line x1="130" y1="140" x2="100" y2="170" />
          <line x1="170" y1="140" x2="200" y2="170" />
          <line x1="200" y1="140" x2="170" y2="170" />
        </g>
      </g>
      {/* Dimensions */}
      <g fill="#5A5A5A" fontSize="8" fontFamily="Aller, sans-serif">
        <text x="142" y="55">58mm</text>
        <text x="245" y="120" transform="rotate(90, 245, 120)">42mm</text>
      </g>
      {/* Orbit rotation indicator */}
      <circle cx="150" cy="130" r="90" stroke="#C0C5CC" strokeWidth="0.5" strokeDasharray="4 4" fill="none" opacity="0.5" />
      {/* Animation: rotating indicator dot */}
      <circle cx="240" cy="130" r="3" fill="#56E5B9" opacity="0.8">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 150 130"
          to="360 150 130"
          dur="20s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export default function AIAnalysis() {
  const [activeProcess, setActiveProcess] = useState("3D Printing");
  const [material, setMaterial] = useState("Titanium Ti-6Al-4V");
  const [quantity, setQuantity] = useState(10);
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const basePrice = basePrices[activeProcess] || 85;
  const matMultiplier = materialMultipliers[material] || 1;
  const qtyDiscount = quantity > 100 ? 0.6 : quantity > 50 ? 0.75 : quantity > 20 ? 0.85 : 1;
  const pricePerUnit = Math.round(basePrice * matMultiplier * qtyDiscount);
  const totalPrice = pricePerUnit * quantity;

  useGSAP(() => {
    if (!sectionRef.current || !leftRef.current || !rightRef.current) return;

    gsap.from(leftRef.current, {
      x: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });

    gsap.from(rightRef.current, {
      x: 40,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
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
      id="services"
      ref={sectionRef}
      className="w-full bg-off-white py-20 md:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body font-light text-xs uppercase tracking-wider text-forest mb-3">
            Smart Manufacturing
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight">
            AI-Powered Manufacturing Analysis
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Panel — 3D Viewer Mockup */}
          <div ref={leftRef} className="lg:col-span-7">
            <div className="bg-white rounded-xl shadow-card border border-border-light overflow-hidden">
              {/* Mockup Toolbar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border-light bg-off-white/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="font-body text-xs text-text-secondary bg-off-white px-3 py-1 rounded-md">
                  bracket_v3.step
                </span>
                <div className="flex items-center gap-3">
                  <button className="text-text-muted hover:text-text-primary transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="7" cy="7" r="5" />
                      <path d="M11 11L14 14" strokeLinecap="round" />
                    </svg>
                  </button>
                  <button className="text-text-muted hover:text-text-primary transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8 3V13M3 8H13" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Viewer Content */}
              <div className="p-6 md:p-10 bg-gradient-to-br from-off-white to-white">
                <WireframeModel />
              </div>
              {/* Bottom Controls */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-border-light bg-off-white/50">
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 rounded-md bg-white border border-border-light flex items-center justify-center text-text-secondary hover:text-forest transition-colors text-xs font-bold">-</button>
                  <span className="font-body text-xs text-text-secondary">100%</span>
                  <button className="w-7 h-7 rounded-md bg-white border border-border-light flex items-center justify-center text-text-secondary hover:text-forest transition-colors text-xs font-bold">+</button>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-body text-[10px] uppercase tracking-wider text-text-muted">View: Isometric</span>
                  <span className="font-body text-[10px] uppercase tracking-wider text-text-muted">Mesh: 12.4k faces</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel — Quote Calculator */}
          <div ref={rightRef} className="lg:col-span-5">
            <div className="bg-white rounded-xl shadow-card border border-border-light p-6 md:p-8">
              <h3 className="font-display font-bold text-2xl text-text-primary mb-2">
                Instant Quote
              </h3>
              <p className="font-body text-sm text-text-secondary mb-6">
                Upload your CAD file and our AI instantly analyzes
                manufacturability, suggests optimal processes, and generates a
                real-time quote.
              </p>

              {/* Process Selector */}
              <div className="mb-6">
                <label className="font-body font-semibold text-xs uppercase tracking-wider text-text-secondary mb-3 block">
                  Process
                </label>
                <div className="flex flex-wrap gap-2">
                  {processes.map((p) => (
                    <button
                      key={p}
                      onClick={() => setActiveProcess(p)}
                      className={`px-3 py-2 rounded-full font-body text-xs font-medium transition-all duration-200 ${
                        activeProcess === p
                          ? "bg-forest text-off-white"
                          : "bg-off-white text-text-primary border border-border-light hover:border-forest"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Dropdown */}
              <div className="mb-6">
                <label className="font-body font-semibold text-xs uppercase tracking-wider text-text-secondary mb-3 block">
                  Material
                </label>
                <div className="relative">
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full appearance-none bg-off-white border border-border-light rounded-lg px-4 py-3 font-body text-sm text-text-primary focus:outline-none focus:border-forest transition-colors"
                  >
                    {materials.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest pointer-events-none"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 6L8 10L12 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Quantity Slider */}
              <div className="mb-6">
                <label className="font-body font-semibold text-xs uppercase tracking-wider text-text-secondary mb-3 block">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="1000"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="flex-1 h-2 bg-border-light rounded-full appearance-none cursor-pointer accent-forest"
                    style={{
                      accentColor: "#0E4269",
                    }}
                  />
                  <span className="font-display font-bold text-lg text-forest min-w-[60px] text-right">
                    {quantity}
                  </span>
                </div>
              </div>

              {/* Dynamic Price Card */}
              <div className="bg-near-black rounded-xl p-6 mb-6">
                <p className="font-body text-xs text-text-muted uppercase tracking-wider mb-1">
                  Estimated Price
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display font-bold text-3xl text-forest">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="font-body text-xs text-text-muted">
                  ${pricePerUnit} per unit
                </p>
              </div>

              {/* CTA */}
              <button className="w-full py-3.5 rounded-lg font-body font-semibold text-sm text-off-white bg-forest hover:brightness-110 transition-all duration-200">
                Get Detailed Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
