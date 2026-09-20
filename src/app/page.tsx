import Link from "next/link";
import CertBadges from "@/components/CertBadges";
import ContactButtons from "@/components/ContactButtons";
import Icon, { type IconName } from "@/components/Icons";
import IrveIllustration from "@/components/IrveIllustration";
import PhotoSlot from "@/components/PhotoSlot";
import { Container, CtaBand, SectionHeading } from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import { PHOTOS } from "@/lib/photos";

const SERVICES: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "wind",
    title: "Pompes à chaleur",
    text: "Étude, installation et mise en service de votre pompe à chaleur par un artisan certifié RGE QualiPAC.",
  },
  {
    icon: "snow",
    title: "Climatisation",
    text: "Installation de climatisation pour rafraîchir vos pièces de vie, avec un système réversible pour chauffer aussi l’hiver.",
  },
  {
    icon: "flame",
    title: "Chauffage",
    text: "Installation et remplacement de votre système de chauffage, avec des conseils adaptés à votre logement.",
  },
];

const IRVE_POINTS = [
  "Visite technique et devis",
  "Installation par un artisan certifié IRVE",
  "Mise en service et prise en main",
];

const REALISATIONS = [PHOTOS.pompeAChaleur, PHOTOS.climatisation, PHOTOS.borneIrve];

export default function Accueil() {
  return (
    <>
      {/* Héros */}
      <section className="bg-gradient-to-b from-mist to-white">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-red">Montpellier et alentours</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
              Chauffage, climatisation et bornes de recharge à Montpellier
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Attis International installe votre pompe à chaleur, votre climatisation, votre chauffage et votre borne de
              recharge pour véhicule électrique. Artisan certifié RGE et IRVE, garantie décennale.
            </p>
            <ContactButtons size="lg" className="mt-8" />
            <p className="mt-4 text-sm text-muted">
              Ou{" "}
              <Link href="/contact/" className="font-semibold text-navy underline underline-offset-4">
                toutes les façons de nous joindre
              </Link>
              .
            </p>
          </div>
          <PhotoSlot photo={PHOTOS.hero} ratio="4/3" priority />
        </Container>
      </section>

      {/* Certifications */}
      <section className="pb-4">
        <Container>
          <CertBadges />
        </Container>
      </section>

      {/* Services */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Nos services"
            title="Le confort de votre logement, de la chaleur à la recharge"
            intro="Un seul artisan pour vos équipements de chauffage, de climatisation et de recharge électrique."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {SERVICES.map((service) => (
              <li key={service.title} className="rounded-3xl border border-line bg-white p-7 shadow-sm">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon name={service.icon} className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{service.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              href="/chauffage-climatisation/"
              className="inline-flex items-center gap-2 font-semibold text-navy underline-offset-4 hover:underline"
            >
              Voir chauffage et climatisation
              <Icon name="arrow" className="size-4" />
            </Link>
          </p>
        </Container>
      </section>

      {/* Bloc vedette IRVE */}
      <section className="bg-navy-deep py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-cyan/15 px-4 py-1.5 text-sm font-bold text-cyan">
              <Icon name="bolt" className="size-4" />
              Bornes de recharge IRVE
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Votre borne de recharge, installée par un artisan certifié IRVE
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Attis International installe votre borne pour véhicule électrique chez vous, en copropriété ou dans votre
              entreprise, à Montpellier et alentours.
            </p>
            <ul className="mt-6 space-y-3">
              {IRVE_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 text-white">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-cyan text-navy-deep">
                    <Icon name="check" className="size-4" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/bornes-de-recharge-irve/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-base font-semibold text-navy-deep transition-colors hover:bg-amber-dark"
            >
              Découvrir l’installation de bornes
              <Icon name="arrow" className="size-5" />
            </Link>
          </div>
          <IrveIllustration className="mx-auto w-full max-w-sm" />
        </Container>
      </section>

      {/* Réalisations */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Réalisations"
            title="Des installations propres, réalisées par Attis"
            intro="Quelques exemples de chantiers dans la région."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {REALISATIONS.map((photo) => (
              <li key={photo.caption}>
                <PhotoSlot photo={photo} ratio="4/3" sizes="(min-width: 768px) 33vw, 100vw" />
                <p className="mt-3 text-sm font-semibold text-navy">{photo.caption}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Témoignage */}
      <section className="bg-mist py-20">
        <Container>
          <SectionHeading eyebrow="Ils nous font confiance" title="L’avis d’une cliente" align="center" />
          <div className="mt-10">
            <Testimonial />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Un projet de chauffage, de climatisation ou de borne de recharge ?"
        text="Parlez-en directement à Attis : par téléphone, sur WhatsApp ou par e-mail."
      />
    </>
  );
}
