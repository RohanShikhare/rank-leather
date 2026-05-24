import Link from "next/link";

type BackButtonProps = {
  href: string;
  label?: string;
};

export default function BackButton({ href, label = "Back to list" }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-red-accent hover:text-red-accent"
    >
      <span aria-hidden="true">←</span>
      {label}
    </Link>
  );
}
