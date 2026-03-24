import { motion } from 'framer-motion';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden bg-gray-900 rounded-lg aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3 rounded-full font-bold tracking-wider text-sm"
          >
            VER MÁS
          </motion.button>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-white font-bold text-lg tracking-wide">{product.name}</h3>
        <p className="text-gray-400 text-xl font-bold">${product.price}</p>
      </div>
    </motion.div>
  );
}
