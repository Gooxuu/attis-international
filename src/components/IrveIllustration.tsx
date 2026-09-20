/**
 * Illustration d'une borne murale de recharge (wallbox) et de son câble, à poser sur fond navy foncé.
 * Volontairement générique : ce n'est ni une photo ni un modèle réel de borne.
 */
export default function IrveIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 420" role="img" aria-label="Illustration d’une borne de recharge murale" className={className}>
      <defs>
        <radialGradient id="irve-glow" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#00afd3" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#00afd3" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="irve-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2f3b8f" />
          <stop offset="100%" stopColor="#1b2566" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="180" r="190" fill="url(#irve-glow)" />

      {/* Mur */}
      <rect x="70" y="40" width="260" height="300" rx="28" fill="#ffffff" fillOpacity="0.05" />

      {/* Corps de la borne */}
      <rect x="140" y="70" width="120" height="210" rx="26" fill="url(#irve-body)" stroke="#00afd3" strokeOpacity="0.6" strokeWidth="2" />
      <rect x="160" y="92" width="80" height="62" rx="14" fill="#121942" />
      <path d="M204 100 180 132h16l-4 18 24-32h-16l4-18z" fill="#00afd3" />

      {/* Témoin lumineux */}
      <circle cx="200" cy="186" r="9" fill="#00afd3" />
      <circle cx="200" cy="186" r="15" fill="none" stroke="#00afd3" strokeOpacity="0.35" strokeWidth="2" />

      {/* Support du connecteur */}
      <rect x="172" y="226" width="56" height="30" rx="10" fill="#121942" stroke="#ffffff" strokeOpacity="0.25" />

      {/* Câble et prise */}
      <path d="M200 256 C 200 330, 300 300, 306 366" fill="none" stroke="#d5dbf7" strokeWidth="9" strokeLinecap="round" />
      <rect x="290" y="360" width="34" height="42" rx="10" fill="#f0a22e" />
      <rect x="298" y="402" width="6" height="10" rx="2" fill="#d5dbf7" />
      <rect x="310" y="402" width="6" height="10" rx="2" fill="#d5dbf7" />

      {/* Sol */}
      <path d="M40 414h320" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
