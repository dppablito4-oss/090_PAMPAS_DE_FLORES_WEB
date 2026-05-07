import { Info } from 'lucide-react';

export default function Footer({ onOpenInscription }) {
  return (
    <footer className="bg-dark text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold text-sm">
                090
              </div>
              <h4 className="text-xl font-bold">I.E.I. N° 090</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Centro Poblado Pampas de Flores. <br />
              "Año de la esperanza y el fortalecimiento de la democracia"
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-6">Enlaces Rápidos</h5>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition">Inicio</a></li>
              <li><a href="#detalles" className="text-gray-400 hover:text-white transition">Detalles del Evento</a></li>
              <li><a href="#premios" className="text-gray-400 hover:text-white transition">Inscripciones y Premios</a></li>
              <li><a href="#gastronomia" className="text-gray-400 hover:text-white transition">Gastronomía</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-6">Inscripciones</h5>
            <p className="text-gray-400 text-sm mb-4">
              Para inscribir a tu equipo de manera online, haz clic en el botón de abajo, o comunícate con la dirección.
            </p>
            <button 
              onClick={onOpenInscription}
              className="inline-flex items-center gap-2 text-primary bg-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              <Info className="w-4 h-4" />
              Inscribirse Ahora
            </button>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 I.E.I. N° 090 Pampas de Flores. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Evento Profondos Institucional</p>
        </div>
      </div>
    </footer>
  );
}
