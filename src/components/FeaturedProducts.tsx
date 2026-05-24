"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";
import type { ProductCategory } from "@/types";

type Props = {
  productCategories: ProductCategory[];
};

export default function FeaturedProducts({ productCategories }: Props) {
  const itemsPerView = 3;

  // Clone first items for infinite effect
  const looped = useMemo(() => {
    return [...productCategories, ...productCategories.slice(0, itemsPerView)];
  }, [productCategories]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const maxRealIndex = productCategories.length;

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxRealIndex - 1 : prev - 1));
  };

  // Reset without animation when reaching cloned end
  useEffect(() => {
    if (currentIndex === maxRealIndex) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, maxRealIndex]);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Progress (based on real slides only)
  const progress =
    maxRealIndex === 0
      ? 100
      : ((currentIndex % maxRealIndex) + 1) / maxRealIndex * 100;

  return (
    <section className="border-t border-white/10 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="flex items-end justify-between">
          <SectionTitle
            title="Featured Products"
            subtitle="Discover the categories that define our craft."
          />

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 text-black transition-all duration-300 hover:border-white hover:bg-black hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 text-black transition-all duration-300 hover:border-white hover:bg-black hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="mt-6 relative h-[2px] w-full overflow-hidden bg-black/10">
          <div
            className="absolute left-0 top-0 h-full bg-black transition-all duration-700 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* SLIDER */}
        <div className="mt-12 overflow-hidden">
          <div
            className={`flex ${
              isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * 33.333}%)`,
            }}
          >
            {looped.map((category, index) => (
              <div
                key={`${category.slug}-${index}`}
                className="w-1/3 flex-shrink-0 px-4"
              >
                <ProductCard category={category} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}