import { clients } from "@/data/clients";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function Clients() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="space-y-12">
          {/* Heading */}
          <div className="space-y-4">
            <SectionTitle title="Clients" subtitle="Brands that trust us." />
          </div>

          {/* Infinite Slider */}
          <div className="relative overflow-hidden">
            {/* Left Fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />

            {/* Right Fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

            <div className="flex animate-marquee items-center gap-20 whitespace-nowrap">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex h-24 min-w-[180px] items-center justify-center transition-all duration-300 "
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={24}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
