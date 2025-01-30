import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { categories, retailers, ProductCard, Category, Retailer } from './components/types';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedRetailer, setSelectedRetailer] = useState<Retailer | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // Structure Content with Semantic HTML - header, nav, main, footer
    <div className="min-h-screen bg-gray-50/50 backdrop-blur-sm">
      {/* Header with semantic HTML */}
      <header className="bg-black/90 backdrop-blur-md text-white sticky top-0 z-50" role="banner">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle menu"
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <h1 className="text-2xl font-bold">StyleHub</h1>
          
          {/* Navigation with semantic HTML */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation">
            <ul className="flex space-x-8">
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`hover:text-pink-400 transition-colors ${
                      selectedCategory?.id === category.id ? 'text-pink-400' : ''
                    }`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="/search" aria-label="Search">
              <Search className="w-6 h-6 cursor-pointer hover:text-pink-400 transition-colors" />
            </a>
            <a href="/cart" aria-label="Shopping cart">
              <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-pink-400 transition-colors" />
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex mt-4 shadow-lg">
        {/* Sidebar with semantic HTML */}
        <Sidebar 
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedRetailer={selectedRetailer}
          setSelectedRetailer={setSelectedRetailer}
        />

        {/* Main content with semantic HTML */}
        <main className="flex-1 bg-white/80 backdrop-blur-sm p-6 rounded-lg" role="main">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">
              {selectedCategory ? selectedCategory.name : 'All Styles'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {retailers.map(retailer => (
                <button
                  key={retailer.id}
                  onClick={() => setSelectedRetailer(retailer)}
                  className={`px-4 py-2 rounded-full border transition-colors ${
                    selectedRetailer?.id === retailer.id
                      ? 'bg-black text-white border-black'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {retailer.name}
                </button>
              ))}
            </div>
          </div>

          <ProductGrid 
            category={selectedCategory} 
            retailer={selectedRetailer}
          />
        </main>
      </div>

      {/* Footer with semantic HTML */}
      <footer className="bg-black/90 text-white py-8 mt-auto" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About StyleHub</h3>
              <p>Your one-stop destination for fashion from multiple retailers.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-pink-400">About Us</a></li>
                <li><a href="/contact" className="hover:text-pink-400">Contact</a></li>
                <li><a href="/faq" className="hover:text-pink-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <ul className="space-y-2">
                <li><a href="/instagram" className="hover:text-pink-400">Instagram</a></li>
                <li><a href="/twitter" className="hover:text-pink-400">Twitter</a></li>
                <li><a href="/facebook" className="hover:text-pink-400">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;