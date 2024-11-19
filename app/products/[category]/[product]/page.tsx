import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";

export function generateStaticParams() {
  const paths: { category: string; product: string }[] = [];
  
  // Generate all valid category/product combinations
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
    category: string;
    product: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.product];
  const category = categories[params.category];

  if (!product || !category || product.categoryPath !== params.category) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg max-w-2xl mx-auto">{product.description}</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">{product.longDescription}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="specifications">
          <Card>
            <CardContent className="p-6">
              <ul className="list-disc pl-6 space-y-2">
                {product.specifications?.map((spec, index) => (
                  <li key={index} className="text-muted-foreground">{spec}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}