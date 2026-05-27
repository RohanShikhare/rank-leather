import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { productCategories } from "@/data/categories";

export const metadata = {
  title: "Products | RANK Leather",
  description: "Explore RANK’s premium leather categories and discover curated collections for modern luxury.",
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
