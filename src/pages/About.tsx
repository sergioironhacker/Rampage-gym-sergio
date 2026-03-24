import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-black min-h-screen pt-20 md:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            NOSOTROS
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8 md:space-y-12"
        >
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="About RampageGym"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="prose prose-invert max-w-none">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-8 font-light"
            >
              RampageGym no nació para seguir tendencias.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-8 font-light"
            >
              Nació de la disciplina, del esfuerzo y de las ganas de superarse cada día.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
            >
              Sabemos lo que es entrenar cansado.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
            >
              Sabemos lo que es no tener motivación.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
            >
              Y aun así, seguir.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-medium"
            >
              Esta marca es para esa gente.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-bold"
            >
              No vendemos ropa.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-bold"
            >
              Representamos una mentalidad.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
