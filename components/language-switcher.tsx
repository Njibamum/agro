"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { locales } from '@/config/i18n';

const languages = {
  en: 'English',
  th: 'ไทย',
} as const;

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  const redirectedPathname = (locale: string) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground"
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">
            {languages[currentLocale as keyof typeof languages]}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[120px]">
        {locales.map((locale) => (
          <DropdownMenuItem 
            key={locale} 
            className={`${currentLocale === locale ? 'bg-accent' : ''}`}
          >
            <Link
              href={redirectedPathname(locale)}
              className="w-full"
            >
              {languages[locale as keyof typeof languages]}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}