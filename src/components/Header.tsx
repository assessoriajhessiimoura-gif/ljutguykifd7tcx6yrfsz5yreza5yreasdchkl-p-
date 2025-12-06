import { Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3F0]/95 backdrop-blur-sm border-b border-[#D4C5B9]/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-light tracking-wide text-[#8B7355]">
          Bianca Moura
        </h1>
        <a
          href="https://www.instagram.com/bianca.cilioss"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#2D5A3D] hover:text-[#3A7250] transition-all duration-300 hover:scale-110"
          aria-label="Instagram da Bianca Moura"
        >
          <Instagram size={24} />
        </a>
      </div>
    </header>
  );
}
