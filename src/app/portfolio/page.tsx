'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Landing Page",
    description: "Web site com alta taxa de conversão de leads para clientes finais",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/project1.jpg", // Substitua por imagens reais
    links: [
      { icon: <FaExternalLinkAlt />, url: "#" },
      { icon: <FaGithub />, url: "#" }
    ]
  },
  {
    id: 2,
    title: "Api Logistic",
    description: "Gerenciamento de pedidos para uma empresa de logística",
    tags: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "JSON Web Tokens", "Jest", "Nodemon", "Sequelize"],
    image: "/project2.jpg", // Substitua por imagens reais
    links: [
      { icon: <FaExternalLinkAlt />, url: "#" },
      { icon: <FaGithub />, url: "#" }
    ]
  },
  {
    id: 3,
    title: "TikTok_Cutter-",
    description: "Plataforma completa para criação de corte para vídeos virais",
    tags: ["Python", "MoviePy", "OpenCV"],
    image: "/project3.jpg", // Substitua por imagens reais
    links: [
      { icon: <FaExternalLinkAlt />, url: "#" },
      { icon: <FaGithub />, url: "#" }
    ]
  }
];

export default function PortfolioPage() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Portfólio</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos recentes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelected(index)}
              className={`cursor-pointer transition ${selected === index ? 'ring-4 ring-accent' : 'hover:ring-2 hover:ring-primary'}`}
            >
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <span className="text-secondary">Imagem do Projeto {index + 1}</span>
              </div>
              <div className="p-4 bg-light">
                <h3 className="font-bold text-primary">{project.title}</h3>
                <p className="text-sm text-secondary mt-1">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {projects[selected] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-light p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold text-primary mb-2">{projects[selected].title}</h3>
            <p className="text-secondary mb-4">{projects[selected].description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[selected].tags.map((tag, i) => (
                <span key={i} className="bg-accent text-white px-3 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              {projects[selected].links.map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  className="text-primary hover:text-secondary text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
