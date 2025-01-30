import React from 'react';
import { Category, Retailer, mockProducts, Product } from './types';

interface ProductGridProps {
  category: Category | null;
  retailer: Retailer | null;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
      </div>
      <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
    </div>
  );
};

const ProductGrid: React.FC<ProductGridProps> = ({ category, retailer }) => {
  const filteredProducts = mockProducts.filter(product => {
    if (category && product.category !== category.id) return false;
    if (retailer && product.retailer !== retailer.id) return false;
    return true;
  });

  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;