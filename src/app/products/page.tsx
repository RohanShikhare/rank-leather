import type { Metadata } from "next";
import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { productCategories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Premium Leather Products | Wallets, Bags & Accessories | RANK",
  description:
    "Shop RANK's premium handcrafted leather collections. Wallets, bags, belts, backpacks, laptop bags, duffel bags, ladies bags, and corporate gifting sets.",
  keywords: [
    "leather wallets",
    "leather bags",
    "leather belts",
    "leather backpacks",
    "laptop bags",
    "duffel bags",
    "leather accessories",
    "premium leather",
    "handcrafted leather",
    "corporate gifting",
  ],
  authors: [
    { name: "RANK Leather", url: "https://rankleather.in" },
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rankleather.in/products",
    siteName: "RANK Leather",
    title: "Premium Leather Products | Wallets, Bags & Accessories | RANK",
    description:
      "Explore RANK's curated collections of premium handcrafted leather products for modern businesses and everyday luxury.",
    images: [
      {
        url: "https://rankleather.in/images/banner/product-desktop.webp",
        width: 1200,
        height: 630,
        alt: "RANK Leather Product Collections",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Leather Products | Wallets, Bags & Accessories | RANK",
    description:
      "Explore RANK's premium handcrafted leather collections including wallets, bags, and accessories.",
    images: ["https://rankleather.in/images/banner/product-desktop.webp"],
    creator: "@rankleather.in",
  },
};

export default function ProductsPage() {
  return (
    <main className="overflow-hidden bg-white">
      <Banner
        title="Our Collections"
        subtitle="Leather categories with depth and distinction."
        backgroundImage={{
          desktop: "/images/banner/product-desktop.webp",
          mobile: "/images/banner/product-mobile.webp",
        }}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <SectionTitle title="Products" subtitle="Select a collection to explore leather crafted with purpose." />
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category) => (
            <ProductCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </main>
  );
}
