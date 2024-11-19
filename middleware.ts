import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import createIntlMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config/i18n';

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

const publicPaths = ['/api/admin/login'];

export default async function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  // Handle internationalization for non-API routes
  if (!pathname.startsWith('/api')) {
    return intlMiddleware(request);
  }

  // Allow public paths
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Protect admin API routes
  if (pathname.startsWith('/api/admin')) {
    try {
      const token = request.headers.get('Cookie')?.split('; ')
        .find(row => row.startsWith('admin_token='))
        ?.split('=')[1];

      if (!token) {
        throw new Error('No token found');
      }

      await jwtVerify(
        token, 
        new TextEncoder().encode(process.env.JWT_SECRET || 'MasterPieceMakesMasterBeats')
      );
      
      return NextResponse.next();
    } catch (error) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
};