import { motion } from "framer-motion";
import heroLeft from "../assets/hero-left.png";
import heroRight from "../assets/hero-right.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 md:px-16 py-20">
      
      {/* LEFT ILLUSTRATION */}
      <motion.img
        src={heroLeft}
        className="absolute left-6 top-32 w-76 md:w-72"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* RIGHT ILLUSTRATION */}
      <motion.img
        src={heroRight}
        className="absolute right-6 top-40 w-64 md:w-80"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.p variants={fadeUp} className="text-gray-500 mb-4">
          Igniting the Spark of Inspiration 
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-7xl md:text-6xl font-bold leading-tight"
        >
          Unleash Your Brand with Our { " ✨ "}
          <span className="inline-block bg-yellow-200 px-3 rotate-3 rounded-md text-purple-700">
            Mágico
          </span>{" "}
          Design
        </motion.h1>

        <motion.div variants={fadeUp} className="mt-10 flex justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full border border-orange-400"
          >
            Create Magic ✨
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
