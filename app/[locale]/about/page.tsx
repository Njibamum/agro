import Image from "next/image";
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Card, CardContent } from "@/components/ui/card";

interface AboutPageProps {
  params: {
    locale: string;
  };
}

export default function AboutPage({ params: { locale } }: AboutPageProps) {
  unstable_setRequestLocale(locale);

  return (
    <div className="container py-8 space-y-12">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
          alt="Our Farm"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-6">
          <h1 className="text-4xl font-bold mb-4">About Green Agriculture</h1>
          <p className="max-w-2xl text-lg">
            Leading the way in sustainable agricultural practices and premium product delivery
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                Green Agriculture Co., Ltd. is dedicated to delivering premium agricultural products 
                to international markets while maintaining sustainable practices and supporting local 
                farming communities in Thailand.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                We strive to be a global leader in sustainable agriculture, setting industry standards 
                for quality, responsibility, and environmental stewardship in agricultural production 
                and distribution.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                We prioritize environmental responsibility in all our operations, ensuring our 
                practices contribute to a healthier planet.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-muted-foreground">
                Our commitment to premium quality drives every aspect of our production and 
                distribution processes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously seek innovative solutions to improve our products and processes 
                while maintaining traditional farming wisdom.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}