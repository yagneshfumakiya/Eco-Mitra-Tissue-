import { Product } from '@/types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'regular-tissue-paper',
    name: 'Regular Tissue Paper',
    category: 'Regular',
    description: 'Reliable and practical tissue paper suitable for everyday use. Perfect balance of absorbency and strength for daily household and quick commercial usage.',
    packInfo: '60 Pulls per Pack',
    ply: '2 Ply',
    pulls: '60 Pulls',
    material: '100% Virgin Fiber',
    popular: false,
    badge: 'Everyday Essential',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    features: [
      'High absorbency & liquid retention',
      'Lint-free texture for clean wipes',
      'Hygienic single pull dispensing',
      'Tear-resistant 2-ply construction'
    ],
    idealFor: ['Homes', 'Small Cafes', 'Quick Service Outlets', 'Daily Office Use']
  },
  {
    id: 'soft-tissue-paper',
    name: 'Soft Tissue Paper',
    category: 'Soft',
    description: 'Soft and comfortable tissue paper designed for a pleasant everyday experience. Extra gentle on facial skin with enhanced micro-embossed softness.',
    packInfo: '60 Pulls per Pack',
    ply: '2 Ply Soft',
    pulls: '60 Pulls',
    material: 'Pure Bamboo Blend',
    popular: true,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=800&auto=format&fit=crop',
    features: [
      'Silky smooth texture for facial skin',
      'Micro-embossed layer technology',
      'Hypoallergenic and chemical-free',
      'Dermatologically safe for sensitive skin'
    ],
    idealFor: ['Executive Offices', 'Boutique Cafes', 'Salons & Spas', 'Personal Care']
  },
  {
    id: 'extra-soft-tissue-paper',
    name: 'Extra Soft Tissue Paper',
    category: 'Extra Soft',
    description: 'A softer and more comfortable tissue option for customers who prefer premium comfort. Ultra-plush feel engineered for luxury hospitality.',
    packInfo: '60 Pulls per Pack',
    ply: '3 Ply Ultra',
    pulls: '60 Pulls',
    material: '100% Bamboo Virgin Pulp',
    popular: false,
    badge: 'Ultra Comfort',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800&auto=format&fit=crop',
    features: [
      'Luxurious 3-ply extra cushion softness',
      'Zero bleach or harsh artificial fragrance',
      'Gentle velvet-like touch',
      'Eco-certified sustainable fiber'
    ],
    idealFor: ['Fine Dining Restaurants', 'Luxury Hotels', 'Hospitals & Clinics', 'VIP Lounges']
  },
  {
    id: 'premium-soft-tissue',
    name: 'Premium Soft Tissue',
    category: 'Premium',
    description: 'Premium quality tissue paper designed for comfort, hygiene, and superior softness. High absorbency with sophisticated leaf embossed patterns.',
    packInfo: '60 Pulls per Pack',
    ply: '3 Ply Gold',
    pulls: '60 Pulls',
    material: 'Ultra-Pure Organic Cellulose',
    popular: true,
    badge: 'Premium Pick',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=800&auto=format&fit=crop',
    features: [
      'Signature nature leaf embossing design',
      'Superior absorbency - 3x water capacity',
      'Elegant dispenser box packaging',
      'Biodegradable and eco-friendly'
    ],
    idealFor: ['5-Star Hotels', 'Corporate HQ', 'Luxury Catering', 'High-end Retail']
  },
  {
    id: 'bulk-tissue-pack',
    name: 'Bulk Tissue Pack',
    category: 'Commercial',
    description: 'A practical tissue solution designed for restaurants, offices, hotels, and commercial requirements. High-efficiency bulk supply with custom logo print option.',
    packInfo: 'Bulk Pack (50 Boxes / Carton)',
    ply: '2 Ply Commercial',
    pulls: 'Bulk Supply',
    material: 'High Efficiency Recycled & Virgin Fiber',
    popular: true,
    badge: 'Commercial Choice',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    features: [
      'Wholesale bulk pricing for high-volume users',
      'Custom branding & logo print available',
      'Compact bulk packing for compact storage',
      'Consistent stock & scheduled auto-refill'
    ],
    idealFor: ['Food Courts', 'Chains & Franchises', 'Large Corporate Hubs', 'Wholesale Distributors']
  }
];
