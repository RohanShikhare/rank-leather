"use client";

type ShareButtonsProps = {
  title: string;
  url: string;
};

const shareLinks = (title: string, url: string) => [
  {
    label: "LinkedIn",
    href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  },
  {
    label: "Twitter",
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
  {
    label: "Copy URL",
    href: url,
    isCopy: true,
  },
];

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const copyLink = async () => {
    if (typeof navigator !== "undefined") {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {shareLinks(title, url).map((link) => (
        <button
          key={link.label}
          type="button"
          onClick={link.isCopy ? copyLink : () => window.open(link.href, "_blank", "noopener,noreferrer")}
          className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-red-accent hover:text-red-accent"
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}
