import { Instagram, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#8B7355] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-light mb-2">Bianca Moura</h3>
            <p className="text-sm font-light text-white/80">
              Lash Designer especializada
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-light">
            <span>Feito com</span>
            <Heart size={16} className="text-[#D4AF87] fill-[#D4AF87]" />
            <span>para realçar sua beleza</span>
          </div>

          <div>
            <a
              href="https://www.instagram.com/bianca.cilioss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#D4AF87] transition-colors duration-300"
            >
              <Instagram size={24} />
              <span className="font-light">@bianca.cilioss</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm font-light text-white/70">
            © {new Date().getFullYear()} Bianca Moura - Lash Designer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
