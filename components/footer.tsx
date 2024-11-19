'use client';

import Link from "next/link";
import { Leaf } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { LanguageSwitcher } from "@/components/language-switcher";

export function Footer() {
  const [mounted, setMounted] = useState(false);
  let locale;
  let t;

  try {
    locale = useLocale();
    t = useTranslations('navigation');
  } catch {
    return null;
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const getLocalizedHref = (href: string) => `/${locale}${href}`;

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href={getLocalizedHref('/')} className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="font-bold">{t('brand')}</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {t('description')}
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t('products')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={getLocalizedHref('/products/animal')} className="text-muted-foreground hover:text-foreground">
                  {t('categories.animal.title')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedHref('/products/arable')} className="text-muted-foreground hover:text-foreground">
                  {t('categories.arable.title')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t('company')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={getLocalizedHref('/about')} className="text-muted-foreground hover:text-foreground">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedHref('/blog')} className="text-muted-foreground hover:text-foreground">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedHref('/contact')} className="text-muted-foreground hover:text-foreground">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t('legal')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={getLocalizedHref('/privacy')} className="text-muted-foreground hover:text-foreground">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedHref('/terms')} className="text-muted-foreground hover:text-foreground">
                  {t('terms')}
                </Link>
              </li>
              <li className="pt-2">
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t('copyright')}
        </div>
      </div>
    </footer>
  );
}