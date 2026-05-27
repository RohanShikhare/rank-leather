import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Banner from "@/components/Banner";
import BackButton from "@/components/BackButton";
import { blogPosts } from "@/data/blogs";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | RANK Leather",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  const postUrl = `https://rankleather.in/blogs/${post.slug}`;

  return {
    title: `${post.title} | RANK Leather Blog`,
    description: post.excerpt,
    keywords: [
      "leather",
      "craftsmanship",
      "leather care",
      "leather manufacturing",
      "design",
      post.title.toLowerCase(),
    ],
    authors: [
      { name: "RANK Leather", url: "https://rankleather.in" },
    ],
    creator: "RANK Leather",
    openGraph: {
      type: "article",
      locale: "en_IN",
      url: postUrl,
      siteName: "RANK Leather",
      title: post.title,
      description: post.excerpt,
      publishedTime: new Date(post.date).toISOString(),
      authors: ["RANK Leather"],
      images: [
        {
          url: `https://rankleather.in${post.image}`,
          width: 1200,
          height: 630,
          alt: post.alt,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://rankleather.in${post.image}`],
      creator: "@rankleather.in",
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `https://rankleather.in/blogs/${post.slug}`;

  return (
    <main className="overflow-hidden bg-white">
      <Banner
        title={post.date}
        subtitle={post.title}
        backgroundImage={post.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blogs" },
          {
            label: post.title,
            href: `/blogs/${post.slug}`,
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <article className="space-y-10">
          {/* Featured Image */}
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm">
            <div className="relative h-[280px] bg-slate-950 sm:h-[350px] lg:h-[420px]">
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-red-accent sm:text-sm">
              {post.date}
            </p>

            <h1 className="text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl xl:text-5xl">
              {post.title}
            </h1>

            <div className="space-y-6 text-xs leading-8 text-slate-700 sm:text-sm lg:text-base">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center justify-center">
            <BackButton href="/blogs" label="Back to Blogs" />
          </div>
        </article>
      </section>
    </main>
  );
}
