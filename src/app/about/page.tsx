import Image from "next/image";
import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import Clients from "@/components/Clients";
import { productCategories } from "@/data/categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Story from "@/../public/images/story.webp";

export const metadata = {
  title: "About | RANK Leather",
  description:
    "Learn about RANK’s heritage, founders, and design philosophy behind the luxury leather portfolio.",
};

const founders = [
  {
    id: "raju-khade",
    name: "Raju Khade",
    role: "CEO",
    image: "/images/raju-khade.webp",
    description:
      "Founder and visionary behind RANK, leading with a commitment to craftsmanship and material integrity.",
  },
  {
    id: "aditya-khade",
    name: "Aditya Khade",
    role: "CMO",
    image: "/images/aditya-khade.webp",
    description:
      "Leads RANK’s marketing and brand strategy, shaping the narrative of refined luxury and timeless design.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Banner
        title="Behind RANK"
        subtitle="Behind the quiet, refined leather brand."
        backgroundImage="/images/hero-banner.svg"
      />

      {/* story */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="space-y-20">
          {/* Intro Paragraph */}
          <div className="flex justify-center">
            <div className="max-w-4xl animate-[fadeIn_1s_ease_forwards] p-2 sm:p-4">
              <p className="font-dm-mono font-semibold text-[11px] sm:text-[12px] uppercase tracking-[0.35em] text-red-accent">
                Our Story
              </p>

              <p className="mt-6 font-zodiak text-base sm:text-lg lg:text-[1.6rem] leading-[1.8] text-white">
                What began as a small leather manufacturing journey in Mumbai
                evolved into RANK — a brand focused on creating premium leather
                and lifestyle products for modern businesses, travel, gifting,
                and everyday use. Built on craftsmanship, customization, and
                long-term relationships, we continue to manufacture products
                that combine functionality, durability, and refined design
                across leather, faux leather, canvas, and contemporary
                materials.
              </p>
            </div>
          </div>

          {/* Image + Content */}
          <div className="grid animate-[fadeIn_1.2s_ease_forwards] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left Image */}
            <div className="group relative overflow-hidden rounded-[2rem]">
              <Image
                src={Story}
                alt="Premium leather manufacturing and craftsmanship at RANK"
                className="h-[500px] w-full object-fit transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/10" />
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="font-zodiak text-[14px] sm:text-base lg:text-[16px] uppercase tracking-[0.35em] text-red-accent">
                  Craftsmanship Since Day One
                </p>

                <h2 className="font-dm-mono text-sm sm:text-base lg:text-[16px] leading-8 text-white">
                  From handcrafted leather essentials to large-scale customized
                  manufacturing.
                </h2>
              </div>

              <div className="space-y-6">
                <p className="font-dm-mono text-sm sm:text-base lg:text-[16px] leading-8 text-white">
                  Over the years, RANK has expanded from producing classic
                  leather wallets and office bags into a complete manufacturing
                  and customization company offering corporate gifting products,
                  travel accessories, folders, duffel bags, laptop sleeves,
                  passport covers, ladies bags, diaries, and utility essentials
                  for businesses and retail brands.
                </p>

                <p className="font-dm-mono text-sm sm:text-base lg:text-[16px] leading-8 text-white hidden md:block ">
                  Every product is developed with attention to material quality,
                  utility, finishing, and scalability — allowing us to serve
                  corporate clients, retailers, hospitality brands, and private
                  label businesses with products designed for long-term everyday
                  use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* founders */}
      <section className="border-t border-white/10 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionTitle
            title="Founders"
            subtitle="Two voices shaping the RANK story."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {founders.map((founder) => (
              <article
                key={founder.id}
                className="rounded-[2rem] border border-black/10 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1"
              >
                <div className="relative h-[450px] lg:h-[550px] bg-slate-950">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-red-accent">
                    {founder.role}
                  </p>
                  <h3 className="mt-4 text-lg sm:text-xl lg:text-2xl font-semibold text-slate-950">
                    {founder.name}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm lg:text-sm leading-7 text-slate-600">
                    {founder.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Clients />

      <FeaturedProducts productCategories={productCategories} />
    </main>
  );
}
