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
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent px-4 py-4 sm:px-16 sm:py-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-white">
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 font-dm-mono uppercase tracking-[0.35em] text-white"
        >
          <Image src={Rank} alt="RANK logo" width={150} height={65} priority />
        </Link>

        {/* Desktop Nav */}
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative flex h-12 w-12 items-center justify-center md:hidden"
        >
          <span className="relative h-5 w-5">
            {/* Top Line */}
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />

            {/* Middle Line */}
            <span
              className={`absolute left-0 top-[9px] h-[1.5px] w-full bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Bottom Line */}
            <span
              className={`absolute left-0 top-[18px] h-[1.5px] w-full bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-black transition-all duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 py-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <Image src={Rank} alt="RANK logo" width={140} height={60} />

            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setMenuOpen(false)}
              className="relative flex h-12 w-12 items-center justify-center"
            >
              <span className="relative h-5 w-5">
                <span className="absolute left-0 top-[9px] h-[1.5px] w-full rotate-45 bg-white transition-all duration-300" />

                <span className="absolute left-0 top-[9px] h-[1.5px] w-full -rotate-45 bg-white transition-all duration-300" />
              </span>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="my-10 flex flex-col gap-8">
            {navigation.map((link, index) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-zodiak text-[1.5rem] transition-all duration-500 ${
                    isActive
                      ? "translate-x-3 text-red-accent"
                      : "text-white/80 hover:translate-x-3 hover:text-white"
                  }`}
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Section */}
          {/* Bottom Section */}
          <div className="mt-auto space-y-8 pb-4">
            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-6 font-dm-mono text-[12px] uppercase tracking-[0.3em]">
              <a
                href="https://instagram.com/rankleather.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/45 transition-all duration-300 hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://facebook.com/p/RANK-100063776868374/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/45 transition-all duration-300 hover:text-white"
              >
                Facebook
              </a>

              <a
                href="https://wa.me/919619184901"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/45 transition-all duration-300 hover:text-white"
              >
                WhatsApp
              </a>
            </div>

            {/* Address */}
            <a
             href="https://maps.app.goo.gl/YpqVYesUscVpbxXw7"
             target="_blank"
              rel="noopener noreferrer"
              className="block max-w-xs font-dm-mono text-[11px] uppercase leading-6 tracking-[0.2em] text-white/35 transition-colors duration-300 hover:text-white"
            >
              5, Laxmibai Dharmaji Chawl, Opp. BMC School Kala Killa, Dharavi,
              Mumbai 400017
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
