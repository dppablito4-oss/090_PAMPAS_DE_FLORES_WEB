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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-sm' : 'glass-nav'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
              090
            </div>
            <div>
              <h1 className="font-bold text-lg text-primary leading-tight">I.E.I. N° 090</h1>
              <p className="text-xs text-gray-500 font-medium">PAMPAS DE FLORES</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-primary font-medium transition">Inicio</a>
            <a href="#detalles" className="text-gray-600 hover:text-primary font-medium transition">Detalles</a>
            <a href="#premios" className="text-gray-600 hover:text-primary font-medium transition">Premios</a>
            <a href="#gastronomia" className="text-gray-600 hover:text-primary font-medium transition">Gastronomía</a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Inicio</a>
            <a href="#detalles" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Detalles</a>
            <a href="#premios" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Premios</a>
            <a href="#gastronomia" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Gastronomía</a>
          </div>
        </div>
      )}
    </nav>
  );
}
