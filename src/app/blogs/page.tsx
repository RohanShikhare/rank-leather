import type { Metadata } from "next";
import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Leather Craft & Design Blog | Stories from RANK Studio",
  description:
    "Read expert insights on leather manufacturing, material quality, leather care, and premium craftsmanship from the RANK leather studio.",
  keywords: [
    "leather blog",
    "leather craft",
    "leather care guide",
    "leather manufacturing",
    "premium leather",
    "leather design",
    "leather quality",
    "handcrafted leather",
    "leather artisan",
  ],
  authors: [
    { name: "RANK Leather", url: "https://rankleather.in" },
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rankleather.in/blogs",
    siteName: "RANK Leather",
    title: "Leather Craft & Design Blog | Stories from RANK Studio",
    description:
      "Discover expert insights on leather manufacturing, material quality, and premium craftsmanship from RANK's design studio.",
    images: [
      {
        url: "https://rankleather.in/images/banner/blog-desktop.webp",
        width: 1200,
        height: 630,
        alt: "RANK Leather Blog Stories",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leather Craft & Design Blog | Stories from RANK Studio",
    description:
      "Read expert insights on leather manufacturing, care, and premium craftsmanship from RANK.",
    images: ["https://rankleather.in/images/banner/blog-desktop.webp"],
    creator: "@rankleather.in",
  },
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
