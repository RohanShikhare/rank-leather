import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | RANK Leather",
  description: "Contact RANK for studio consultations, bespoke inquiries, and luxury leather collaborations.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <Banner
        title="Connect"
        subtitle="Connect with the RANK atelier."
        backgroundImage="/images/hero-banner.svg"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <SectionTitle title="Contact" subtitle="A direct line to RANK’s leather studio and design team." />
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Send a message to our studio with your inquiry and someone from the RANK team will follow up with details on product, bespoke services, and collaboration possibilities.
            </p>
            <div className="space-y-3 rounded-[2rem] border border-black/10 bg-black/5 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-red-accent">Studio information</p>
              <p className="text-sm leading-7 text-slate-700">hello@rankleather.example</p>
              <p className="text-sm leading-7 text-slate-700">+1 (212) 555-0198</p>
              <p className="text-sm leading-7 text-slate-700">25 Mercer Street, New York, NY</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionTitle title="Visit the Atelier" subtitle="Find us in a refined neighborhood with a quiet, curated presence." />
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 shadow-lg">
            <iframe
              title="RANK Atelier Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0070%2C40.7198%2C-73.9980%2C40.7258&layer=mapnik"
              className="h-[420px] w-full border-0"
              loading="lazy"
            />
            <div className="p-6 bg-white text-slate-700">
              <p className="text-sm uppercase tracking-[0.35em] text-red-accent">Map</p>
              <p className="mt-3 text-base leading-7">RANK Atelier is located in an intimate studio setting near downtown, designed for client consultations and bespoke product appointments.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
