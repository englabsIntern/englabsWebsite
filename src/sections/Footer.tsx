import { useState } from "react";
import { LinkedInIcon, TwitterIcon, YouTubeIcon } from "./Icons";

const serviceLinks = [
  "3D Printing",
  "CNC Machining",
  "Injection Moulding",
  "Sheet Metal",
  "3D Scanning",
  "CAD Design",
];

const companyLinks = [
  "About Us",
  "Case Studies",
  "Careers",
  "Contact",
  "Privacy Policy",
];

const certifications = ["ISO 9001", "AS9100D", "ITAR"];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup placeholder
    setEmail("");
  };

  return (
    <footer className="w-full bg-near-black pt-8 md:pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Englabs Logo" className="h-10 w-auto object-contain brightness-200" />
            </div>
            <p className="font-body text-sm text-text-muted mb-4">
              Precision manufacturing, delivered.
            </p>
            <div className="font-body text-[11px] text-text-muted mb-6 space-y-1.5 border-b border-border-dark/40 pb-4">
              <p className="font-bold text-off-white/80 uppercase tracking-wider">Direct Support:</p>
              <p className="hover:text-mint transition-colors">+91 9878 40 7934</p>
              <p className="hover:text-mint transition-colors">+91 8360 84 1498</p>
              <p className="font-bold text-off-white/80 uppercase tracking-wider mt-3">Digital Pipeline:</p>
              <p className="hover:text-mint transition-colors">INFO@ENGLABS.CO.IN</p>
              <p className="hover:text-mint transition-colors">ENQUIRIES@ENGLABS.CO.IN</p>
            </div>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-border-dark rounded-lg px-3 py-2.5 font-body text-sm text-text-muted placeholder:text-text-muted focus:outline-none focus:border-forest transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg font-body font-semibold text-sm text-off-white bg-forest hover:brightness-110 transition-all shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-body font-semibold text-sm text-off-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm text-text-muted hover:text-off-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-body font-semibold text-sm text-off-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm text-text-muted hover:text-off-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications Column */}
          <div>
            <h4 className="font-body font-semibold text-sm text-off-white mb-5">
              Certifications
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 rounded-full font-body text-[10px] font-semibold uppercase tracking-wider text-silver border border-silver/40"
                >
                  {cert}
                </span>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-text-muted hover:text-off-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-off-white transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-off-white transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-dark pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-text-muted">
            © 2025 Englabs. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Cookies"].map((link, i) => (
              <span key={link} className="flex items-center gap-4">
                <a
                  href="#"
                  className="font-body text-xs text-text-muted hover:text-off-white transition-colors"
                >
                  {link}
                </a>
                {i < 2 && <span className="text-border-dark">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
