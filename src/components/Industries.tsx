"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

const industries = [
  {
    title: "Corporate Gifting",
    description:
      "Premium leather gifting collections designed for businesses, executive events, employee appreciation, and luxury brand experiences.",
    image: "/images/industry/industry-1.webp",
  },
  {
    title: "Retail & Lifestyle",
    description:
      "Leather accessories and lifestyle essentials crafted for modern retail stores, premium outlets, and curated luxury spaces.",
    image: "/images/industry/industry-2.webp",
  },
  {
    title: "Travel & Hospitality",
    description:
      "Custom travel accessories, folders, organizers, and utility products developed for hospitality and travel-focused brands.",
    image: "/images/industry/industry-3.webp",
  },
  {
    title: "Private Label Manufacturing",
    description:
      "End-to-end leather manufacturing solutions for brands seeking customization, scalability, and premium craftsmanship.",
    image: "/images/industry/industry-4.webp",
  },
];

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section className="bg-[#f4f1eb] py-0 pb-10 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left */}
          <div className="space-y-10 hidden lg:block">
            <SectionTitle title="Industries" subtitle="Sectors we Serve" />

            <div className="relative overflow-hidden rounded-[0.5rem]">
              <Image
                key={industries[activeIndustry].image}
                src={industries[activeIndustry].image}
                alt={industries[activeIndustry].title}
                width={700}
                height={900}
                className="h-[620px] w-full animate-[fadeIn_0.3s_ease] object-cover"
              />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-2 pt-10 lg:pt-20">
            {industries.map((industry, index) => {
              const isActive = activeIndustry === index;

              return (
                <div
                  key={industry.title}
                  className={`border-t py-5 transition-colors duration-300 ${
                    isActive ? "border-black" : "border-black/15"
                  }`}
                >
                  <button
                    onClick={() => setActiveIndustry(index)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span
                      className={`font-dm-mono text-lg sm:text-xl lg:text-[1.9rem] transition-all duration-300 ${
                        isActive
                          ? "text-black"
                          : "text-black/45 hover:text-black/70"
                      }`}
                    >
                      {industry.title}
                    </span>

                    <span
                      className={`flex h-10 w-10 items-center justify-center font-dm-mono text-3xl transition-all duration-300 ${
                        isActive ? "rotate-45 text-black" : "text-black/50"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ${
                      isActive
                        ? "mt-6 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden space-y-5">
                      {/* Mobile Image */}
                      <div className="relative h-[220px] overflow-hidden rounded-[0.5rem] lg:hidden">
                        <Image
                          src={industry.image}
                          alt={industry.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <p className="max-w-xl font-dm-mono text-[14px] leading-8 text-black/60">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
