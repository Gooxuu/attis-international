import type { Metadata } from "next";
import Link from "next/link";
import ContactButtons from "@/components/ContactButtons";
import Icon, { type IconName } from "@/components/Icons";
import IrveIllustration from "@/components/IrveIllustration";
import PhotoSlot from "@/components/PhotoSlot";
import { Container, CtaBand, SectionHeading } from "@/components/Section";
import { BRAND, SERVICE_AREA, SITE_URL } from "@/lib/infos";
import { PHOTOS } from "@/lib/photos";

const TITLE = "Installateur de bornes de recharge IRVE à Montpellier";
const DESCRIPTION =
  "Installation de bornes de recharge pour véhicules électriques à Montpellier par Attis International, artisan certifié IRVE : maison individuelle, copropriété, entreprise.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/bornes-de-recharge-irve/" },
  // Surcharger openGraph remplace tout le bloc du layout : on redonne donc les champs utiles.
  openGraph: { type: "website", locale: "fr_FR", siteName: BRAND, title: TITLE, description: DESCRIPTION },
};

const PUBLICS: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "pin",
    title: "Maison individuelle",
    text: "Une borne au garage, dans la cour ou sur la façade, pour recharger chez vous chaque nuit.",
  },
  {
    icon: "shield",
    title: "Copropriété",
    text: "Un projet de recharge en parking collectif : Attis vous conseille et chiffre l’installation.",
  },
  {
    icon: "bolt",
    title: "Entreprise",
    text: "Des bornes pour vos véhicules de service, vos salariés ou vos visiteurs.",
  },
];

const INCLUS = [
  "Visite technique et choix de l’emplacement",
  "Vérification de votre installation électrique",
  "Borne adaptée à votre véhicule et à votre usage",
  "Pose, raccordement et protections électriques",
  "Mise en service et explications d’utilisation",
];

const STEPS = [
  { title: "Vous nous contactez", text: "Par téléphone, WhatsApp ou e-mail, avec la marque de votre véhicule si vous l’avez." },
  { title: "Visite technique", text: "Nous repérons l’emplacement et vérifions votre installation électrique." },
  { title: "Devis détaillé", text: "Vous recevez une proposition claire, borne et pose comprises." },
  { title: "Installation", text: "Nous installons la borne, la mettons en service et vous montrons comment l’utiliser." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Installation de bornes de recharge pour véhicules électriques",
  name: TITLE,
  provider: { "@type": "HVACBusiness", name: BRAND, url: SITE_URL },
  areaServed: SERVICE_AREA,
  description: DESCRIPTION,
};

export default function BornesIrve() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* Héros sombre, accent cyan */}
      <section className="bg-navy-deep">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-cyan/15 px-4 py-1.5 text-sm font-bold text-cyan">
              <Icon name="bolt" className="size-4" />
              Certifié IRVE
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Installateur de bornes de recharge à Montpellier
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Attis International installe votre borne de recharge pour véhicule électrique, chez vous, en copropriété ou
              dans votre entreprise. Un artisan certifié IRVE, du conseil à la mise en service.
            </p>
            <ContactButtons tone="dark" size="lg" className="mt-8" />
          </div>
          <IrveIllustration className="mx-auto w-full max-w-sm" />
        </Container>
      </section>

      {/* Pour qui */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Pour qui ?"
            title="Une solution de recharge adaptée à votre situation"
            intro="Que vous soyez particulier ou professionnel, nous étudions l’installation qui correspond à votre usage."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {PUBLICS.map((item) => (
              <li key={item.title} className="rounded-3xl border border-line bg-white p-7 shadow-sm">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-navy-deep text-cyan">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Ce que comprend l'installation */}
      <section className="bg-mist py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="L’installation"
              title="Ce que comprend l’installation de votre borne"
              intro="Une prestation complète, pour que votre borne soit posée proprement et en toute sécurité."
            />
            <ul className="mt-8 space-y-3">
              {INCLUS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-cyan text-navy-deep">
                    <Icon name="check" className="size-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <PhotoSlot photo={PHOTOS.borneIrveHero} ratio="4/3" sizes="(min-width: 1024px) 50vw, 100vw" />
        </Container>
      </section>

      {/* Étapes */}
      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Comment ça se passe" title="Votre borne en quatre étapes" align="center" />
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step.title} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
                <span className="flex size-10 items-center justify-center rounded-full bg-navy-deep font-display text-lg font-extrabold text-cyan">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Certification IRVE */}
      <section className="pb-20">
        <Container>
          <div className="rounded-3xl bg-navy-deep p-8 sm:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
              <span className="flex size-20 items-center justify-center rounded-3xl bg-cyan text-navy-deep">
                <Icon name="bolt" className="size-10" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">Attis International est certifié IRVE</h2>
                <p className="mt-3 text-lg leading-relaxed text-white/80">
                  IRVE signifie « Infrastructure de Recharge pour Véhicules Électriques ». Cette certification atteste de la
                  compétence de l’installateur pour ce type d’installation. Attis la détient, en complément de sa garantie
                  décennale.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-muted">
            Vous cherchez aussi une pompe à chaleur ou une climatisation ?{" "}
            <Link href="/chauffage-climatisation/" className="font-semibold text-navy underline underline-offset-4">
              Découvrez notre offre chauffage et climatisation
            </Link>
            .
          </p>
        </Container>
      </section>

      <CtaBand
        title="Un projet de borne de recharge à Montpellier ?"
        text="Contactez directement Attis : par téléphone, sur WhatsApp ou par e-mail."
      />
    </>
  );
}
