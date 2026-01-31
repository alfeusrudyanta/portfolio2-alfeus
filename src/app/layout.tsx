import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio by Alfeus Rudyanta',
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-monserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          montserrat.className,
          'md:text-md-regular text-sm-regular bg-white text-neutral-950 antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
