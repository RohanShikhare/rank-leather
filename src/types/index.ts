export type Breadcrumb = {
  label: string;
  href: string;
};

export type ProductCategory = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type ProductItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  price: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  alt: string;
  content: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type ClientLogo = {
  id: string;
  name: string;
  logo: string;
  alt: string;
};

export type GalleryImage = {
  id: string;
  title: string;
  image: string;
  alt: string;
};
