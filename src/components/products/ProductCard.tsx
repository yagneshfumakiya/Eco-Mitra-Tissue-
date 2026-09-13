import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { getWhatsAppLink } from '@/config/business';
import { MessageCircle, Check, Layers, Package, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const inquiryMsg = `Hello Eco Mitra, I am interested in the ${product.name} product. Please share more details.`;
  const whatsappUrl = getWhatsAppLink(inquiryMsg);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-emerald-100/80 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between h-full">
      {/* Product Image Container */}
      <div>
        <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/95 text-emerald-900 shadow-md backdrop-blur-md border border-emerald-100">
              {product.category}
            </span>
            {product.popular && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-400 text-slate-950 shadow-md">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                {product.badge || 'Popular'}
              </span>
            )}
          </div>

          {/* Bottom Overlay Info */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3 text-white text-xs font-semibold">
            <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
              <Layers className="w-3.5 h-3.5 text-emerald-300" />
              {product.size}
            </span>
            <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
              <Package className="w-3.5 h-3.5 text-emerald-300" />
              {product.pulls}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-4">
          <div>
            <h3 className="text-xl font-black text-emerald-950 group-hover:text-emerald-700 transition-colors">
              {product.name}
            </h3>
            <div className="mt-1 text-xs font-semibold text-emerald-600 tracking-wide uppercase">
              {product.packInfo}
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
            {product.description}
          </p>

          {/* Key Features List */}
          <div className="pt-2 space-y-1.5 border-t border-slate-100">
            {product.features.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer Button */}
      <div className="p-6 sm:p-7 pt-0">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm py-3.5 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all group-hover:bg-emerald-700"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Inquire via WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
