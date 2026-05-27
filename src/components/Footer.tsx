import Image from "next/image";
import Link from "next/link";
import RankLogo from "@/../public/rank.webp";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.9fr_0.8fr]">
        <div className="space-y-4">
          <Link
            href="https://maps.app.goo.gl/YpqVYesUscVpbxXw7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src={RankLogo}
              alt="RANK Logo"
              className="h-[28px] w-auto object-contain"
            />
          </Link>

          <Link
            href="https://maps.app.goo.gl/YpqVYesUscVpbxXw7"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-sm text-xs sm:text-sm leading-7 text-white/75 transition-colors duration-300 hover:text-white"
          >
            5, Laxmibai Dharmaji Chawl, opp. BMC school Kala killa, Dharavi,
            Mumbai, Maharashtra 400017
          </Link>

          <div className="space-y-2 text-xs sm:text-sm text-white/70">
            <Link
              href="tel:+919619184901"
              className="transition-colors duration-300 hover:text-white"
            >
              +91 96191 84901
            </Link> <br/>
            <Link
              href="tel:+919869184901"
              className="transition-colors duration-300 hover:text-white"
            >
              +91 98691 84901
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-semibold text-xs sm:text-sm uppercase tracking-[0.35em] text-white">
            Follow
          </p>
          <div className="grid gap-3 text-xs sm:text-sm text-white/70">
            <a
              href="https://www.instagram.com/rankleather.in"
              className="transition hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/p/RANK-100063776868374/"
              className="transition hover:text-white"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/919619184901"
              className="transition hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href="mailto:khadeaditya22@gmail.com"
              className="transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-semibold text-xs sm:text-sm uppercase tracking-[0.35em] text-white">
            Explore
          </p>
          <div className="grid gap-3 text-xs sm:text-sm text-white/70">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
