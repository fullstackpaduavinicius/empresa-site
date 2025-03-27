'use client';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary text-light py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">DevSolutions</h3>
            <p>Soluções em desenvolvimento web, automações e software sob demanda.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-accent">Sobre Nós</a></li>
              <li><a href="/services" className="hover:text-accent">Serviços</a></li>
              <li><a href="/portfolio" className="hover:text-accent">Portfólio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-accent"><FaGithub /></a>
              <a href="#" className="text-2xl hover:text-accent"><FaLinkedin /></a>
              <a href="#" className="text-2xl hover:text-accent"><FaInstagram /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} DevSolutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}