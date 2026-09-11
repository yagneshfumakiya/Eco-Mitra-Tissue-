'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '@/data/products';
import { ProductCategory, Product } from '@/types/product';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductFilter } from '@/components/products/ProductFilter';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Leaf, MessageCircle, PackageCheck, Truck, HelpCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/config/business';

const CATEGORIES: ProductCategory[] = ['All', 'Regular', 'Soft', 'Extra Soft', 'Premium', 'Commercial'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');

  // Compute counts for each category
  const productCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PRODUCTS.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = PRODUCTS.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-0">
      
      {/* Catalog Hero Banner */}
      <section className="bg-gradient-eco text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs sm:text-sm font-semibold mb-6">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>Product Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Our Tissue Products
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto font-normal">
            Quality tissue paper solutions designed for everyday comfort and business needs.
          </p>
        </div>
      </section>

      {/* Main Catalog Grid */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Component */}
          <ProductFilter
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            productCounts={productCounts}
          />

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 text-sm text-slate-600 font-medium">
            <div>
              Showing <span className="font-bold text-emerald-950">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''} in <span className="font-bold text-emerald-800">{selectedCategory}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-700 font-semibold bg-emerald-100/60 px-3 py-1 rounded-full">
              <PackageCheck className="w-3.5 h-3.5" />
              <span>Direct Wholesale Inquiry Available</span>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Custom Requirement Banner */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-emerald-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                <span>Custom Specs & Branding</span>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">
                Need Custom Sizes, Embossing, or Bulk Packaging?
              </h3>
              <p className="text-slate-600 text-sm max-w-xl">
                We accommodate customized pull counts, custom logo prints on tissue boxes, and dedicated contract pricing for hotels and franchises.
              </p>
            </div>

            <a
              href={getWhatsAppLink('Hello Eco Mitra, I need a custom tissue product specification for my business.')}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-7 py-3.5 rounded-2xl shadow-md transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire Custom Order</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
