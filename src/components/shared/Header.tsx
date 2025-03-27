'use client'; // Adicione esta linha no topo do arquivo

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-primary text-light py-4 px-6 shadow-md fixed w-full z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <FaLaptopCode size={28} />
          <span className="text-xl font-bold">DevSolutions</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link href="/about" className="hover:text-accent transition">Sobre</Link>
          <Link href="/services" className="hover:text-accent transition">Serviços</Link>
          <Link href="/portfolio" className="hover:text-accent transition">Portfólio</Link>
          <Link href="/blog" className="hover:text-accent transition">Blog</Link>
          <Link href="/contact" className="hover:text-accent transition">Contato</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/seunumero" 
            className="bg-accent hover:bg-secondary text-white px-4 py-2 rounded flex items-center gap-2 hidden sm:flex"
          >
            <FaWhatsapp />
            <span>Contato</span>
          </a>
          
          <button 
            className="md:hidden text-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu mobile"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-primary pt-4 pb-6 px-6 flex flex-col gap-4"
        >
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-accent py-2">Sobre</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-accent py-2">Serviços</Link>
          <Link href="/portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-accent py-2">Portfólio</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-accent py-2">Blog</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-accent py-2">Contato</Link>
          
          <a 
            href="https://wa.me/seunumero" 
            className="bg-accent hover:bg-secondary text-white px-4 py-2 rounded flex items-center justify-center gap-2 mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaWhatsapp />
            Fale no WhatsApp
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}