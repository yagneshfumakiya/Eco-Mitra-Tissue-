import React from 'react';
import { ProductCategory } from '@/types/product';

interface ProductFilterProps {
  categories: ProductCategory[];
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  productCounts: Record<string, number>;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  productCounts,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-8">
      {categories.map((cat) => {
        const isActive = selectedCategory === cat;
        const count = productCounts[cat] || 0;

        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 shadow-xs cursor-pointer ${
              isActive
                ? 'bg-emerald-800 text-white shadow-md shadow-emerald-800/20 ring-2 ring-emerald-600 ring-offset-2'
                : 'bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200'
            }`}
          >
            <span>{cat}</span>
            <span
              className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                isActive
                  ? 'bg-emerald-950 text-emerald-200'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
