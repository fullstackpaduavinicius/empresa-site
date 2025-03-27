'use client';
import { motion } from 'framer-motion';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative bg-primary text-light py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transformamos ideias em <span className="text-accent">soluções digitais</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Desenvolvimento web, automações e software personalizado para impulsionar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services" 
              className="bg-accent hover:bg-secondary text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition"
            >
              Nossos Serviços <FaArrowRight />
            </a>
            <a 
              href="https://wa.me/5579998807035" 
              className="bg-secondary hover:bg-accent text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition"
            >
              <FaWhatsapp size={20} /> Fale Conosco
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Elementos decorativos */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -right-32 -top-32 w-64 h-64 rounded-full border-4 border-accent opacity-20"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -left-20 bottom-0 w-80 h-80 rounded-full border-4 border-accent opacity-20"
      />
    </section>
  );
}