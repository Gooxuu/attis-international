import type { Metadata } from "next";
import Link from "next/link";
import CertBadges from "@/components/CertBadges";
import ContactButtons from "@/components/ContactButtons";
import Icon from "@/components/Icons";
import PhotoSlot from "@/components/PhotoSlot";
import { Container, CtaBand, SectionHeading } from "@/components/Section";
import { PHOTOS, type Photo } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Chauffage, climatisation et pompe à chaleur à Montpellier",
  description:
    "Installation de pompes à chaleur, de climatisation et de chauffage à Montpellier par Attis International, artisan certifié RGE QualiPAC et QualiPV, garantie décennale.",
  alternates: { canonical: "/chauffage-climatisation/" },
};

const SERVICES: { title: string; text: string; points: string[]; photo: Photo }[] = [
  {
    title: "Pompe à chaleur",
    text: "La pompe à chaleur puise l’énergie présente dans l’air ou dans l’eau pour chauffer votre logement. Attis étudie votre besoin, choisit un matériel adapté, puis assure l’installation et la mise en service.",
    points: [
      "Étude de votre logement et de vos besoins",
      "Choix d’un matériel adapté",
      "Installation et mise en service",
      "Artisan certifié RGE QualiPAC",
    ],
    photo: PHOTOS.pompeAChaleur,
  },
  {
    title: "Climatisation",
    text: "Une climatisation réversible rafraîchit vos pièces l’été et peut aussi chauffer l’hiver. Attis vous conseille sur le nombre et l’emplacement des unités, puis réalise une pose soignée.",
    points: [
      "Choix du nombre et de l’emplacement des unités",
      "Pose soignée et mise en service",
      "Explications sur l’utilisation au quotidien",
    ],
    photo: PHOTOS.climatisation,
  },
  {
    title: "Chauffage",
    text: "Vous installez ou remplacez votre système de chauffage ? Attis vous conseille selon votre logement et prend en charge l’installation de bout en bout.",
    points: ["Conseil selon votre logement", "Installation par un artisan qualifié", "Mise en service et explications"],
    photo: PHOTOS.chauffage,
  },
];

const STEPS = [
  { title: "Vous nous contactez", text: "Par téléphone, WhatsApp ou e-mail, décrivez-nous votre projet." },
  { title: "Visite et conseil", text: "Nous étudions votre logement et vos besoins sur place." },
  { title: "Devis détaillé", text: "Vous recevez une proposition claire, sans mauvaise surprise." },
  { title: "Installation", text: "Nous installons, mettons en service et vous expliquons le fonctionnement." },
];

export default function ChauffageClimatisation() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="Chauffage & Climatisation"
              title="Pompes à chaleur, climatisation et chauffage à Montpellier"
              intro="Attis International installe votre équipement de confort thermique, du conseil à la mise en service. Artisan certifié RGE QualiPAC et QualiPV, garantie décennale."
            />
            <ContactButtons size="lg" className="mt-8" />
          </div>
          <PhotoSlot photo={PHOTOS.chauffage} ratio="4/3" priority />
        </Container>
      </section>

      {SERVICES.map((service, index) => (
        <section key={service.title} className={index % 2 === 0 ? "py-16" : "bg-mist py-16"}>
          <Container className="grid items-center gap-10 lg:grid-cols-2">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <h2 className="font-display text-3xl font-extrabold text-navy">{service.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{service.text}</p>
              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-ink">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-amber text-navy-deep">
                      <Icon name="check" className="size-4" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <PhotoSlot photo={service.photo} ratio="4/3" sizes="(min-width: 1024px) 50vw, 100vw" />
          </Container>
        </section>
      ))}

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Comment ça se passe" title="Un projet en quatre étapes" align="center" />
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step.title} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
                <span className="flex size-10 items-center justify-center rounded-full bg-navy font-display text-lg font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-mist py-20">
        <Container>
          <SectionHeading
            eyebrow="Qualité et garanties"
            title="Un artisan certifié, des travaux garantis"
            intro="Vos travaux sont couverts par la garantie décennale. Notre certification RGE peut vous permettre d’accéder à certaines aides à la rénovation énergétique, selon votre situation."
          />
          <CertBadges className="mt-10" />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-navy-deep p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan">
                <Icon name="bolt" className="size-4" />
                Bornes de recharge IRVE
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-white">Vous roulez en électrique ?</h2>
              <p className="mt-2 text-white/80">Attis installe aussi votre borne de recharge, en tant qu’artisan certifié IRVE.</p>
            </div>
            <Link
              href="/bornes-de-recharge-irve/"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-amber-dark"
            >
              Découvrir les bornes
              <Icon name="arrow" className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Parlons de votre projet de chauffage ou de climatisation"
        text="Contactez directement Attis : par téléphone, sur WhatsApp ou par e-mail."
      />
    </>
  );
}
