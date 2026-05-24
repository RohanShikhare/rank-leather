import Link from "next/link";

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
          <p className="font-semibold uppercase tracking-[0.35em] text-red-accent">RANK</p>
          <p className="max-w-sm leading-7 text-white/75">
            Premium leather studio combining heritage techniques with modern luxury accessories.
          </p>
          <div className="space-y-2 text-sm text-white/70">
            <p>hello@rankleather.example</p>
            <p>+1 (212) 555-0198</p>
            <p>25 Mercer Street, New York, NY</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-semibold uppercase tracking-[0.35em] text-white">Follow</p>
          <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
            <a href="#" className="transition hover:text-white">Instagram</a>
            <a href="#" className="transition hover:text-white">LinkedIn</a>
            <a href="#" className="transition hover:text-white">Pinterest</a>
            <a href="#" className="transition hover:text-white">Email</a>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-semibold uppercase tracking-[0.35em] text-white">Explore</p>
          <div className="grid gap-3 text-sm text-white/70">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
