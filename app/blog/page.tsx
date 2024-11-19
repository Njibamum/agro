import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Sustainable Farming Practices in Modern Agriculture",
    excerpt: "Exploring how modern technology and traditional wisdom combine to create sustainable farming practices.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80",
    date: "2024-04-10",
  },
  {
    id: 2,
    title: "The Future of Plant-Based Agriculture",
    excerpt: "Examining trends and innovations in plant-based farming and their impact on global food security.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80",
    date: "2024-04-08",
  },
  {
    id: 3,
    title: "Quality Standards in Agricultural Exports",
    excerpt: "Understanding the importance of maintaining high quality standards in agricultural exports.",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80",
    date: "2024-04-05",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Insights and updates from Green Agriculture
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Button asChild variant="outline">
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}