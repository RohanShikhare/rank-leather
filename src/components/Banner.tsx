"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { Breadcrumb } from "@/types";

type BannerProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overlay?: string;
  breadcrumbs?: Breadcrumb[];
};

export default function Banner({ title, subtitle, backgroundImage, overlay = "bg-black/70", breadcrumbs = [] }: BannerProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt={title} fill className="object-cover object-center" priority />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-28 pt-24 sm:px-8 lg:px-12 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-5"
        >
          {breadcrumbs.length > 0 ? (
            <nav className="flex flex-wrap gap-3 text-sm text-white/70 font-dm-mono uppercase tracking-[0.35em]" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <span key={crumb.href} className="inline-flex items-center gap-2">
                  <a href={crumb.href} className="transition hover:text-white">
                    {crumb.label}
                  </a>
                  {index < breadcrumbs.length - 1 ? <span className="text-white/40">/</span> : null}
                </span>
              ))}
            </nav>
          ) : null}
          <div className="space-y-6">
            <p className="font-dm-mono text-xs uppercase tracking-[0.45em] text-red-accent">
              {title}
            </p>
            <h1 className="font-zodiak text-5xl leading-tight tracking-[-0.03em] text-white sm:text-6xl md:text-[5.2rem] lg:text-[5.75rem]">
              {subtitle}
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
