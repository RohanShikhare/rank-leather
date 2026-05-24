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

export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = productCategories.find((item) => item.slug === params.category);
  return {
    title: category ? `${category.title} | RANK Leather` : "Product Category | RANK Leather",
    description: category ? category.description : "Explore our premium leather categories.",
  };
}

export default function ProductCategoryPage({ params }: { params: { category: string } }) {
  const category = productCategories.find((item) => item.slug === params.category);

  if (!category) {
    notFound();
  }

  const items = productItems.filter((item) => item.category === category.slug);
  const pageUrl = `https://rank-leather.example.com/products/${category.slug}`;

  return (
    <main className="overflow-hidden">
      <Banner
        title="Collection"
        subtitle={category.title}
        backgroundImage={category.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: category.title, href: `/products/${category.slug}` },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <SectionTitle title="Category" subtitle={category.title} />
            <p className="max-w-2xl text-base leading-8 text-slate-600">{category.description}</p>
            <div className="flex flex-wrap gap-3">
              <ShareButtons title={category.title} url={pageUrl} />
            </div>
            <BackButton href="/products" label="Back to Products" />
          </div>

          <div className="grid gap-6">
            {items.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1">
                <div className="relative h-80 bg-slate-950">
                  <Image src={item.image} alt={item.alt} fill className="object-cover object-center" />
                </div>
                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-red-accent">{item.price}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-950">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
