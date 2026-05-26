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

export type ProductImage = {
  id: string;
  image: string;
  alt: string;
};

export type ProductItems = {
  [key: string]: ProductImage[];
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
  company: string;
  quote: string;
};

export type ClientLogo = {
  name: string;
  logo: string;
};


