"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { Breadcrumb } from "@/types";

type BannerProps = {
  title: string;
  subtitle: string;
  backgroundImage:
    | string
    | {
        desktop: string;
        mobile?: string;
      };
  overlay?: string;
  breadcrumbs?: Breadcrumb[];
};

export default function Banner({
  title,
  subtitle,
  backgroundImage,
  overlay = "bg-black/70",
  breadcrumbs = [],
}: BannerProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        {typeof backgroundImage === "string" ? (
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            className="object-cover object-center"
          />
        ) : (
          <>
            <div className="hidden md:block absolute inset-0">
              <Image
                src={backgroundImage.desktop}
                alt={title}
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="absolute inset-0 md:hidden">
              <Image
                src={backgroundImage.mobile || backgroundImage.desktop}
                alt={title}
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </>
        )}
        <div className={`absolute inset-0 ${overlay}`} />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-18 pt-24 sm:px-8 lg:px-12 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-5"
        >
          {breadcrumbs.length > 0 ? (
            <nav
              className="flex flex-wrap gap-3 text-sm text-white/70 font-dm-mono uppercase tracking-[0.35em]"
              aria-label="Breadcrumb"
            >
              {breadcrumbs.map((crumb, index) => (
                <span
                  key={crumb.href}
                  className="inline-flex items-center gap-2"
                >
                  <a href={crumb.href} className="transition hover:text-white">
                    {crumb.label}
                  </a>
                  {index < breadcrumbs.length - 1 ? (
                    <span className="text-white/40">/</span>
                  ) : null}
                </span>
              ))}
            </nav>
          ) : null}
          <div className="space-y-6">
            <p className="font-semibold animate-[fadeIn_1s_ease_forwards] font-dm-mono text-[10px] md:text-[14px] uppercase tracking-[0.45em]">
              {title}
            </p>
            <h1 className="animate-[fadeIn_1s_ease_forwards] font-zodiak text-[20px] leading-tight tracking-[-0.03em] text-white md:text-[35px] lg:text-[45px]">
              {subtitle}
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
