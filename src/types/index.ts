export interface Product {
  id: string;
  name: string;
  category: string;
  sizes: string[];
  material: string;
  description: string;
  image: string;
  applications: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface NavLink {
  label: string;
  href: string;
}
