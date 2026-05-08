import { CalendarDays, MapPin, Target } from 'lucide-react';

export default function Details() {
  return (
    <section id="detalles" className="py-20 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white">Información Oficial</h3>
          <p className="mt-4 text-gray-500">Todo lo que necesitas saber sobre el encuentro deportivo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-500/15 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <CalendarDays className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Fecha y Hora</h4>
            <p className="text-gray-500 mb-2">Domingo, 17 de Mayo de 2026</p>
            <p className="text-gray-200 font-semibold text-lg">9:00 AM</p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300">
            <div className="w-14 h-14 bg-red-500/15 text-red-400 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Ubicación</h4>
            <p className="text-gray-500 mb-2">Centro Poblado Pampas de Flores</p>
            <p className="text-gray-200 font-semibold">Grass Sintético del C.P.</p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300">
            <div className="w-14 h-14 bg-green-500/15 text-green-400 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Propósito</h4>
            <p className="text-gray-500">
              Fortalecer la integración deportiva y recaudar fondos a favor de la I.E.I. N° 090.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
