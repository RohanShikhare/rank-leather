import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "RANK | Premium Leather & Faux Leather Manufacturer",
  description:
    "RANK manufactures premium handcrafted leather and faux leather goods. Explore our collections of wallets, bags, belts, and corporate gifting solutions.",
  keywords: [
    "leather manufacturer",
    "leather bags",
    "leather wallets",
    "handcrafted leather",
    "corporate gifting",
    "premium leather goods",
    "leather accessories",
    "faux leather products",
  ],
  authors: [
    { name: "RANK Leather", url: "https://rankleather.in" },
  ],
  creator: "RANK Leather",
  publisher: "RANK Leather",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rankleather.in",
    siteName: "RANK Leather",
    title: "RANK | Premium Leather & Faux Leather Manufacturer",
    description:
      "Discover RANK's premium handcrafted leather collections including wallets, bags, belts, and corporate gifting solutions.",
    images: [
      {
        url: "https://rankleather.in/images/banner/home-desktop.webp",
        width: 1200,
        height: 630,
        alt: "RANK Leather Premium Collections",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RANK | Premium Leather & Faux Leather Manufacturer",
    description:
      "Discover RANK's premium handcrafted leather collections including wallets, bags, belts, and corporate gifting solutions.",
    images: ["https://rankleather.in/images/banner/home-desktop.webp"],
    creator: "@rankleather.in",
  },
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Banner
        title="RANK - Leather & Faux Leather Manufacturer."
        subtitle="Premium leather goods built for modern businesses, travel, gifting, and everyday use."
        backgroundImage={{
          desktop: "/images/banner/home-desktop.webp",
          mobile: "/images/banner/home-mobile.webp",
        }}
      />

      {/* Who are we */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-24 sm:px-8 lg:px-12">
        <div className="space-y-20">
          {/* Intro Paragraph */}
          <div className="flex justify-center">
            <div className="max-w-4xl animate-[fadeIn_1s_ease_forwards] p-2 sm:p-4">
              <p className="font-dm-mono font-semibold text-[11px] sm:text-[12px] uppercase tracking-[0.35em] text-red-accent">
                Who we are
              </p>

              <p className="mt-6 font-zodiak text-base sm:text-lg lg:text-[1.6rem] leading-[1.8] text-white">
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
                <p className="font-zodiak text-[14px] sm:text-base lg:text-[16px] uppercase tracking-[0.35em] text-red-accent">
                  Premium Craftsmanship
                </p>

                <h2 className="font-dm-mono text-sm sm:text-base lg:text-[16px] leading-8 text-white">
                  Leather essentials built for modern businesses and timeless
                  everyday use.
                </h2>
              </div>

              <div className="space-y-6">
                <p className="font-dm-mono text-sm sm:text-base lg:text-[16px] leading-8 text-white">
                  From premium office bags and RFID wallets to passport covers,
                  trolley bags, laptop sleeves, folders, gifting sets, and
                  travel accessories, every RANK product is designed with
                  attention to detail, material quality, and long-term
                  durability.
                </p>

                <p className="font-dm-mono text-sm sm:text-base lg:text-[16px] leading-8 text-white hidden md:block ">
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
      <section className="border-t border-white/10 bg-slate-50 py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionTitle
            title="Testimonials"
            subtitle="Voices that recognize our refined approach."
          />
          <div>
            <TestimonialCard testimonials={testimonials} />
          </div>
        </div>
      </section>

      <Industries />

      {/* Discover RANK */}
      <section className="border-t border-white/10 bg-black py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
          <p className="text-xs sm:text-sm uppercase font-semibold tracking-[0.35em] text-red-accent">
            Discover RANK
          </p>
          <h2 className="mt-4 text-xl sm:text-2xl lg:text-4xl font-semibold leading-tight tracking-tight">
            Immerse yourself in premium leather design built to endure.
          </h2>
          <Link
            href="/products"
            className="mt-8 inline-flex items-center rounded-full bg-red-accent px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-red-600 hover:shadow-[0_10px_30px_rgba(195,32,31,0.35)]"
          >
            Explore Collections
          </Link>
        </div>
      </section>
    </main>
  );
}
