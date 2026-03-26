import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { products } from '../data/products';
import { Product } from '../types';

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'men' | 'women' | 'accessories'>('all');

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-black min-h-screen pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            COLECCIÓN RAMPAGEGYM
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8">
            Ropa diseñada para guerreros del gimnasio
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'ALL', value: 'all' },
              { label: 'HOMBRE', value: 'men' },
              { label: 'MUJER', value: 'women' },
              { label: 'ACCESORIOS', value: 'accessories' },
            ].map((option) => (
              <motion.button
                key={option.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(option.value as 'all' | 'men' | 'women' | 'accessories')}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base tracking-wider transition-all ${filter === option.value
                    ? 'bg-white text-black'
                    : 'border-2 border-gray-600 text-gray-400 hover:border-white hover:text-white'
                  }`}
              >
                {option.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </motion.div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
