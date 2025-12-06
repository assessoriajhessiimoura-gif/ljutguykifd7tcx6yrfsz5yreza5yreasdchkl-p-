import { useState } from 'react';
import { Send } from 'lucide-react';

const procedures = [
  { name: 'Volume Brasileiro', price: 'R$ 165,00' },
  { name: 'Volume Fox', price: 'R$ 165,00' },
  { name: 'Volume Fox Marrom', price: 'R$ 165,00' },
  { name: 'Volume Europeu', price: 'R$ 165,00' },
  { name: 'Mega Volume', price: 'R$ 220,00' },
];

export default function BookingForm() {
  const [selectedProcedure, setSelectedProcedure] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedProcedure) {
      alert('Por favor, selecione um procedimento.');
      return;
    }

    const message = `Olá Bianca! Quero agendar esse procedimento: ${selectedProcedure}.`;
    const whatsappNumber = '5531991028853';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="agendar" className="py-20 bg-gradient-to-b from-[#F5F3F0] to-[#E8DDD4]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-light text-[#8B7355] tracking-wide">
              Agende seu Procedimento
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#D4AF87] to-[#C9B5A0] rounded-full mx-auto"></div>
            <p className="text-lg text-[#6B5D52] font-light">
              Escolha o procedimento desejado e entre em contato pelo WhatsApp
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <label className="block text-lg font-light text-[#8B7355]">
                  Selecione o procedimento
                </label>

                <div className="space-y-3">
                  {procedures.map((procedure, index) => (
                    <label
                      key={index}
                      className={`flex items-center justify-between p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-md ${
                        selectedProcedure === `${procedure.name} - ${procedure.price}`
                          ? 'border-[#2D5A3D] bg-[#2D5A3D]/5 shadow-md'
                          : 'border-[#D4C5B9] hover:border-[#C9B5A0]'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="procedure"
                          value={`${procedure.name} - ${procedure.price}`}
                          checked={selectedProcedure === `${procedure.name} - ${procedure.price}`}
                          onChange={(e) => setSelectedProcedure(e.target.value)}
                          className="w-5 h-5 text-[#2D5A3D] focus:ring-[#2D5A3D] focus:ring-2"
                        />
                        <span className="text-lg font-light text-[#6B5D52]">
                          {procedure.name}
                        </span>
                      </div>
                      <span className="text-xl font-light text-[#2D5A3D]">
                        {procedure.price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2D5A3D] text-white py-5 rounded-full font-light text-lg tracking-wide hover:bg-[#3A7250] transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Send className="group-hover:translate-x-1 transition-transform duration-300" size={24} />
                Agendar via WhatsApp
              </button>

              <p className="text-center text-sm text-[#6B5D52] font-light">
                Você será redirecionado para o WhatsApp com sua mensagem pronta
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
