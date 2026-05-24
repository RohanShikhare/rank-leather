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
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent px-4 py-4 sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-white">
        <Link href="/" className="inline-flex items-center gap-3 font-dm-mono text-sm uppercase tracking-[0.35em] text-white">
          <Image src={Rank} alt="RANK logo" width={130} height={40} className="h-auto w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-8 font-dm-mono text-sm uppercase tracking-[0.35em] md:flex">
          {navigation.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-200 ${isActive ? "text-red-accent" : "text-white/80 hover:text-white"} hover:tracking-[0.45em]`}
              >
                {link.label}
              </Link>
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
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
          <nav className="flex flex-col gap-4 font-dm-mono text-sm uppercase tracking-[0.35em] text-white">
            {navigation.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
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
