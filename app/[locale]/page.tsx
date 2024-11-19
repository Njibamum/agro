import { unstable_setRequestLocale } from 'next-intl/server';
import { HomePage } from '@/components/home-page';

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default function Home({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);
  return <HomePage />;
}