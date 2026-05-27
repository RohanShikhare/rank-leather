import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | RANK Leather",
  description:
    "Contact RANK for studio consultations, bespoke inquiries, and luxury leather collaborations.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">
      <Banner
        title="Contact RANK"
        subtitle="Connect with our studio for bespoke inquiries, product questions, and collaboration opportunities."
        backgroundImage={{
          desktop: "/images/banner/contact-desktop.webp",
          mobile: "/images/banner/contact-mobile.webp",
        }}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <SectionTitle
              title="Contact"
              subtitle="A direct line to RANK’s leather studio and design team."
            />
            <p className="max-w-2xl text-xs sm:text-sm lg:text-base leading-8 text-slate-600">
              Send a message to us with your inquiry and we will follow up with
              details on product, bespoke services, and collaboration
              possibilities.
            </p>
            <div className="space-y-3 rounded-[2rem] border border-black/10 bg-black/5 p-8">
              <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-red-accent">
                Store information
              </p>
              <p className="text-xs sm:text-sm m-0 text-slate-700">
                rank_raju@yahoo.com
              </p>
              <p className="text-xs sm:text-sm m-0 text-slate-700">
                khadeaditya22@gmail.com
              </p>
              <p className="text-xs sm:text-sm m-0 text-slate-700">
                +91 96191 84901
              </p>
              <p className="text-xs sm:text-sm m-0 text-slate-700">
                +91 98691 84901
              </p>
              <p className="text-xs sm:text-sm m-0 text-slate-700">
                5, Laxmibai Dharmaji Chawl, opp. BMC school Kala killa, Dharavi,
                Mumbai, Maharashtra 400017
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-50 py-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionTitle title="Visit the Store" subtitle="" />
          <div className="mt-5 overflow-hidden rounded-[2rem] border border-black/10 shadow-lg">
            <iframe
              title="RANK Leather Location"
              src="https://www.google.com/maps?q=19.048328245881624,72.85989649999277&z=20&output=embed"
              className="h-[280px] sm:h-[350px] lg:h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
