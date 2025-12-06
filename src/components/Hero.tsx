export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-[#F5F3F0] to-[#E8DDD4]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C9B5A0] to-[#D4AF87] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img
                src="/images/whatsapp_image_2025-11-29_at_21.16.18.jpeg"
                alt="Bianca Moura - Lash Designer"
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-square hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl lg:text-5xl font-light text-[#8B7355] tracking-wide">
                Sobre mim
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF87] to-[#C9B5A0] rounded-full"></div>
            </div>

            <p className="text-lg leading-relaxed text-[#6B5D52] font-light">
              Sou <span className="font-medium text-[#8B7355]">Bianca Moura</span>, Lash Designer especializada em realçar a beleza do olhar com técnica, segurança e personalização. Meu objetivo é entregar resultados leves, duradouros e adaptados para cada cliente.
            </p>

            <div className="pt-4">
              <a
                href="#agendar"
                className="inline-block bg-[#2D5A3D] text-white px-8 py-4 rounded-full font-light tracking-wide hover:bg-[#3A7250] transform hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Agende seu horário
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
