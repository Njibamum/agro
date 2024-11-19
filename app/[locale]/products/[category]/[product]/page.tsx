import { notFound } from "next/navigation";
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductInquiryButton } from "@/components/product-inquiry-button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import Link from "next/link";

export function generateStaticParams() {
  const paths: { category: string; product: string }[] = [];
  
  Object.entries(products).forEach(([productId, product]) => {
    if (categories[product.categoryPath]) {
      paths.push({
        category: product.categoryPath,
        product: productId,
      });
    }
  });

  return paths;
}

interface ProductPageProps {
  params: {
    locale: string;
    category: string;
    product: string;
  };
}

export default function ProductPage({ params: { locale, category, product } }: ProductPageProps) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('products');
  const productData = products[product];
  const categoryData = categories[category];

  if (!productData || !categoryData || productData.categoryPath !== category) {
    notFound();
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = Object.values(products).filter(
    p => p.categoryPath === category && p.id !== product
  ).slice(0, 3);

  return (
    <div className="container py-8 space-y-8">
      <div className="flex items-center gap-2 text-muted-foreground mb-8">
        <Link 
          href={`/${locale}/products/${category}`}
          className="flex items-center gap-2 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {categoryData.title}
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden">
          <Image
            src={productData.image}
            alt={productData.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-4">
              {categoryData.title}
            </Badge>
            <h1 className="text-4xl font-bold mb-4">{productData.name}</h1>
            <p className="text-lg text-muted-foreground">
              {productData.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Key Features:</h3>
            <ul className="space-y-2">
              {productData.specifications?.map((spec, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <ProductInquiryButton product={productData} />
        </div>
      </div>

      {/* Detailed Information */}
      <Tabs defaultValue="overview" className="w-full mt-12">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="overview">{t('product.overview')}</TabsTrigger>
          <TabsTrigger value="specifications">{t('product.specifications')}</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardContent className="p-6">
              <div className="prose prose-neutral dark:prose-invert">
                <p className="text-muted-foreground">{productData.longDescription}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="specifications">
          <Card>
            <CardContent className="p-6">
              <ul className="grid gap-4 sm:grid-cols-2">
                {productData.specifications?.map((spec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{spec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {relatedProduct.description}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/${locale}/products/${category}/${relatedProduct.id}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}