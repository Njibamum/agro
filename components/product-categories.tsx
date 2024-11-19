import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data/categories";
import { products } from "@/lib/data/products";

export function ProductCategories() {
  const categoriesWithProducts = Object.values(categories).map(category => ({
    ...category,
    subcategories: Object.values(products)
      .filter(product => product.categoryPath === category.path)
      .map(product => ({
        name: product.name,
        href: `/products/${category.path}/${product.id}`,
      })),
  }));

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {categoriesWithProducts.map((category) => (
        <Card key={category.id} className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src={Object.values(products).find(p => p.categoryPath === category.path)?.image || ""}
              alt={category.title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>{category.title}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {category.subcategories.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/products/${category.path}`}>View All {category.title}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}