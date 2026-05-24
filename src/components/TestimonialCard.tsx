import type { Testimonial } from "@/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="group rounded-3xl border border-black/10 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">
      <p className="text-lg leading-9 text-slate-900">“{testimonial.quote}”</p>
      <div className="mt-6 space-y-1 text-sm text-slate-600">
        <p className="font-semibold text-slate-950">{testimonial.name}</p>
        <p>{testimonial.role} — {testimonial.company}</p>
      </div>
    </article>
  );
}
