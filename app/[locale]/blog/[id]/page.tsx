import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from 'next-intl/server';
import { Button } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "Sustainable Farming Practices in Modern Agriculture",
    content: `
      Sustainable farming practices are becoming increasingly important in modern agriculture. 
      As we face challenges like climate change and growing food demand, farmers are adopting 
      innovative techniques that combine traditional wisdom with modern technology.

      These practices include:
      - Crop rotation and diversification
      - Water conservation methods
      - Integrated pest management
      - Soil health management
      - Renewable energy usage

      By implementing these sustainable practices, farmers can maintain productivity while 
      protecting the environment for future generations.
    `,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80",
    date: "2024-04-10",
  },
  {
    id: 2,
    title: "The Future of Plant-Based Agriculture",
    content: `
      Plant-based agriculture is experiencing rapid growth and innovation. With increasing 
      demand for sustainable food sources, farmers and researchers are developing new 
      approaches to plant-based farming.

      Key developments include:
      - Vertical farming technologies
      - Precision agriculture
      - Plant-based protein innovations
      - Sustainable irrigation systems
      - Smart farming solutions

      These advancements are helping to create a more sustainable and efficient agricultural 
      system.
    `,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80",
    date: "2024-04-08",
  },
  {
    id: 3,
    title: "Quality Standards in Agricultural Exports",
    content: `
      Maintaining high quality standards is crucial in agricultural exports. International 
      markets demand consistent quality and safety in agricultural products.

      Important aspects include:
      - Quality control systems
      - Food safety certifications
      - Traceability measures
      - Storage and transportation standards
      - Documentation and compliance

      Meeting these standards helps ensure market access and customer satisfaction.
    `,
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80",
    date: "2024-04-05",
  },
];

interface BlogPostPageProps {
  params: {
    locale: string;
    id: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPostPage({ params: { locale, id } }: BlogPostPageProps) {
  unstable_setRequestLocale(locale);
  
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-muted-foreground mb-8">
        {new Date(post.date).toLocaleDateString()}
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      <div className="mt-8">
        <Link href={`/${locale}/blog`} className="text-muted-foreground hover:text-foreground">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}