import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-black min-h-screen pt-24 pb-20 text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase">
            Nosotros
          </h1>
          <div className="w-24 h-[2px] bg-white/40 mx-auto mt-6"></div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative h-72 md:h-[420px] rounded-2xl overflow-hidden mb-14"
        >
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About RampageGym"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </motion.div>

        {/* TEXT */}
        <div className="max-w-3xl mx-auto text-center space-y-10">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-3xl font-light leading-snug text-white"
          >
            RampageGym no nació para seguir tendencias.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-2xl md:text-3xl font-light leading-snug text-white/90"
          >
            Nació de la disciplina, del esfuerzo y de la necesidad de superarse cada día.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-3"
          >
            <p className="text-lg md:text-xl text-white/70">
              Sabemos lo que es entrenar cansado.
            </p>
            <p className="text-lg md:text-xl text-white/70">
              Sabemos lo que es no tener motivación.
            </p>
            <p className="text-lg md:text-xl text-white/70">
              Y aun así, seguir.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white"
          >
            Esta marca es para esa gente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-2 pt-6"
          >
            <p className="text-3xl md:text-4xl font-black tracking-tight">
              No vendemos ropa.
            </p>
            <p className="text-3xl md:text-4xl font-black tracking-tight text-white/90">
              Representamos una mentalidad.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}