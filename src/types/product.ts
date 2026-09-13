export type ProductCategory = 'All' | 'Regular 27 CM x 27 CM' | 'Soft 27 CM x 27 CM' | 'Extra Soft 27 CM x 27 CM' | 'Regular 27 CM x 30 CM' | 'Soft 27 CM x 30 CM' | 'Extra Soft 27 CM x 30 CM';

export interface Product {
  id: string;
  name: string;
  category: Exclude<ProductCategory, 'All'>;
  description: string;
  packInfo: string;
  ply: string;
  size: string;
  pulls: string;
  material: string;
  popular?: boolean;
  badge?: string;
  image: string;
  features: string[];
  idealFor: string[];
}
