import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    id: 1,
    title: "Designing for SLM: Wall Thickness, Supports, and Orientation Best Practices",
    category: "Design Guide",
    author: "Sarah Chen",
    readTime: "8 min read",
    image: "/images/blog-featured.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "CNC vs 3D Printing: When to Choose Which for Metal Parts",
    category: "Process Guide",
    author: "James Miller",
    readTime: "6 min read",
    image: "/images/blog-cnc.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Titanium Alloys in Aerospace Additive Manufacturing",
    category: "Materials",
    author: "Dr. Aisha Patel",
    readTime: "10 min read",
    image: "/images/blog-titanium.jpg",
    featured: false,
  },
];

export default function TechnicalInsights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const secondaryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!sectionRef.current) return;

    if (featuredRef.current) {
      gsap.from(featuredRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }

    secondaryRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.from(card, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.2 + i * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    });
  }, { scope: sectionRef });

  const featured = articles.find((a) => a.featured);
  const secondary = articles.filter((a) => !a.featured);

  return (
    <section
      ref={sectionRef}
      id="insights"
      className="w-full bg-off-white py-20 md:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-body font-light text-xs uppercase tracking-wider text-forest mb-3">
              Knowledge Hub
            </p>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight">
              Technical Insights
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-1 font-body font-medium text-sm text-forest hover:underline underline-offset-4"
          >
            View all articles
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Featured Article */}
        {featured && (
          <div
            ref={featuredRef}
            className="relative mb-6 rounded-xl overflow-hidden group cursor-pointer"
          >
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Overlapping Text Block */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 max-w-[520px] bg-white rounded-xl p-5 md:p-6 border border-border-light shadow-card">
              <span className="inline-block px-2.5 py-1 rounded-full font-body text-[10px] font-semibold uppercase tracking-wider text-off-white bg-forest mb-3">
                {featured.category}
              </span>
              <h3 className="font-body font-bold text-base md:text-lg text-text-primary leading-snug mb-3 group-hover:underline decoration-forest underline-offset-4">
                {featured.title}
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-forest/20 flex items-center justify-center">
                  <span className="font-body font-semibold text-[10px] text-forest">
                    {featured.author.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <span className="font-body text-xs text-text-secondary">
                  {featured.author}
                </span>
                <span className="text-text-muted">·</span>
                <span className="font-body text-xs text-text-muted">
                  {featured.readTime}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondary.map((article, i) => (
            <div
              key={article.id}
              ref={(el) => { secondaryRefs.current[i] = el; }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 shadow-card">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span className="inline-block px-2.5 py-1 rounded-full font-body text-[10px] font-semibold uppercase tracking-wider text-forest bg-forest/10 mb-2">
                {article.category}
              </span>
              <h3 className="font-body font-bold text-base md:text-lg text-text-primary leading-snug group-hover:underline decoration-forest underline-offset-4">
                {article.title}
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <span className="font-body text-xs text-text-secondary">
                  {article.author}
                </span>
                <span className="text-text-muted">·</span>
                <span className="font-body text-xs text-text-muted">
                  {article.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="md:hidden mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1 font-body font-medium text-sm text-forest hover:underline underline-offset-4"
          >
            View all articles
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
