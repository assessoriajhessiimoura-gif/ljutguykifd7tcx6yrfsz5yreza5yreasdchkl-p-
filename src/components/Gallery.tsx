import { useState } from 'react';

interface Procedure {
  name: string;
  image: string;
  price: string;
}

const procedures: Procedure[] = [
  {
    name: 'Volume Brasileiro',
    image: 'whatsapp_image_2025-11-29_at_20.21.37.jpeg',
    price: 'R$ 165,00',
  },
  {
    name: 'Volume Fox',
    image: 'whatsapp_image_2025-11-29_at_20.21.38.jpeg',
    price: 'R$ 165,00',
  },
  {
    name: 'Volume Fox Marrom',
    image: 'whatsapp_image_2025-11-29_at_20.21.38_(1).jpeg',
    price: 'R$ 165,00',
  },
  {
    name: 'Volume Europeu',
    image: 'whatsapp_image_2025-11-29_at_20.21.38_(2).jpeg',
    price: 'R$ 165,00',
  },
  {
    name: 'Mega Volume',
    image: '/images/whatsapp_image_2025-11-29_at_20.21.38_(2).jpeg',
    price: 'R$ 220,00',
  },
  {
    name: 'Mega Volume',
    image: '/images/whatsapp_image_2025-11-29_at_20.21.38_(1).jpeg',
    price: 'R$ 220,00',
  },
];

export default function Gallery() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#F5F3F0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-light text-[#8B7355] tracking-wide">
            Nossos Procedimentos
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#D4AF87] to-[#C9B5A0] rounded-full mx-auto"></div>
          <p className="text-lg text-[#6B5D52] font-light max-w-2xl mx-auto">
            Técnicas especializadas para realçar seu olhar com naturalidade e elegância
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {procedures.map((procedure, index) => (
            <div
              key={index}
              className={`group cursor-pointer ${
                activeCard === index ? 'animate-swing' : ''
              }`}
              onClick={() => {
                setActiveCard(index);
                setTimeout(() => setActiveCard(null), 600);
              }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={procedure.image}
                    alt={procedure.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-6 bg-white">
                  <h3 className="text-xl font-light text-[#8B7355] mb-2 text-center">
                    {procedure.name}
                  </h3>
                  <p className="text-2xl font-light text-[#2D5A3D] text-center">
                    {procedure.price}
                  </p>
                </div>

                <div className="absolute top-4 right-4 bg-[#D4AF87]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Ver detalhes
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes swing {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(3deg); }
          75% { transform: rotate(-3deg); }
        }
        .animate-swing {
          animation: swing 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
}
