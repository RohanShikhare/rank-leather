import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import ClientLogos from "@/components/ClientLogos";
import TestimonialCard from "@/components/TestimonialCard";
import { productCategories } from "@/data/categories";
import { clients } from "@/data/clients";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";

export const metadata = {
  title: "RANK | Luxury Leather Portfolio",
  description: "RANK is a premium leather brand showcasing bespoke collections, refined product categories, and artisanal craftsmanship.",
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Banner
        title="RANK"
        subtitle="Luxury leather crafted for the quiet collector."
        backgroundImage="/images/hero-banner.svg"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-red-accent">Who we are</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              RANK is the expression of premium leather discipline.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We create considered leather essentials and limited-edition statement pieces with a calm aesthetic and impeccable presence. Each collection is built for longevity, composition, and understated luxury.
            </p>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-black/5 p-8 text-slate-700 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-red-accent">Studio ethos</p>
            <ul className="mt-6 space-y-4 text-sm leading-7">
              <li>Hand-selected full-grain leather with precision finishes.</li>
              <li>Minimal silhouettes grounded by luxury detailing.</li>
              <li>Products made to feel thoughtful, confident, and essential.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionTitle title="Featured Products" subtitle="Discover the categories that define our craft." />
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => (
              <ProductCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-4">
            <SectionTitle title="Clients" subtitle="Trusted by premium brands and creative partners." />
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Our leather collections are included in editorial showcases, studio collaborations, and private flagship residencies across the city.
            </p>
          </div>
          <ClientLogos logos={clients} />
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionTitle title="Testimonials" subtitle="Voices that recognize our refined approach." />
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4">
            <SectionTitle title="Industries Served" subtitle="A premium portfolio for elevated environments." />
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              RANK supplies exclusive products for luxury retail, interior design studios, private label experiences, and bespoke gifting programs.
            </p>
          </div>
          <div className="space-y-4 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">Design Residencies</h3>
            <p className="text-sm leading-7 text-slate-600">Curated leather products for interior and styling collaborations.</p>
          </div>
          <div className="space-y-4 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">Private Bespoke</h3>
            <p className="text-sm leading-7 text-slate-600">Bespoke services for collectors seeking unique leather statements.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
          <p className="text-sm uppercase tracking-[0.35em] text-red-accent">Discover RANK</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Immerse yourself in premium leather design built to endure.
          </h2>
          <Link href="/products" className="mt-8 inline-flex rounded-full bg-red-accent px-8 py-4 text-sm font-semibold text-black transition hover:bg-red-600">
            Explore Collections
          </Link>
        </div>
      </section>
    </main>
  );
}
