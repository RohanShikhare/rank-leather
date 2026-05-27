import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogs";

export const metadata = {
  title: "Blogs | RANK Leather",
  description: "Read insights from the RANK on leather craft, color, and design philosophy.",
};

export default function BlogsPage() {
  return (
    <main className="overflow-hidden bg-white">
      <Banner
        title="Stories"
        subtitle="Stories from the RANK leather studio."
        backgroundImage={{
          desktop: "/images/banner/blog-desktop.webp",
          mobile: "/images/banner/blog-mobile.webp",
        }}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <SectionTitle title="Blogs" subtitle="Read the latest observations from our studio and design practice." />
        <div className="mt-12 grid gap-8 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
