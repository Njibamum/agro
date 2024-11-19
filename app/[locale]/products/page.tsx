import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ProductCategories } from "@/components/product-categories";

interface ProductsPageProps {
  params: {
    locale: string;
  };
}

export default function ProductsPage({ params: { locale } }: ProductsPageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('products');

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('description')}
        </p>
      </div>
      <ProductCategories />
    </div>
  );
}