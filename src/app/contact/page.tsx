'use client';
import { useForm } from 'react-hook-form';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import SectionTitle from '@/components/ui/SectionTitle';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://api.sheetmonkey.io/form/YOUR_FORM_ID_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        reset();
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      alert('Ocorreu um erro. Tente novamente mais tarde.');
      console.error(error);
    }
  };

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle 
          title="Entre em Contato" 
          subtitle="Estamos prontos para ajudar no seu projeto" 
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Envie sua Mensagem</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-secondary mb-2">Nome*</label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Nome é obrigatório' })}
                  className="w-full p-3 border border-gray-300 rounded focus:border-accent focus:outline-none"
                />
                {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-secondary mb-2">Email*</label>
                <input
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  className="w-full p-3 border border-gray-300 rounded focus:border-accent focus:outline-none"
                />
                {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-secondary mb-2">Telefone</label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className="w-full p-3 border border-gray-300 rounded focus:border-accent focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-secondary mb-2">Mensagem*</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Mensagem é obrigatória' })}
                  className="w-full p-3 border border-gray-300 rounded focus:border-accent focus:outline-none"
                ></textarea>
                {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
              </div>
              
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
              >
                <FaPaperPlane /> Enviar Mensagem
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Telefone</h4>
                  <p className="text-secondary">+55 (XX) XXXX-XXXX</p>
                  <p className="text-sm text-gray-500">Segunda a Sexta, 9h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Email</h4>
                  <p className="text-secondary">contato@devsolutions.com.br</p>
                  <p className="text-sm text-gray-500">Respondemos em até 24h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Endereço</h4>
                  <p className="text-secondary">Rua Exemplo, 123 - Centro</p>
                  <p className="text-secondary">Sua Cidade - Estado</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="font-bold text-secondary mb-3">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:text-accent text-xl">
                    <FaWhatsapp />
                  </a>
                  <a href="#" className="text-primary hover:text-accent text-xl">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="text-primary hover:text-accent text-xl">
                    <FaGithub />
                  </a>
                  <a href="#" className="text-primary hover:text-accent text-xl">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}