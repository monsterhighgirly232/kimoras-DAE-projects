import React from 'react';
import { Category, Retailer, categories, retailers } from './types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
  selectedRetailer: Retailer | null;
  setSelectedRetailer: (retailer: Retailer | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  selectedCategory,
  setSelectedCategory,
  selectedRetailer,
  setSelectedRetailer
}) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:relative lg:translate-x-0 lg:w-64 transition-transform duration-300 ease-in-out z-30`}
    >
      <div className="h-full bg-white/90 backdrop-blur-md border-r border-gray-200 p-4 shadow-lg">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <div className="space-y-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory?.id === category.id
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Retailers</h3>
          <div className="space-y-2">
            {retailers.map(retailer => (
              <button
                key={retailer.id}
                onClick={() => setSelectedRetailer(retailer)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedRetailer?.id === retailer.id
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {retailer.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;