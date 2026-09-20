"use client";

/**
 * Année courante calculée dans le navigateur : le copyright ne reste plus jamais bloqué
 * (le site actuel affiche encore 2021). `suppressHydrationWarning` couvre le changement d'année
 * entre le build statique et la visite.
 */
export default function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
