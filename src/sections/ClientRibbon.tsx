import { useRef } from "react";

const clientLogos = [
  { name: "Bosch", src: "/images/bosch.png" },
  { name: "Bajaj", src: "/images/bajaj.png" },
  { name: "BDL", src: "/images/BDL.png" },
  { name: "Drona Aviation", src: "/images/dronaaviation.png" },
  { name: "Godrej", src: "/images/Godrej.png" },
  { name: "Group SEB", src: "/images/groupseb.png" },
  { name: "HAL", src: "/images/hal.png" },
  { name: "Havells", src: "/images/haveels.png" },
  { name: "Henkel", src: "/images/henkel.png" },
  { name: "INDrone", src: "/images/indron.png" },
  { name: "Larsen & Toubro", src: "/images/larsenand toubro.png" },
  { name: "VinFast", src: "/images/vinfast.png" },
  { name: "Mahindra", src: "/images/mahindra.png" },
  { name: "Noccarc", src: "/images/noccarc.png" },
  { name: "Sonalika", src: "/images/sonalika.png" },
  { name: "Tata Advanced Systems", src: "/images/tataDvanced.png" },
  { name: "Forvia Hella", src: "/images/forvia.png" },
  { name: "ideaForge", src: "/images/ideaForge.png" },
  { name: "Interface", src: "/images/interface.png" },
  { name: "Maharaja", src: "/images/maharaja.png" },
  { name: "Roca", src: "/images/roca.png" },
  { name: "DRDO", src: "/images/drdo.png" },
  { name: "Kangaro", src: "/images/kangaro.png" },
  { name: "Eveready", src: "/images/eveready.png" },
];

export default function ClientRibbon() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden"
      style={{
        background: "#FAFAF8",
        paddingTop: "80px",
        paddingBottom: "80px",
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <style>{`
        .client-card {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 90px;
          padding: 14px 20px;
          
          
          border-radius: 12px;
         
          transition: background 0.25s, box-shadow 0.25s, transform 0.25s;
          cursor: default;
        }
        .client-card:hover {
          background: #ffffff;
         
          transform: translateY(-2px);
          border-color: rgba(14,58,94,0.15);
        }
        .client-card img {
          max-height: 54px;
          max-width: 140px;
          width: auto;
          height: auto;
          object-fit: contain;
          user-select: none;
          pointer-events: none;
          /* drop-shadow outlines even white/transparent logos */
          filter: drop-shadow(0 1px 3px rgba(0,0,0,0.18));
        }
        .client-card:hover img {
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.22));
        }
        .fallback-name {
          font-size: 0.68rem;
          font-weight: 700;
          color: #0E2A45;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          text-align: center;
          line-height: 1.4;
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

        {/* Heading — no GSAP, pure CSS so it's always visible */}
        <div style={{ marginBottom: "48px" }}>
          <p style={{
            color: "#0E3A5E",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}>
            Trusted By Industry Leaders
          </p>
          <h2 style={{
            color: "#0E2A45",
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            textTransform: "uppercase",
          }}>
            Prestigious Clients
          </h2>
        </div>

        {/* Logo grid — no GSAP opacity animation, always visible */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(158px, 1fr))",
          gap: "14px",
        }}>
          {clientLogos.map((logo) => (
            <LogoCard key={logo.name} logo={logo} />
          ))}
        </div>

      </div>
    </section>
  );
}

function LogoCard({ logo }: { logo: { name: string; src: string } }) {
  return (
    <div className="client-card">
      <img
        src={logo.src}
        alt={`${logo.name} logo`}
        onError={(e) => {
          // On load failure: hide the broken img and show the brand name instead
          const target = e.currentTarget;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent && !parent.querySelector(".fallback-name")) {
            const span = document.createElement("span");
            span.className = "fallback-name";
            span.textContent = logo.name;
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );
}