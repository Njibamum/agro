import { redirect } from 'next/navigation';
import { defaultLocale } from '@/config/i18n';

// Redirect from / to /defaultLocale
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}