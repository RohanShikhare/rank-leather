import Image from "next/image";
import type { GalleryImage } from "@/types";

type GalleryGridProps = {
  images: GalleryImage[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {images.map((item) => (
        <div key={item.id} className="group overflow-hidden rounded-3xl border border-black/10 bg-white">
          <div className="relative h-72 overflow-hidden bg-slate-950">
            <Image src={item.image} alt={item.alt} fill className="object-cover object-center transition duration-700 group-hover:scale-105" />
          </div>
          <div className="p-5">
            <p className="text-lg font-semibold text-slate-950">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
