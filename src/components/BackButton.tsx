import Link from "next/link";

type BackButtonProps = {
  href: string;
  label?: string;
};

export default function BackButton({
  href,
  label = "Back to list",
}: BackButtonProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition hover:border-red-accent hover:text-red-accent sm:px-5 sm:py-3 sm:text-sm"
    >
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:-translate-x-1"
      >
        ←
      </span>

      <span>{label}</span>
    </Link>
  );
}
