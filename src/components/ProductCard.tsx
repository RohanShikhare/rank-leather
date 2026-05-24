import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/types";

type ProductCardProps = {
  category: ProductCategory;
};

export default function ProductCard({ category }: ProductCardProps) {
  return (
    <Link href={`/products/${category.slug}`} className="group block">
      <article className="relative overflow-hidden rounded-[2rem]">

        {/* Image */}
        <div className="relative aspect-square bg-black">
          <Image
            src={category.image}
            alt={category.alt}
            height={500}
            width={500}
            className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
          />

          <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/5" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 space-y-4">
          
          <div className="space-y-3">
            <h3 className="line-clamp-1 font-zodiak text-[1.7rem] text-white">
              {category.title}
            </h3>
          </div>

          <span className="inline-flex items-center gap-3 w-fit rounded-full border border-white/15 px-6 py-3 font-dm-mono text-[12px] uppercase tracking-[0.3em] text-white transition-all duration-300 group-hover:border-red-accent group-hover:bg-red-accent group-hover:text-white">
            Explore
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>

        </div>
      </article>
    </Link>
  );
}
