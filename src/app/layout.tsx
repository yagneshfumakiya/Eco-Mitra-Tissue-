import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eco Mitra | Quality Tissue Paper Products',
  description: 'Eco Mitra provides quality tissue paper products for homes, businesses, restaurants, hotels, corporate offices, and bulk requirements.',
  keywords: [
    'Eco Mitra',
    'Tissue Paper Brand',
    'Soft Tissue Paper',
    'Bulk Tissue Supply',
    'Restaurant Tissues',
    'Hotel Tissue Rolls',
    'Corporate Tissue Paper',
    'Hygienic Tissue Paper',
    'Virgin Pulp Tissues',
  ],
  authors: [{ name: 'Eco Mitra' }],
  openGraph: {
    title: 'Eco Mitra | Softness with Nature\'s Care',
    description: 'Quality tissue paper solutions designed for everyday comfort, hygiene, and bulk business orders.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Eco Mitra',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-[#F8FAF6] text-slate-800 antialiased">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        <WhatsAppButton isFloating={true} />
      </body>
    </html>
  );
}
