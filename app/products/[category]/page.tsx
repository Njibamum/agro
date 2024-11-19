import { notFound } from "next/navigation";
import { ProductList } from "@/components/product-list";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";

export function generateStaticParams() {
  return Object.keys(categories).map(category => ({
    category,
  }));
}

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories[params.category];
  
  if (!category) {
    notFound();
  }

  const categoryProducts = Object.values(products).filter(
    product => product.categoryPath === params.category
  );

  if (categoryProducts.length === 0) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{category.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{category.description}</p>
      </div>
      <ProductList products={categoryProducts} />
    </div>
  );
}