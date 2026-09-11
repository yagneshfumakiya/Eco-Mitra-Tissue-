import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ArrowRight } from 'lucide-react';

export const ProductsPreview: React.FC = () => {
  // Show 3 featured products on Home Page
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-emerald-50/40 border-y border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          pill="Featured Collection"
          title="Our Premium Tissue Range"
          subtitle="Explore our soft, highly absorbent, and hygienic tissue paper products designed for daily life and commercial excellence."
        />

        {/* Product Cards Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 bg-emerald-900 hover:bg-emerald-950 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-emerald-950/10 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
