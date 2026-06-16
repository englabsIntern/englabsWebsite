import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  prefix: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { target: 5000, suffix: "+", label: "Projects Delivered", prefix: "" },
  { target: 26, suffix: "+", label: "Global Partners", prefix: "" },
  { target: 98, suffix: "%", label: "Retention Rate", prefix: "" },
];

export default function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    if (!sectionRef.current) return;

    stats.forEach((stat, i) => {
      const el = numberRefs.current[i];
      if (!el) return;

      const obj = { val: 0 };

      gsap.to(obj, {
        val: stat.target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          if (stat.decimals) {
            el.textContent =
              stat.prefix +
              obj.val.toFixed(stat.decimals) +
              stat.suffix;
          } else {
            el.textContent =
              stat.prefix +
              Math.floor(obj.val).toLocaleString() +
              stat.suffix;
          }
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-forest">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border-dark/30">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="flex-1 flex flex-col items-center justify-center py-4 md:py-8"
          >
            <span
              ref={(el) => { numberRefs.current[i] = el; }}
              className="font-display font-bold text-4xl md:text-5xl text-off-white"
            >
              0{stat.suffix}
            </span>
            <span className="font-body font-light text-xs uppercase tracking-wider text-silver mt-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
