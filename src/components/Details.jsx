import { CalendarDays, MapPin, Target } from 'lucide-react';

export default function Details() {
  return (
    <section id="detalles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-dark">Información Oficial</h3>
          <p className="mt-4 text-gray-600">Todo lo que necesitas saber sobre el encuentro deportivo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-light rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mb-6">
              <CalendarDays className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-dark mb-3">Fecha y Hora</h4>
            <p className="text-gray-600 mb-2">Domingo, 17 de Mayo de 2026</p>
            <p className="text-gray-800 font-semibold text-lg">9:00 AM</p>
          </div>

          <div className="bg-light rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-red-100 text-secondary rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-dark mb-3">Ubicación</h4>
            <p className="text-gray-600 mb-2">Centro Poblado Pampas de Flores</p>
            <p className="text-gray-800 font-semibold">Grass Sintético del C.P.</p>
          </div>

          <div className="bg-light rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-dark mb-3">Propósito</h4>
            <p className="text-gray-600">
              Fortalecer la integración deportiva y recaudar fondos a favor de la I.E.I. N° 090.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
