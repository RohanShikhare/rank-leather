"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/types";

type TestimonialCardProps = {
  testimonials: Testimonial[];
};

export default function TestimonialCard({
  testimonials,
}: TestimonialCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 12000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const activeTestimonial = testimonials[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-12">
      
      {/* Quote Icon */}
      <div className="font-zodiak text-[7rem] leading-none text-black">
        “
      </div>

      {/* Content */}
      <div
        key={activeIndex}
        className="animate-[fadeIn_0.8s_ease] space-y-10"
      >
        <p className="font-zodiak text-[1.8rem] leading-[1.7] text-black sm:text-[2.2rem]">
          {activeTestimonial.quote}
        </p>

        {/* Progress Bar */}
        <div className="relative h-[2px] w-full overflow-hidden bg-white/20">
          <div className="testimonial-progress absolute left-0 top-0 h-full bg-black" />
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          
          {/* Person */}
          <div className="space-y-1">
            <h4 className="font-dm-mono text-[14px] uppercase tracking-[0.25em] text-black">
              {activeTestimonial.name}
            </h4>

            <p className="font-dm-mono text-[14px] text-black/60">
              {activeTestimonial.company}
            </p>
          </div>

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
      </div>
    </section>
  );
}