import type { ProductCategory } from "@/types";

export const productCategories: ProductCategory[] = [
  {
    slug: "heritage",
    title: "Heritage Collection",
    description: "Timeless leather silhouettes crafted with traditional atelier precision.",
    image: "/images/category-heritage.svg",
    alt: "Heritage Collection leather goods",
  },
  {
    slug: "atelier",
    title: "Atelier Essentials",
    description: "Minimal leather staples designed for refined everyday luxury.",
    image: "/images/category-atelier.svg",
    alt: "Atelier leather essentials",
  },
  {
    slug: "signature",
    title: "Signature Line",
    description: "Limited-edition statement pieces with rich textures and color.",
    image: "/images/category-signature.svg",
    alt: "Signature leather collection",
  },
];
