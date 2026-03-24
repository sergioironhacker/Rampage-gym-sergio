import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      'https://wa.me/+34610498900?text=Hola,%20estoy%20interesado%20en%20RampageGym',
      '_blank'
    );
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-7 h-7"
        />
      </motion.div>
    </motion.button>
  );
}