import ServicesList from '@/components/services/ServicesList';
import SectionTitle from '@/components/ui/SectionTitle';
import CtaSection from '@/components/sections/CtaSection';

export default function ServicesPage() {
  return (
    <main>
      <div className="py-16 bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle 
            title="Nossos Serviços" 
            subtitle="Soluções completas para seu negócio" 
            center
          />
          <ServicesList extended />
        </div>
      </div>
      <CtaSection />
    </main>
  );
}