export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Retailer {
  id: string;
  name: string;
  logo: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  retailer: string;
  category: string;
}

export const categories: Category[] = [
  { id: 'streetwear', name: 'Streetwear', description: 'Urban and casual style' },
  { id: 'y2k', name: 'Y2K', description: '2000s inspired fashion' },
  { id: 'vintage', name: 'Vintage', description: 'Classic retro styles' },
  { id: 'gothic', name: 'Gothic', description: 'Dark and edgy fashion' }
];

export const retailers: Retailer[] = [
  { id: 'shein', name: 'SHEIN', logo: '/shein-logo.png' },
  { id: 'amazon', name: 'Amazon', logo: '/amazon-logo.png' },
  { id: 'fashionnova', name: 'Fashion Nova', logo: '/fashionnova-logo.png' }
];

// Mock data - replace with actual API calls
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Y2K Butterfly Top',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
    retailer: 'shein',
    category: 'y2k'
  },
  {
    id: '2',
    name: 'Vintage Denim Jacket',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=800',
    retailer: 'amazon',
    category: 'vintage'
  },
  // Add more mock products as needed
];