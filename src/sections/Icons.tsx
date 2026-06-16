export function LogoIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M16 8L22 11.5V18.5L16 22L10 18.5V11.5L16 8Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function CloudUploadIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 30H32.82C32.4 30 32.18 29.52 32.44 29.18L33.56 27.5C34.9 25.5 34.3 22.72 32.3 21.38C31.42 20.78 30.36 20.56 29.32 20.72C29.04 17.58 26.42 15.16 23.26 15.16C20.36 15.16 17.88 17.18 17.3 20.02C16.66 19.84 15.98 19.84 15.32 20.02C12.94 20.72 11.54 23.26 12.24 25.64C12.58 26.78 13.36 27.7 14.38 28.22C14.7 28.38 14.84 28.76 14.68 29.08L14.18 30H12C9.24 30 7 32.24 7 35C7 37.76 9.24 40 12 40H36C38.76 40 41 37.76 41 35C41 32.24 38.76 30 36 30Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 24V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 28L24 24L28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BrainAIIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="38" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="38" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="10" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M24 14V18" stroke="currentColor" strokeWidth="2" />
      <path d="M34 24H30" stroke="currentColor" strokeWidth="2" />
      <path d="M24 30V34" stroke="currentColor" strokeWidth="2" />
      <path d="M14 24H18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function CalculatorIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="6" width="32" height="36" rx="3" stroke="currentColor" strokeWidth="2" />
      <line x1="8" y1="16" x2="40" y2="16" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="12" x2="32" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="24" r="2" fill="currentColor" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      <circle cx="32" cy="24" r="2" fill="currentColor" />
      <circle cx="16" cy="32" r="2" fill="currentColor" />
      <circle cx="24" cy="32" r="2" fill="currentColor" />
      <circle cx="32" cy="32" r="2" fill="currentColor" />
      <circle cx="16" cy="40" r="2" fill="currentColor" />
      <circle cx="24" cy="40" r="2" fill="currentColor" />
      <circle cx="32" cy="40" r="2" fill="currentColor" />
    </svg>
  );
}

export function FactoryGearIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M24 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 38V44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 24H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 24H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9.86 9.86L14.1 14.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M33.9 33.9L38.14 38.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9.86 38.14L14.1 33.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M33.9 14.1L38.14 9.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CubeWireframeIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8L56 20V44L32 56L8 44V20L32 8Z" stroke="#1A4A3A" strokeWidth="2" strokeLinejoin="round" />
      <path d="M32 8V32" stroke="#1A4A3A" strokeWidth="1.5" />
      <path d="M32 32L56 20" stroke="#1A4A3A" strokeWidth="1.5" />
      <path d="M32 32L8 20" stroke="#1A4A3A" strokeWidth="1.5" />
      <path d="M32 32V56" stroke="#1A4A3A" strokeWidth="1.5" />
      <path d="M8 20V44" stroke="#1A4A3A" strokeWidth="1" opacity="0.4" />
      <path d="M56 20V44" stroke="#1A4A3A" strokeWidth="1" opacity="0.4" />
      <path d="M32 56L8 44" stroke="#1A4A3A" strokeWidth="1" opacity="0.4" />
      <path d="M32 56L56 44" stroke="#1A4A3A" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export function CompassIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="24" stroke="#1A4A3A" strokeWidth="2" />
      <circle cx="32" cy="32" r="2" fill="#1A4A3A" />
      <path d="M32 12V16" stroke="#1A4A3A" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 48V52" stroke="#1A4A3A" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 32H16" stroke="#1A4A3A" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 32H52" stroke="#1A4A3A" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 18L26 46" stroke="#1A4A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="38" cy="18" r="3" stroke="#1A4A3A" strokeWidth="1.5" />
      <circle cx="26" cy="46" r="3" stroke="#1A4A3A" strokeWidth="1.5" />
    </svg>
  );
}

export function CNCGearIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="12" stroke="#1A4A3A" strokeWidth="2" />
      <circle cx="32" cy="32" r="6" stroke="#1A4A3A" strokeWidth="2" />
      <path d="M32 8V14" stroke="#1A4A3A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 50V56" stroke="#1A4A3A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 32H14" stroke="#1A4A3A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 32H56" stroke="#1A4A3A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M15.03 15.03L19.27 19.27" stroke="#1A4A3A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M44.73 44.73L48.97 48.97" stroke="#1A4A3A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M15.03 48.97L19.27 44.73" stroke="#1A4A3A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M44.73 19.27L48.97 15.03" stroke="#1A4A3A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 2H38" stroke="#1A4A3A" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 62H38" stroke="#1A4A3A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8333 2.5C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333ZM15.4167 15.4167V10.7C15.4167 10.0217 15.1472 9.37155 14.6694 8.89372C14.1916 8.41588 13.5415 8.14633 12.8633 8.14633C12.2 8.14633 11.4167 8.52 11.0167 9.12V8.27H8.85333V15.4167H11.0167V11.04C11.0167 10.4467 11.4967 9.96333 12.09 9.96333C12.3755 9.96333 12.6495 10.0767 12.8522 10.2794C13.0549 10.4822 13.1683 10.7561 13.1683 11.0417V15.4167H15.4167ZM5.73 6.95333C6.05667 6.95333 6.36967 6.82357 6.60214 6.5911C6.83462 6.35862 6.96433 6.04565 6.96433 5.71833C6.96433 5.03333 6.415 4.48333 5.73 4.48333C5.40062 4.48333 5.08496 4.61418 4.85078 4.84836C4.61661 5.08254 4.48583 5.39817 4.48583 5.7275C4.48583 6.4125 5.035 6.95333 5.73 6.95333ZM6.81 15.4167V8.27H4.65667V15.4167H6.81Z" />
    </svg>
  );
}

export function TwitterIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.27 2.5H17.75L12.19 8.89L18.78 17.5H13.71L9.73 12.26L5.17 17.5H2.68L8.66 10.66L2.33 2.5H7.53L11.09 7.29L15.27 2.5ZM14.39 15.85H15.84L6.76 4.06H5.2L14.39 15.85Z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3 5.65C18.1 4.85 17.48 4.23 16.68 4.03C15.32 3.68 10 3.68 10 3.68C10 3.68 4.68 3.68 3.32 4.03C2.52 4.23 1.9 4.85 1.7 5.65C1.35 7.01 1.35 10 1.35 10C1.35 10 1.35 12.99 1.7 14.35C1.9 15.15 2.52 15.77 3.32 15.97C4.68 16.32 10 16.32 10 16.32C10 16.32 15.32 16.32 16.68 15.97C17.48 15.77 18.1 15.15 18.3 14.35C18.65 12.99 18.65 10 18.65 10C18.65 10 18.65 7.01 18.3 5.65ZM8.35 12.85V7.15L12.95 10L8.35 12.85Z" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HamburgerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
