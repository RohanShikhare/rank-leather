import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/types";

type ProductCardProps = {
  category: ProductCategory;
};

export default function ProductCard({ category }: ProductCardProps) {
  return (
    <Link href={`/products/${category.slug}`} className="group overflow-hidden rounded-3xl border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden bg-slate-950">
        <Image src={category.image} alt={category.alt} fill className="object-cover object-center transition duration-700 group-hover:scale-105" />
      </div>
      <div className="space-y-3 p-6">
        <h3 className="text-xl font-semibold tracking-tight text-slate-950">{category.title}</h3>
        <p className="text-sm leading-6 text-slate-600">{category.description}</p>
        <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-red-accent">
          Explore
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
