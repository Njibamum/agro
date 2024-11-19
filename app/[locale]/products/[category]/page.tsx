import { notFound } from "next/navigation";
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
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
    locale: string;
    category: string;
  };
}

export default function CategoryPage({ params: { locale, category } }: CategoryPageProps) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('products');
  const categoryData = categories[category];
  
  if (!categoryData) {
    notFound();
  }

  const categoryProducts = Object.values(products).filter(
    product => product.categoryPath === category
  );

  if (categoryProducts.length === 0) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{t(`categories.${category}.title`)}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t(`categories.${category}.description`)}
        </p>
      </div>
      <ProductList products={categoryProducts} />
    </div>
  );
}