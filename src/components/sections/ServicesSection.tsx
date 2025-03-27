'use client';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaLaptopCode } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={40} className="text-accent" />,
    title: "Desenvolvimento Web",
    description: "Sites e aplicações web responsivas e de alto desempenho",
    features: ["React/Next.js", "Node.js", "Tailwind CSS", "TypeScript"]
  },
  {
    icon: <FaRobot size={40} className="text-accent" />,
    title: "Automações",
    description: "Automatize processos repetitivos e ganhe eficiência",
    features: ["Python", "RPA", "Automação de workflows", "Integrações"]
  },
  {
    icon: <FaLaptopCode size={40} className="text-accent" />,
    title: "Software Sob Demanda",
    description: "Soluções personalizadas para necessidades específicas",
    features: ["Arquitetura escalável", "UI/UX personalizado", "Cloud Solutions", "Manutenção"]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Nossos Serviços</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-secondary mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}