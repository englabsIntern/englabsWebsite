import { useState, useEffect } from "react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "./Icons";

interface SubLink {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  items?: SubLink[];
}

const navLinks: NavLink[] = [
  {
    label: "Services",
    href: "#services",
    items: [
      { label: "3D Scanning", href: "#about" },
      { label: "CAD Design", href: "#about" },
      { label: "Manufacturing Solutions", href: "#about" },
    ],
  },
  {
    label: "Capabilities",
    href: "#about",
    items: [
      { label: "SLS & MJF Production", href: "#about" },
      { label: "Multi-Axis CNC Milling", href: "#about" },
      { label: "3D Metrology & Digitization", href: "#about" },
      { label: "Vacuum & Soft-Molding", href: "#about" },
    ],
  },
  {
    label: "Quote",
    href: "#quote-section",
    items: [
      { label: "CAD Upload Portal", href: "#quote-section" },
      { label: "Dynamic Costing", href: "#quote-section" },
      { label: "Material Diagnostics", href: "#quote-section" },
    ],
  },
  {
    label: "Our Work",
    href: "#case-studies",
    items: [
      { label: "Defense & UAV VTOL", href: "#case-studies" },
      { label: "Medical Imaging", href: "#case-studies" },
      { label: "Precision Robotics", href: "#case-studies" },
      { label: "Digital Twins", href: "#case-studies" },
    ],
  },
  {
    label: "Company",
    href: "#about",
    items: [
      { label: "About Us", href: "#about" },
      { label: "Why Us", href: "#about" },
      { label: "Onboarding Pipeline", href: "#industries" },
    ],
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    setMobileExpandedIndex(null);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMobileParentClick = (e: React.MouseEvent<HTMLButtonElement>, idx: number) => {
    e.preventDefault();
    setMobileExpandedIndex(mobileExpandedIndex === idx ? null : idx);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 bg-white ${scrolled
          ? "shadow-[0_1px_0_rgba(0,0,0,0.05)] border-b border-border-light/20"
          : ""
          }`}
      >
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <a href="" className="flex items-center gap-2">
            <img src="/logo.png" alt="Englabs Logo" className="h-20 w-auto object-contain" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link, idx) => (
              <div
                key={link.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center gap-1 font-body font-semibold text-xs uppercase tracking-wider text-text-primary hover:text-forest transition-colors duration-200 py-4"
                >
                  {link.label}
                  {link.items && (
                    <ChevronDownIcon
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${hoveredIndex === idx ? "rotate-180 text-mint" : "text-text-muted"
                        }`}
                    />
                  )}
                </a>

                {link.items && (
                  <div
                    className={`absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 w-64 bg-white/95 nav-glass border border-border-light rounded-xl shadow-card p-2 flex flex-col gap-1 transition-all duration-200 origin-top z-50 ${hoveredIndex === idx
                      ? "opacity-100 scale-100 visible translate-y-0"
                      : "opacity-0 scale-95 invisible -translate-y-2 pointer-events-none"
                      }`}
                  >
                    {link.items.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        onClick={(e) => handleNavClick(e, subItem.href)}
                        className="font-body text-[11px] uppercase tracking-wider font-bold text-text-secondary hover:text-forest hover:bg-forest/5 rounded-lg px-3 py-2.5 transition-all flex items-center justify-between group/sub"
                      >
                        {subItem.label}
                        <span className="w-1.5 h-1.5 rounded-full bg-mint opacity-0 transition-opacity duration-200 group-hover/sub:opacity-100" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#quote-section"
              onClick={(e) => handleNavClick(e, "#quote-section")}
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-semibold text-xs uppercase tracking-wider text-off-white bg-gradient-to-r from-forest to-near-black hover:brightness-110 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse-dot" />
              Instant Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-off-white pt-24 px-6 lg:hidden overflow-y-auto">
          <div className="flex flex-col gap-4 pb-12">
            {navLinks.map((link, idx) => (
              <div key={link.label} className="border-b border-border-light/60 pb-3">
                <div className="flex items-center justify-between">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-display font-bold text-2xl text-text-primary hover:text-forest"
                  >
                    {link.label}
                  </a>
                  {link.items && (
                    <button
                      onClick={(e) => handleMobileParentClick(e, idx)}
                      className="p-2 text-text-secondary hover:text-forest"
                      aria-label={`Toggle ${link.label} sub-menu`}
                    >
                      <ChevronDownIcon
                        className={`w-6 h-6 transition-transform duration-200 ${mobileExpandedIndex === idx ? "rotate-180 text-mint" : "text-text-muted"
                          }`}
                      />
                    </button>
                  )}
                </div>

                {link.items && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${mobileExpandedIndex === idx ? "max-h-64 mt-2 pl-4" : "max-h-0"
                      }`}
                  >
                    <div className="flex flex-col gap-2 py-1">
                      {link.items.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={(e) => handleNavClick(e, subItem.href)}
                          className="font-body font-semibold text-sm text-text-secondary hover:text-forest py-1.5 block"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a
              href="#quote-section"
              onClick={(e) => handleNavClick(e, "#quote-section")}
              className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-body font-semibold text-base text-off-white bg-forest hover:brightness-110 transition-all shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse-dot" />
              Instant Quote
            </a>
          </div>
        </div>
      )}
    </>
  );
}
