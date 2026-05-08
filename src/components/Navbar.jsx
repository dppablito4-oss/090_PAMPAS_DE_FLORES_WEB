import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 glass-nav ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md shadow-primary/30">
              090
            </div>
            <div>
              <h1 className="font-bold text-lg text-blue-400 leading-tight">I.E.I. N° 090</h1>
              <p className="text-xs text-gray-500 font-medium">PAMPAS DE FLORES</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-400 hover:text-blue-400 font-medium transition">Inicio</a>
            <a href="#detalles" className="text-gray-400 hover:text-blue-400 font-medium transition">Detalles</a>
            <a href="#premios" className="text-gray-400 hover:text-blue-400 font-medium transition">Premios</a>
            <a href="#gastronomia" className="text-gray-400 hover:text-blue-400 font-medium transition">Gastronomía</a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-400 hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden bg-[#0f1629] border-t border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-md">Inicio</a>
            <a href="#detalles" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-md">Detalles</a>
            <a href="#premios" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-md">Premios</a>
            <a href="#gastronomia" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-md">Gastronomía</a>
          </div>
        </div>
      )}
    </nav>
  );
}
