import { FaUserTie, FaLightbulb, FaHandshake } from 'react-icons/fa';
import SectionTitle from '@/components/ui/SectionTitle';

export default function AboutPage() {
  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle 
          title="Sobre Nós" 
          subtitle="Conheça nossa trajetória e valores" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Nossa História</h3>
            <p className="text-secondary mb-4">
              Fundada em 2023, a DevSolutions nasceu da paixão por transformar ideias em soluções digitais eficientes.
            </p>
            <p className="text-secondary">
              Começamos como uma pequena equipe de desenvolvedores e hoje atendemos clientes em todo o país, entregando projetos que fazem a diferença.
            </p>
          </div>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <span className="text-secondary">Imagem da equipe</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUserTie size={40} className="text-accent" />,
              title: "Missão",
              text: "Oferecer soluções tecnológicas personalizadas que impulsionem os negócios de nossos clientes."
            },
            {
              icon: <FaLightbulb size={40} className="text-accent" />,
              title: "Visão",
              text: "Ser referência em desenvolvimento de software e automações no Brasil até 2025."
            },
            {
              icon: <FaHandshake size={40} className="text-accent" />,
              title: "Valores",
              text: "Transparência, qualidade técnica, inovação e parceria com nossos clientes."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
              <p className="text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}