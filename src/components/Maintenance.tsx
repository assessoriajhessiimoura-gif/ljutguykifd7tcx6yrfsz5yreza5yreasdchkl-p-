import manutencao from "../assets/manutencao.jpeg";

export default function Maintenance() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#E8DDD4] to-[#F5F3F0]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-light text-[#8B7355] tracking-wide">
              Manutenções
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#D4AF87] to-[#C9B5A0] rounded-full mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C9B5A0] to-[#D4AF87] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>

                <img
                  src={manutencao}
                  alt="Manutenção de Cílios"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-square hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <p className="text-lg text-[#6B5D52] font-light leading-relaxed">
                Mantenha seus cílios sempre impecáveis com nossas manutenções especializadas
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-l-4 border-[#D4AF87]">
                  <h3 className="text-2xl font-light text-[#8B7355] mb-3">
                    Manutenção Mega Volume
                  </h3>
                  <p className="text-[#6B5D52] leading-relaxed">
                    Para cílios volumosos e cheios, mantendo sempre o efeito desejado.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
