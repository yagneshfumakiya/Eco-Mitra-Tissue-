export type ProductCategory = 'All' | 'Regular' | 'Soft' | 'Extra Soft' | 'Premium' | 'Commercial';

export interface Product {
  id: string;
  name: string;
  category: Exclude<ProductCategory, 'All'>;
  description: string;
  packInfo: string;
  ply: string;
  pulls: string;
  material: string;
  popular?: boolean;
  badge?: string;
  image: string;
  features: string[];
  idealFor: string[];
}
