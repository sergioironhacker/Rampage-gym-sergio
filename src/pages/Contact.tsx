import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ nombre: '', email: '', mensaje: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-black min-h-screen pt-20 md:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            CONTACTO
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
              Envíanos un mensaje
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-gray-300 mb-2 font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 md:py-4 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 md:py-4 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-gray-300 mb-2 font-medium">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 md:py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-white text-black font-bold py-4 md:py-5 rounded-full text-base md:text-lg tracking-wider hover:bg-gray-200 transition-colors"
              >
                {submitted ? 'MENSAJE ENVIADO' : 'ENVIAR MENSAJE'}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
                Información de contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-800 p-3 rounded-full">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Email</h3>
                    <p className="text-gray-400">info@rampagegym.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-800 p-3 rounded-full">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Teléfono</h3>
                    <p className="text-gray-400">610498900</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-800 p-3 rounded-full">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Ubicación</h3>
                    <p className="text-gray-400">
                      Segovia / Madrid
                      <br />
                      España
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Horario de atención</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium">Cerrado</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
