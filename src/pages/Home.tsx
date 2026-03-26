import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import CTASection from '../components/CTASection';
import { products } from '../data/products';
import { Product } from '../types';
import { Dumbbell, Target, Zap } from 'lucide-react';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProducts = products.slice(0, 6);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-black">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Gym Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight"
          >
            TRAIN HARD. LOOK STRONG.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            No es solo ropa. Es mentalidad. Diseñado para los que no se rinden.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg tracking-wider shadow-2xl hover:shadow-white/30 transition-all"
              >
                VER COLECCIÓN
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >






          {/*    <motion.div
  animate={{ y: [0, 15, 0] }}
  transition={{ duration: 1.5, repeat: Infinity }}
  className="text-white flex flex-col items-center gap-1"
>
  <span className="text-xs tracking-widest uppercase opacity-80">
    Descubre más
  </span>
  <span className="text-2xl">⬇️</span>
</motion.div> */}





          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="flex justify-center"
          >
            <svg
              className="w-6 h-6 text-white opacity-80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7M12 21V3" />
            </svg>
          </motion.div>







        </motion.div>
      </section>

      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              PRODUCTOS DESTACADOS
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              La mejor calidad para los mejores atletas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16"
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg tracking-wider transition-all"
              >
                VER TODO
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              NUESTROS VALORES
            </h2>
            {/* VIDEO */}
<div className="mt-8 flex justify-center">
  <video
    className="w-full max-w-3xl max-h-[420px] object-cover rounded-2xl shadow-lg border border-gray-700"
    controls
    poster="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200"
  >
    <source src="/video1.mp4" type="video/mp4" />
    Tu navegador no soporta el video.
  </video>
</div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <Dumbbell size={48} />,
                title: 'DISCIPLINA',
                description: 'Cada día es una oportunidad para mejorar. La consistencia es la clave del éxito.',
              },
              {
                icon: <Target size={48} />,
                title: 'FUERZA',
                description: 'No solo física, sino mental. La verdadera fuerza viene de dentro.',
              },
              {
                icon: <Zap size={48} />,
                title: 'MENTALIDAD',
                description: 'El gimnasio es solo el comienzo. La mentalidad lo cambia todo.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 md:p-10 rounded-2xl text-center hover:border-white/20 transition-all"
              >
                <div className="inline-block mb-6 text-white">{value.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Link to="/men" className="group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Men Collection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                      HOMBRE
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg">Explora la colección</p>
                  </div>
                </div>
              </motion.div>
            </Link>

            <Link to="/women" className="group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src="https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Women Collection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                      MUJER
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg">Explora la colección</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="No es para todos."
        subtitle="Solo para los que están dispuestos a dar el máximo cada día."
        buttonText="ÚNETE A RAMPAGE"
        buttonLink="/shop"
      />

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
