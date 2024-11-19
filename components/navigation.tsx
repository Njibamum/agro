'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
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

  const productCategories = [
    {
      title: t('categories.animal.title'),
      items: [
        {
          name: t('categories.animal.beef'),
          href: '/products/animal/beef-veal',
        },
        {
          name: t('categories.animal.pigmeat'),
          href: '/products/animal/pigmeat',
        },
        {
          name: t('categories.animal.poultry'),
          href: '/products/animal/poultry-eggs',
        },
        {
          name: t('categories.animal.sheep'),
          href: '/products/animal/sheep-goat',
        },
      ],
    },
    {
      title: t('categories.arable.title'),
      items: [
        {
          name: t('categories.arable.cereals'),
          href: '/products/arable/cereals',
        },
        {
          name: t('categories.arable.oilseeds'),
          href: '/products/arable/oilseeds',
        },
        {
          name: t('categories.arable.oils'),
          href: '/products/arable/vegetable-oils',
        },
        {
          name: t('categories.arable.sugar'),
          href: '/products/arable/sugar-products',
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link
          href={getLocalizedHref('/')}
          className="flex items-center space-x-2"
        >
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="font-bold">{t('brand')}</span>
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t('products')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    {productCategories.map((category) => (
                      <div key={category.title} className="space-y-2">
                        <h3 className="font-medium leading-none">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item) => (
                            <li key={item.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={getLocalizedHref(item.href)}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  {item.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {['/about', '/blog', '/contact'].map((href) => (
                <NavigationMenuItem key={href}>
                  <Link href={getLocalizedHref(href)} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {t(href.substring(1))}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <LanguageSwitcher />
        </div>

        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? t('close_menu') : t('open_menu')}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {isOpen && (
          <div className="absolute inset-x-0 top-16 z-50 w-full space-y-1 bg-background p-4 shadow-lg md:hidden">
            {['/products', '/about', '/blog', '/contact'].map((href) => (
              <Link
                key={href}
                href={getLocalizedHref(href)}
                className="block rounded-lg px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
              >
                {t(href.substring(1))}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}