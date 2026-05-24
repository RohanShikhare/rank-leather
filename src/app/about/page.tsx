import Image from "next/image";
import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";
import ClientLogos from "@/components/ClientLogos";
import { clients } from "@/data/clients";
import { galleryImages } from "@/data/gallery";

export const metadata = {
  title: "About | RANK Leather",
  description: "Learn about RANK’s heritage, founders, and design philosophy behind the luxury leather portfolio.",
};

const founders = [
  {
    id: "nolan",
    name: "Nolan Price",
    role: "Creative Founder",
    image: "/images/founder-1.svg",
    description: "Guides the atelier with a precise eye for proportion, texture, and luxury minimalism.",
  },
  {
    id: "marie",
    name: "Marie Keller",
    role: "Design Director",
    image: "/images/founder-2.svg",
    description: "Shapes every collection with refined details and material-led stories.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Banner
        title="Studio"
        subtitle="Behind the quiet, refined leather brand."
        backgroundImage="/images/hero-banner.svg"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="space-y-6">
          <SectionTitle title="Who we are" subtitle="A heritage studio driven by material integrity." />
          <p className="max-w-3xl text-base leading-8 text-slate-600">
            RANK is a premium leather studio with a belief in deliberate design and crafted restraint. We work with select partners to deliver products that feel elegant, authoritative, and intimately considered.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionTitle title="Founders" subtitle="Two voices shaping the RANK story." />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {founders.map((founder) => (
              <article key={founder.id} className="rounded-[2rem] border border-black/10 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1">
                <div className="relative h-72 bg-slate-950">
                  <Image src={founder.image} alt={founder.name} fill className="object-cover object-center" />
                </div>
                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-red-accent">{founder.role}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-950">{founder.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{founder.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <SectionTitle title="Store Gallery" subtitle="A visual portrait of our atelier and store environment." />
        <div className="mt-12">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionTitle title="Clients" subtitle="Collaborations and creative partnerships." />
          <div className="mt-12">
            <ClientLogos logos={clients} />
          </div>
        </div>
      </section>
    </main>
  );
}
