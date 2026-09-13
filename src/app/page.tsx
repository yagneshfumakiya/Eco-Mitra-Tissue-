import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { ProductsPreview } from '@/components/home/ProductsPreview';
import { CustomLogoTissueSection } from '@/components/home/CustomLogoTissueSection';
import { CTASection } from '@/components/home/CTASection';
import { TrustHighlights } from '@/components/home/TrustHighlights';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eco Mitra | Softness with Nature\'s Care - Premium Tissue Paper',
  description: 'Eco Mitra provides quality tissue paper products for homes, businesses, restaurants, hotels, corporate offices, and bulk requirements.',
};

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <WhyChooseUs />
      <ProductsPreview />
      <CustomLogoTissueSection />
      <CTASection />
      <TrustHighlights />
    </div>
  );
}
