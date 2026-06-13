import type { Product, Stat, Testimonial, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Round Tin Cans",
    category: "Round",
    sizes: ["100ml", "250ml", "500ml", "1L", "2L", "5L"],
    material: "Premium Tin Plate",
    description: "Classic round tin cans engineered for maximum durability and airtight preservation. Ideal for food, paints, and chemicals.",
    image: "https://images.unsplash.com/photo-1609840113-4f57b3d40ef7?w=600&q=80",
    applications: ["Food & Beverages", "Paint & Coatings", "Chemicals"],
  },
  {
    id: "2",
    name: "Rectangular Cans",
    category: "Rectangular",
    sizes: ["500ml", "1L", "2L", "4L", "5L"],
    material: "Electrolytic Tin Plate",
    description: "Space-efficient rectangular cans with superior stacking capability. Perfect for oil, lubricants, and industrial fluids.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    applications: ["Lubricants & Oils", "Industrial Fluids", "Adhesives"],
  },
  {
    id: "3",
    name: "Conical Cans",
    category: "Conical",
    sizes: ["250ml", "500ml", "1L", "2L"],
    material: "Cold Rolled Steel",
    description: "Uniquely shaped conical cans that offer ergonomic handling and premium shelf presence. Ideal for premium products.",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80",
    applications: ["Premium Foods", "Cosmetics", "Gift Packaging"],
  },
  {
    id: "4",
    name: "Paint Cans",
    category: "Industrial",
    sizes: ["500ml", "1L", "2L", "4L", "5L", "10L", "20L"],
    material: "Heavy Gauge Tin Plate",
    description: "Heavy-duty paint cans with reinforced rims and secure lid systems designed to keep contents fresh for extended periods.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    applications: ["Paints", "Varnishes", "Wood Stains"],
  },
  {
    id: "5",
    name: "Spice & Food Cans",
    category: "Food Grade",
    sizes: ["50g", "100g", "250g", "500g", "1kg"],
    material: "Food-Grade Tin Plate",
    description: "Food-grade certified cans with oxygen barrier technology to preserve freshness, aroma, and nutritional value.",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=600&q=80",
    applications: ["Spices", "Dry Foods", "Tea & Coffee"],
  },
  {
    id: "6",
    name: "Chemical Drums",
    category: "Industrial",
    sizes: ["10L", "20L", "25L", "50L"],
    material: "Steel with Coating",
    description: "Industrial-grade containers engineered for safe storage and transport of chemicals, solvents, and hazardous materials.",
    image: "https://images.unsplash.com/photo-1615631648086-325025c9e51e?w=600&q=80",
    applications: ["Chemicals", "Solvents", "Industrial Use"],
  },
];

export const STATS: Stat[] = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "M+", label: "Cans Produced" },
  { value: 99, suffix: "%", label: "Quality Assurance" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Sharma",
    company: "Sharma Foods Ltd.",
    role: "Procurement Head",
    quote: "Vaishnav Cans has been our packaging partner for over 10 years. Their quality is unmatched, and delivery is always on time.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    id: "2",
    name: "Priya Mehta",
    company: "Mehta Paints Corp.",
    role: "Operations Director",
    quote: "The industrial paint cans from Vaishnav are top-notch. Zero leakage, perfect sealing — exactly what our customers expect.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&q=80",
  },
  {
    id: "3",
    name: "Amir Khan",
    company: "AlphaChem Industries",
    role: "Supply Chain Manager",
    quote: "Exceptional quality control and responsive customer service. Vaishnav Cans is our go-to for all chemical container needs.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
];

export const CERTIFICATIONS = [
  "ISO 9001:2015 Certified",
  "BIS Approved",
  "FSSAI Compliant",
  "Export Quality Approved",
];

export const CATEGORIES = [
  "Round Cans", "Rectangular Cans", "Conical Cans",
  "Paint Cans", "Food Grade", "Chemical Drums",
  "Spice Cans", "Oil Containers", "Custom Shapes",
];
