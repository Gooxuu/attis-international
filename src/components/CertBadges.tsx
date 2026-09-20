import Icon from "@/components/Icons";
import { CERTIFICATIONS } from "@/lib/infos";

/** Certifications réelles d'Attis, en badges texte (pas de reproduction des logos officiels). */
export default function CertBadges({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const card =
    tone === "dark"
      ? "border-white/15 bg-white/5 text-white"
      : "border-line bg-white text-navy shadow-sm";
  const detail = tone === "dark" ? "text-white/70" : "text-muted";

  return (
    <ul className={`grid grid-cols-2 gap-3 lg:grid-cols-4 ${className}`}>
      {CERTIFICATIONS.map((cert) => {
        const isIrve = cert.id === "irve";
        return (
          <li key={cert.id} className={`flex items-center gap-3 rounded-2xl border p-4 ${card}`}>
            <span
              className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
                isIrve ? "bg-cyan text-navy-deep" : tone === "dark" ? "bg-white/10 text-amber" : "bg-amber/20 text-navy"
              }`}
            >
              <Icon name={isIrve ? "bolt" : "shield"} className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-bold leading-tight">{cert.label}</span>
              <span className={`block text-xs ${detail}`}>{cert.detail}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
