"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Shield,
  Globe,
  Award,
  Leaf,
  Users,
  Sprout,
  TreeDeciduous,
} from "lucide-react";
import { products } from "@/lib/data/products";

const stats = [
  { value: "25+", label: "years", key: "years" },
  { value: "12", label: "products", key: "products" },
  { value: "30+", label: "countries", key: "countries" },
  { value: "1000+", label: "farmers", key: "farmers" },
];

export function HomePage() {
  const t = useTranslations('home');
  const locale = useLocale();

  const featuredProducts = Object.values(products).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
            alt={t('hero.title')}
            fill
            className="object-cover transform scale-105 motion-safe:animate-subtle-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        </div>
        <div className="container relative z-10 flex h-full min-h-[85vh] flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {t('hero.title')} <br /> {t('hero.subtitle')}
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl">
            {t('hero.description')}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              <Link href={`/${locale}/products`}>
                {t('hero.exploreButton')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href={`/${locale}/about`}>{t('hero.learnMoreButton')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-50 dark:bg-green-950/30">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{t('stats.title')}</h2>
            <p className="text-muted-foreground">{t('stats.description')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.key} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{t(`stats.${stat.key}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{t('products.title')}</h2>
            <p className="text-muted-foreground">{t('products.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/${locale}/products/${product.categoryPath}/${product.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href={`/${locale}/products`}>
                {t('products.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white dark:from-green-950/30 dark:to-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{t('sustainability.title')}</h2>
            <p className="text-muted-foreground">{t('sustainability.description')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-transparent border-none shadow-none">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>{t('sustainability.environmental.title')}</CardTitle>
                <CardDescription>
                  {t('sustainability.environmental.description')}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-transparent border-none shadow-none">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>{t('sustainability.social.title')}</CardTitle>
                <CardDescription>
                  {t('sustainability.social.description')}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-transparent border-none shadow-none">
              <CardHeader>
                <Sprout className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>{t('sustainability.innovation.title')}</CardTitle>
                <CardDescription>
                  {t('sustainability.innovation.description')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="mb-8 text-green-50">{t('cta.description')}</p>
          <Button asChild size="lg" variant="outline" className="bg-white hover:bg-green-50 text-green-600 border-white">
            <Link href={`/${locale}/contact`}>
              {t('cta.button')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}