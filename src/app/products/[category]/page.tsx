import Image from "next/image";
import { notFound } from "next/navigation";
import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import ShareButtons from "@/components/ShareButtons";
import BackButton from "@/components/BackButton";
import { productCategories } from "@/data/categories";
import { productItems } from "@/data/products";

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;

  const category = productCategories.find(
    (item) => item.slug === categorySlug
  );

  return {
    title: category
      ? `${category.title} | RANK Leather`
      : "Product Category | RANK Leather",

    description: category
      ? category.description
      : "Explore our premium leather categories.",
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;

  const category = productCategories.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    notFound();
  }

  const items = productItems[category.slug] || [];

  const pageUrl = `https://rankleather.in/products/${category.slug}`;

  return (
    <main className="overflow-hidden bg-white">
      <Banner
        title="Collection"
        subtitle={category.title}
        backgroundImage={category.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          {
            label: category.title,
            href: `/products/${category.slug}`,
          },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="space-y-12">
          
          {/* Top Content */}
          <div className="grid gap-12 lg:grid-cols-[0.8fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <SectionTitle
                title="Category"
                subtitle={category.title}
              />

              <p className="max-w-2xl text-xs leading-8 text-slate-600 sm:text-sm lg:text-base">
                {category.description}
              </p>

              <BackButton
                href="/products"
                label="Back to Products"
              />
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-[1.5rem]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw,
                           (max-width: 1024px) 50vw,
                           33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}