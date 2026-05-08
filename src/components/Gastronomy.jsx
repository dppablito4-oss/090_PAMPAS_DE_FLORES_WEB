import { Utensils, ChefHat, Coffee } from 'lucide-react';

export default function Gastronomy() {
  return (
    <section id="gastronomia" className="py-24 bg-[#0a0f1a] border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <span className="text-red-400 font-bold tracking-wider uppercase text-sm flex items-center gap-2 mb-4">
              <Utensils className="w-4 h-4" /> Delicias Locales
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Gastronomía y Platos Típicos</h3>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Durante el encuentro, no solo disfrutarás del mejor deporte, sino también contaremos con la venta de deliciosos platos típicos preparados especialmente para la ocasión. ¡Acompáñanos en familia!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-semibold text-gray-300">Pachamanca de Chancho</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-semibold text-gray-300">Trucha Frita</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-semibold text-gray-300">Mazamorra de Chuñusca</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-semibold text-gray-300">Picarones</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-orange-500/10 rounded-full scale-95 blur-2xl"></div>
              <div className="relative h-full w-full bg-white/5 rounded-full border-4 border-white/5 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-10">
                  <ChefHat className="w-24 h-24 mx-auto text-orange-500/30 mb-6" />
                  <h4 className="text-2xl font-bold text-white mb-2">Comida Tradicional</h4>
                  <p className="text-gray-500">Preparado con ingredientes locales y mucho cariño para apoyar a nuestra institución.</p>
                </div>
              </div>
              <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-3 rounded-full shadow-lg border border-white/10">
                <Coffee className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
