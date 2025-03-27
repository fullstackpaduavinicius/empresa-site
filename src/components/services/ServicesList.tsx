'use client';
import { FaCode, FaRobot, FaLaptopCode, FaChartLine, FaDatabase, FaMobile } from 'react-icons/fa';

interface ServicesListProps {
  extended?: boolean;
}

export default function ServicesList({ extended = false }: ServicesListProps) {
  const baseServices = [
    {
      icon: <FaCode size={32} className="text-accent" />,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web de alta performance"
    },
    {
      icon: <FaRobot size={32} className="text-accent" />,
      title: "Automações",
      description: "Robôs para automatizar processos repetitivos"
    },
    {
      icon: <FaLaptopCode size={32} className="text-accent" />,
      title: "Software Sob Demanda",
      description: "Soluções personalizadas para seu negócio"
    }
  ];

  const extendedServices = extended ? [
    ...baseServices,
    {
      icon: <FaChartLine size={32} className="text-accent" />,
      title: "Sistemas de Gestão",
      description: "ERP, CRM e outras soluções integradas"
    },
    {
      icon: <FaDatabase size={32} className="text-accent" />,
      title: "Banco de Dados",
      description: "Modelagem e otimização de dados"
    },
    {
      icon: <FaMobile size={32} className="text-accent" />,
      title: "Aplicativos Mobile",
      description: "Soluções para iOS e Android"
    }
  ] : baseServices;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {extendedServices.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
          <p className="text-secondary mb-4">{service.description}</p>
          <a 
            href="/contact" 
            className="text-accent hover:text-primary font-medium inline-flex items-center"
          >
            Saiba mais →
          </a>
        </div>
      ))}
    </div>
  );
}