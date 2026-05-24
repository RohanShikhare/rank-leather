import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { productCategories } from "@/data/categories";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";
import Clients from "@/components/Clients";
import Industries from "@/components/Industries";
import Image from "next/image";
import RankStore from "@/../public/images/rank-store.webp";
import FeaturedProducts from "@/components/FeaturedProducts";

export const metadata = {
  title: "RANK | Premium Leather Store",
  description:
    "RANK is a premium leather brand showcasing bespoke collections, refined product categories, and artisanal craftsmanship.",
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Banner
        title="RANK"
        subtitle="Luxury leather crafted for the quiet collector."
        backgroundImage="/images/hero-banner.svg"
      />

      {/* Who are we */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="space-y-20">
          {/* Intro Paragraph */}
          <div className="flex justify-center">
            <div className="max-w-4xl animate-[fadeIn_1s_ease_forwards] p-2 sm:p-4">
              <p className="font-dm-mono font-semibold text-[12px] uppercase tracking-[0.35em] text-red-accent">
                Who we are
              </p>

              <p className="mt-6 font-zodiak text-[1.6rem] leading-[1.8] text-white sm:text-[1.6rem]">
                RANK is a premium leather manufacturer and seller specializing
                in handcrafted leather goods, corporate gifting products, office
                bags, wallets, travel accessories, folders, and lifestyle
                essentials. Combining craftsmanship with modern functionality,
                we create durable products designed for professionals,
                businesses, and everyday luxury.
              </p>
            </div>
          </div>

          {/* Image + Content */}
          <div className="grid animate-[fadeIn_1.2s_ease_forwards] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left Image */}
            <div className="group relative overflow-hidden rounded-[2rem]">
              <Image
                src={RankStore}
                alt="Premium leather manufacturing and craftsmanship at RANK"
                className="h-[500px] w-full object-fit transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/10" />
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="font-zodiak text-[16px] uppercase tracking-[0.35em] text-red-accent">
                  Premium Craftsmanship
                </p>

                <h2 className="font-dm-mono text-[16px] leading-8 text-white">
                  Leather essentials built for modern businesses and timeless
                  everyday use.
                </h2>
              </div>

              <div className="space-y-6">
                <p className="font-dm-mono text-[16px] leading-8 text-white">
                  From premium office bags and RFID wallets to passport covers,
                  trolley bags, laptop sleeves, folders, gifting sets, and
                  travel accessories, every RANK product is designed with
                  attention to detail, material quality, and long-term
                  durability.
                </p>

                <p className="font-dm-mono text-[16px] leading-8 text-white">
                  Our manufacturing process focuses on combining utility,
                  minimal luxury, and customization — delivering leather and
                  faux leather products that represent professionalism,
                  craftsmanship, and refined design across corporate and
                  lifestyle segments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts productCategories={productCategories} />

      <Clients />

      {/* Testimonials */}
      <section className="border-t border-white/10 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionTitle
            title="Testimonials"
            subtitle="Voices that recognize our refined approach."
          />
          <div className="mt-10 ">
            <TestimonialCard testimonials={testimonials} />
          </div>
        </div>
      </section>

      <Industries />

      {/* Discover RANK */}
      <section className="border-t border-white/10 bg-black py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
          <p className="text-sm uppercase font-semibold tracking-[0.35em] text-red-accent">
            Discover RANK
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Immerse yourself in premium leather design built to endure.
          </h2>
          <Link
            href="/products"
            className="mt-8 inline-flex items-center rounded-full bg-red-accent px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-red-600 hover:shadow-[0_10px_30px_rgba(195,32,31,0.35)]"
          >
            Explore Collections
          </Link>
        </div>
      </section>
    </main>
  );
}
