export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  specifications?: string[];
  category: string;
  categoryPath: string;
};

export const products: Record<string, Product> = {
  "beef-veal": {
    id: "beef-veal",
    name: "Beef & Veal",
    description: "Premium quality beef and veal products from sustainable farms",
    longDescription: "Our beef and veal products are sourced from carefully selected farms that prioritize animal welfare and sustainable practices. We ensure the highest quality through rigorous quality control processes and maintain complete traceability from farm to table.",
    image: "https://images.unsplash.com/photo-1551355738-1875c6f6c172?auto=format&fit=crop&q=80",
    specifications: [
      "Premium cuts available",
      "Grass-fed options",
      "Hormone-free",
      "Full traceability",
      "Various aging options",
    ],
    category: "Animal Products",
    categoryPath: "animal",
  },
  "pigmeat": {
    id: "pigmeat",
    name: "Pigmeat",
    description: "High-quality pork products from responsible farming practices",
    longDescription: "Our pork products come from farms that follow strict welfare standards and sustainable farming practices. We offer a wide range of cuts and products, all processed under stringent quality control measures.",
    image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?auto=format&fit=crop&q=80",
    specifications: [
      "Various cuts available",
      "Antibiotic-free options",
      "Ethically raised",
      "Quality graded",
      "Custom processing available",
    ],
    category: "Animal Products",
    categoryPath: "animal",
  },
  "poultry-eggs": {
    id: "poultry-eggs",
    name: "Poultry & Eggs",
    description: "Fresh poultry products and eggs from free-range farms",
    longDescription: "Our poultry products and eggs come from free-range farms where birds have access to outdoor areas and natural light. We maintain strict quality control and freshness standards throughout our supply chain.",
    image: "https://images.unsplash.com/photo-1569288052389-dac9b0ac9eac?auto=format&fit=crop&q=80",
    specifications: [
      "Free-range options",
      "Various poultry types",
      "Fresh and frozen available",
      "Grade A eggs",
      "Organic options",
    ],
    category: "Animal Products",
    categoryPath: "animal",
  },
  "sheep-goat": {
    id: "sheep-goat",
    name: "Sheep & Goat",
    description: "Quality sheep and goat products from sustainable sources",
    longDescription: "We source our sheep and goat products from farms that practice sustainable grazing and maintain high animal welfare standards. Our products are processed and packaged following strict quality guidelines.",
    image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80",
    specifications: [
      "Various cuts available",
      "Grass-fed",
      "Halal options",
      "Quality graded",
      "Seasonal availability",
    ],
    category: "Animal Products",
    categoryPath: "animal",
  },
  "cereals": {
    id: "cereals",
    name: "Cereals",
    description: "High-quality cereals from sustainable farming practices",
    longDescription: "Our cereals are grown using sustainable farming practices that protect soil health and biodiversity. We offer a wide range of grains, all meeting strict quality standards.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80",
    specifications: [
      "Multiple grain varieties",
      "Organic options",
      "Non-GMO available",
      "Quality tested",
      "Bulk quantities available",
    ],
    category: "Arable & Plant-Based Products",
    categoryPath: "arable",
  },
  "oilseeds": {
    id: "oilseeds",
    name: "Oilseeds",
    description: "Premium oilseeds for various industrial applications",
    longDescription: "Our oilseeds are carefully selected and processed to maintain their nutritional value and quality. We work with farmers who follow sustainable agricultural practices.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80",
    specifications: [
      "Various seed types",
      "High oil content",
      "Quality tested",
      "Sustainable sourcing",
      "Bulk quantities available",
    ],
    category: "Arable & Plant-Based Products",
    categoryPath: "arable",
  },
  "vegetable-oils": {
    id: "vegetable-oils",
    name: "Vegetable Oils",
    description: "Pure vegetable oils from sustainable sources",
    longDescription: "Our vegetable oils are extracted and processed using modern techniques that preserve their natural properties. We maintain strict quality control throughout the production process.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80",
    specifications: [
      "Multiple oil types",
      "Cold-pressed options",
      "Organic varieties",
      "Quality certified",
      "Various packaging options",
    ],
    category: "Arable & Plant-Based Products",
    categoryPath: "arable",
  },
  "sugar-products": {
    id: "sugar-products",
    name: "Sugar Products",
    description: "Refined sugar products from sustainable sugar cane",
    longDescription: "Our sugar products are processed from sustainably grown sugar cane. We offer various grades and types of sugar to meet different industrial and consumer needs.",
    image: "https://images.unsplash.com/photo-1581384069836-1c4c0857d143?auto=format&fit=crop&q=80",
    specifications: [
      "Multiple grades available",
      "Various crystal sizes",
      "Specialty sugars",
      "Quality certified",
      "Bulk packaging options",
    ],
    category: "Arable & Plant-Based Products",
    categoryPath: "arable",
  },
};