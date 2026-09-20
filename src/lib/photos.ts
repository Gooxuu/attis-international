/**
 * Emplacements photo du site.
 *
 * Tant que `src` est absent, `PhotoSlot` affiche un cadre de remplacement soigné.
 * Pour brancher une vraie photo : déposer le fichier (WebP/JPEG, ~1600 px de large max)
 * dans `public/images/photos/` puis renseigner ici `src: "/images/photos/mon-fichier.webp"`
 * et une description `alt` fidèle à l'image. Aucun autre fichier à modifier.
 */
export type Photo = {
  /** Chemin depuis public/, ex. "/images/photos/pac-chantier.webp". Absent = cadre de remplacement. */
  src?: string;
  /** Description de l'image, lue par les lecteurs d'écran et utile au SEO. */
  alt: string;
  /** Libellé affiché sur le cadre de remplacement et en légende. */
  caption: string;
};

export const PHOTOS = {
  hero: { alt: "Installation réalisée par Attis International", caption: "Installation Attis" },
  pompeAChaleur: { alt: "Pompe à chaleur installée par Attis International", caption: "Pompe à chaleur" },
  climatisation: { alt: "Climatisation installée par Attis International", caption: "Climatisation" },
  chauffage: { alt: "Chauffage installé par Attis International", caption: "Chauffage" },
  borneIrve: { alt: "Borne de recharge installée par Attis International", caption: "Borne de recharge" },
  borneIrveHero: { alt: "Borne de recharge IRVE installée à Montpellier", caption: "Borne de recharge IRVE" },
} satisfies Record<string, Photo>;
