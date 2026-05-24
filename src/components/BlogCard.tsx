import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group overflow-hidden rounded-3xl border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden bg-slate-950">
        <Image src={post.image} alt={post.alt} fill className="object-cover object-center transition duration-700 group-hover:scale-105" />
      </div>
      <div className="space-y-3 p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-red-accent">{post.date}</p>
        <h3 className="text-xl font-semibold tracking-tight text-slate-950">{post.title}</h3>
        <p className="text-sm leading-6 text-slate-600">{post.excerpt}</p>
      </div>
    </Link>
  );
}
