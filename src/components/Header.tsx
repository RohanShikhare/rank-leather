"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Rank from "@/../public/rank.webp";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent px-4 py-4 sm:px-16 sm:py-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-white">
        <Link
          href="/"
          className="inline-flex items-center gap-3 font-dm-mono uppercase tracking-[0.35em] text-white"
        >
          <Image
            src={Rank}
            alt="RANK logo"
            width={150}
            height={45}
            className="h-[25px] w-auto"
            priority
          />
        </Link>

        {/* <nav className="hidden items-center gap-8 font-dm-mono text-[14px] uppercase tracking-[0.35em] md:flex">
          {navigation.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transform transition-all duration-300 ${
                  isActive
                    ? "text-red-accent"
                    : "text-white/80 hover:-translate-y-1 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav> */}

        <nav className="hidden items-center gap-8 font-dm-mono text-[14px] uppercase tracking-[0.35em] md:flex">
          {navigation.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));

            return (
              <div key={link.href} className="group relative overflow-hidden">
                <Link
                  href={link.href}
                  className={`relative block transition-colors duration-300 ${
                    isActive
                      ? "text-red-accent"
                      : "text-white/80 group-hover:text-white"
                  }`}
                >
                  <span className="block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                    {link.label}
                  </span>

                  <span
                    className={`absolute left-0 top-0 block translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${
                      isActive ? "text-red-accent" : "text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="h-5 w-5">
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div className="absolute inset-x-4 top-full z-40 rounded-3xl border border-white/10 bg-black/90 p-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4 font-dm-mono text-[14px] uppercase tracking-[0.35em] text-white">
            {navigation.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-3xl px-4 py-3 transition ${isActive ? "bg-red-accent text-black" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
