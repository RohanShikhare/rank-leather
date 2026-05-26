import Image from "next/image";
import { notFound } from "next/navigation";
import Banner from "@/components/Banner";
import BackButton from "@/components/BackButton";
import ShareButtons from "@/components/ShareButtons";
import { blogPosts } from "@/data/blogs";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);
  return {
    title: post ? `${post.title} | RANK Leather` : "Blog | RANK Leather",
    description: post ? post.excerpt : "Read insightful stories from the RANK leather studio.",
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `https://rank-leather.example.com/blogs/${post.slug}`;

  return (
    <main className="overflow-hidden">
      <Banner
        title={post.date}
        subtitle={post.title}
        backgroundImage={post.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blogs" },
          { label: post.title, href: `/blogs/${post.slug}` },
        ]}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <article className="space-y-10">
          <div className="rounded-[2rem] border border-black/10 bg-white overflow-hidden shadow-sm">
            <div className="relative h-[280px] sm:h-[350px] lg:h-[420px] bg-slate-950">
              <Image src={post.image} alt={post.alt} fill className="object-cover object-center" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-red-accent">{post.date}</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight text-slate-950">{post.title}</h1>
            <div className="space-y-6 text-xs sm:text-sm lg:text-base text-slate-700 leading-8">
              {post.content.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-black/10 bg-slate-50 p-6">
            <ShareButtons title={post.title} url={pageUrl} />
            <BackButton href="/blogs" label="Back to Blogs" />
          </div>
        </article>
      </section>
    </main>
  );
}
