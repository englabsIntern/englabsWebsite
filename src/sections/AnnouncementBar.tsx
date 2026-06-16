export default function AnnouncementBar() {
  const tickerText = "Instant DFM Analysis on Upload \u00B7 ISO 9001 Certified \u00B7 48-Hour Lead Time \u00B7 AS9100D Certified \u00B7 ";
  const fullText = tickerText.repeat(4);

  return (
    <div className="w-full h-9 bg-near-black border-b border-border-dark overflow-hidden flex items-center">
      <div className="animate-ticker whitespace-nowrap flex items-center">
        <span className="font-body font-semibold text-[11px] uppercase tracking-wider text-forest">
          {fullText}
        </span>
        <span className="font-body font-semibold text-[11px] uppercase tracking-wider text-forest">
          {fullText}
        </span>
      </div>
    </div>
  );
}
