/**
 * Source unique des informations de l'entreprise et des réglages du site.
 * Ne jamais coder en dur un numéro, une adresse ou un drapeau dans un composant.
 */

export const BRAND = "Attis International";

export const PHONE_DISPLAY = "06 22 72 86 82";
export const PHONE_TEL = "tel:+33622728682";
export const EMAIL = "Attisinternational@gmail.com";
export const EMAIL_MAILTO = `mailto:${EMAIL}`;

/** À passer à false si le 06 22 72 86 82 n'est pas sur WhatsApp : le bouton disparaît partout. */
export const WHATSAPP_ENABLED = true;
export const WHATSAPP_URL = `https://wa.me/33622728682?text=${encodeURIComponent(
  "Bonjour, je vous contacte depuis votre site pour un projet.",
)}`;

export const STREET = "55 Rue Floréal";
export const POSTAL_CODE = "34090";
export const CITY = "Montpellier";
export const ADDRESS = `${STREET}, ${POSTAL_CODE} ${CITY}`;
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${ADDRESS}, France`,
)}`;
export const SERVICE_AREA = "Montpellier et alentours";

/** Domaine cible. Pour la démo GitHub Pages, surcharger avec NEXT_PUBLIC_SITE_URL au build. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://attis-international.fr";

/**
 * Mode démonstration (présentation au client) : site non indexé + bandeau « Maquette ».
 * À passer à false à la signature.
 */
export const DEMO_MODE = true;
/** Nom de l'agence affiché dans le bandeau de démo. Vide = bandeau générique. */
export const AGENCY_NAME = "";

/** Sous-chemin GitHub Pages (ex. « /attis-international »), vide sinon. Défini au build. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Préfixe un chemin de `public/` avec le basePath.
 * Nécessaire pour `next/image` et les balises <img>/<link> ; `next/link` s'en occupe seul.
 */
export const asset = (path: string) => `${BASE_PATH}${path}`;

/** Fichier du logo (public/images). Remplacer ici par « logo.svg » quand la version HD/vectorielle est prête. */
export const LOGO_FILE = "/images/logo-source.png";

export const CERTIFICATIONS = [
  { id: "qualipac", label: "RGE QualiPAC", detail: "2024" },
  { id: "qualipv", label: "RGE QualiPV", detail: "2024" },
  { id: "decennale", label: "Garantie décennale", detail: "10 ans" },
  { id: "irve", label: "Certifié IRVE", detail: "Bornes de recharge" },
] as const;

export const NAV_LINKS = [
  { href: "/chauffage-climatisation/", label: "Chauffage & Climatisation" },
  { href: "/bornes-de-recharge-irve/", label: "Bornes de recharge IRVE", highlight: true },
  { href: "/contact/", label: "Contact" },
] as const;
