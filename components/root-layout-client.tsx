export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Bangkok">
          <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem
            storageKey="theme-mode"
            suppressHydrationWarning
          >
            <div className="flex min-h-screen flex-col">
              <Navigation />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}