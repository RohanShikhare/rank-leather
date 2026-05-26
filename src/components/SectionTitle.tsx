type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export default function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      <p className="font-dm-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-red-accent">{title}</p>
      <p className="font-zodiak max-w-3xl text-2xl leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
        {subtitle}
      </p>
    </div>
  );
}
