import { ProductList } from "@/components/product-list";

const animalProducts = [
  {
    id: "beef-veal",
    name: "Beef & Veal",
    description: "Premium quality beef and veal products from sustainable farms",
    image: "https://images.unsplash.com/photo-1551355738-1875c6f6c172?auto=format&fit=crop&q=80",
  },
  {
    id: "pigmeat",
    name: "Pigmeat",
    description: "High-quality pork products from responsible farming practices",
    image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?auto=format&fit=crop&q=80",
  },
  {
    id: "poultry-eggs",
    name: "Poultry & Eggs",
    description: "Fresh poultry products and eggs from free-range farms",
    image: "https://images.unsplash.com/photo-1569288052389-dac9b0ac9eac?auto=format&fit=crop&q=80",
  },
  {
    id: "sheep-goat",
    name: "Sheep & Goat",
    description: "Quality sheep and goat products from sustainable sources",
    image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80",
  },
];

export default function AnimalProductsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Animal Products</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Premium quality meat and animal products sourced responsibly
        </p>
      </div>
      <ProductList products={animalProducts} />
    </div>
  );
}