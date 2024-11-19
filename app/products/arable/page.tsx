import { ProductList } from "@/components/product-list";

const arableProducts = [
  {
    id: "cereals",
    name: "Cereals",
    description: "High-quality cereals from sustainable farming practices",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80",
  },
  {
    id: "oilseeds",
    name: "Oilseeds",
    description: "Premium oilseeds for various industrial applications",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80",
  },
  {
    id: "vegetable-oils",
    name: "Vegetable Oils",
    description: "Pure vegetable oils from sustainable sources",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80",
  },
  {
    id: "sugar-products",
    name: "Sugar Products",
    description: "Refined sugar products from sustainable sugar cane",
    image: "https://images.unsplash.com/photo-1581384069836-1c4c0857d143?auto=format&fit=crop&q=80",
  },
];

export default function ArableProductsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Arable & Plant-Based Products</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Sustainably grown crops and plant-based products
        </p>
      </div>
      <ProductList products={arableProducts} />
    </div>
  );
}