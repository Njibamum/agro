"use client";

import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('error');

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <h2 className="text-2xl font-bold mb-4">{t('notFound.title')}</h2>
      <p className="text-muted-foreground">
        {t('notFound.description')}
      </p>
    </div>
  );
}