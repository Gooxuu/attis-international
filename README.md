# Attis International — site vitrine

Site statique (Next.js 16 + Tailwind CSS v4) pour Attis International, chauffage / climatisation /
pompes à chaleur / bornes de recharge IRVE à Montpellier. 4 pages : Accueil, Chauffage &
Climatisation, Bornes de recharge IRVE, Contact.

**Aucun serveur, aucun abonnement, aucun formulaire** : le site se réduit à un dossier de fichiers
statiques (`out/`) qui se dépose sur n'importe quel hébergeur. Le contact se fait par téléphone,
WhatsApp et e-mail.

## Lancer le site en local

```bash
npm install
npm run dev        # http://localhost:3002
npm run build      # génère le site statique dans out/
npm run preview    # sert out/ sur http://localhost:3002
```

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Téléphone, e-mail, adresse, WhatsApp, zone d'intervention, certifications, menu | `src/lib/infos.ts` |
| Ajouter les vraies photos | `src/lib/photos.ts` (voir ci-dessous) |
| Les textes des pages | `src/app/**/page.tsx` |
| Couleurs et polices | `src/app/globals.css` (bloc `@theme`) |
| Le témoignage | `src/components/Testimonial.tsx` |

Aucun numéro ni adresse n'est codé en dur dans un composant : tout vient de `src/lib/infos.ts`.

### Ajouter les vraies photos

1. Déposer les fichiers (WebP ou JPEG, 1600 px de large maximum) dans `public/images/photos/`.
2. Dans `src/lib/photos.ts`, renseigner `src` (ex. `"/images/photos/pac-chantier.webp"`) et un `alt`
   décrivant fidèlement l'image.

Tant que `src` est absent, un cadre de remplacement s'affiche. Rien d'autre à toucher.

### Changer le logo

Le logo actif est `public/images/logo-source.png` (150 × 150 px). Une version
vectorielle redessinée est disponible dans `public/images/logo-redraw.svg`. Pour en changer, modifier
`LOGO_FILE` dans `src/lib/infos.ts`. Si le SVG est adopté, ajuster aussi `width`/`height` dans
`src/components/Logo.tsx` au rapport 964 × 1072.

## Mode démo

`DEMO_MODE` (dans `src/lib/infos.ts`) vaut `true` pendant la phase de présentation : le site est **non indexé**
(`noindex, nofollow` + `robots.txt` en Disallow) et un bandeau « Maquette de démonstration »
s'affiche. `AGENCY_NAME` personnalise le bandeau.

## Déploiement sur GitHub Pages (gratuit)

Le workflow `.github/workflows/deploy.yml` construit et publie le site à chaque push sur `main`.

1. Créer un dépôt GitHub **public** (GitHub Pages gratuit exige un dépôt public), y pousser le code.
2. Dans *Settings → Pages*, choisir **Source : GitHub Actions**.
3. Le site est servi sur `https://<compte>.github.io/<nom-du-dépôt>/`. Le workflow injecte le
   sous-chemin (`NEXT_PUBLIC_BASE_PATH`) tout seul.

**Avec un domaine personnalisé** (ex. `attis-international.fr`) : le site est alors à la racine.
Supprimer les deux variables `NEXT_PUBLIC_BASE_PATH` et `NEXT_PUBLIC_SITE_URL` du workflow, ajouter un
fichier `public/CNAME` contenant le domaine, et déclarer le domaine dans *Settings → Pages*.

**Autre hébergeur** (FTP, Cloudflare Pages…) : lancer `npm run build` et déposer le contenu de `out/`.

## Checklist à la signature

- [ ] `DEMO_MODE = false` dans `src/lib/infos.ts` (retire le bandeau, autorise l'indexation, active le sitemap).
- [ ] **Mentions légales** (raison sociale, forme juridique, SIRET, hébergeur) : obligatoires, non incluses dans la démo.
- [ ] Vraies photos de chantiers dans `src/lib/photos.ts`.
- [ ] Logo haute définition ou version vectorielle validée.
- [ ] Vérifier que le 06 22 72 86 82 est bien sur WhatsApp, sinon `WHATSAPP_ENABLED = false`.
- [ ] Domaine : `SITE_URL` dans `src/lib/infos.ts`, fichier `public/CNAME`, DNS.
- [ ] Relire les textes avec Attis (services proposés, types de clients IRVE, zone d'intervention).
- [ ] Transférer le dépôt sur le compte GitHub du client.

## Notes techniques

- Next.js **16.2** : `output: 'export'` (site statique). Les routes `sitemap.ts` et `robots.ts`
  déclarent `export const dynamic = "force-static"`, sans quoi le build refuse.
- `next/image` en mode `unoptimized` (pas de serveur d'optimisation) : optimiser les photos avant de
  les déposer. `next/link` applique le `basePath` automatiquement ; `next/image` et les balises
  simples non : utiliser `asset()` de `src/lib/infos.ts`.
- Le copyright utilise l'année courante (composant `CurrentYear`).
