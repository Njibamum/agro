import { ProductCategories } from "@/components/product-categories";

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover our range of sustainable agricultural products
        </p>
      </div>
      <ProductCategories />
    </div>
  );
}