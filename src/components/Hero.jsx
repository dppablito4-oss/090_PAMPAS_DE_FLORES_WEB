import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onOpenInscription }) {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00' });

  useEffect(() => {
    const targetDate = new Date("May 17, 2026 09:00:00").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(countdown);
        setTimeLeft({ days: '00', hours: '00', minutes: '00' });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <section id="inicio" className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-pattern overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-red-50 opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center fade-in">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-sm font-semibold tracking-wide mb-6">
          Gran Evento Profondos
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-dark mb-6">
          I Campeonato de Fulbito <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            Varones y Mujeres
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto mb-10">
          Únete a nosotros para fortalecer la integración deportiva y los lazos de fraternidad, en favor de la I.E. Inicial N° 090 - Pampas de Flores.
        </p>
        
        {/* Contador Regresivo */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="bg-white shadow-lg rounded-2xl p-4 w-24 border border-gray-100">
            <span className="block text-3xl font-bold text-primary">{timeLeft.days}</span>
            <span className="text-xs text-gray-500 uppercase font-semibold">Días</span>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-4 w-24 border border-gray-100">
            <span className="block text-3xl font-bold text-primary">{timeLeft.hours}</span>
            <span className="text-xs text-gray-500 uppercase font-semibold">Horas</span>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-4 w-24 border border-gray-100">
            <span className="block text-3xl font-bold text-primary">{timeLeft.minutes}</span>
            <span className="text-xs text-gray-500 uppercase font-semibold">Min</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#premios" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-blue-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 gap-2">
            Ver Premios
            <ArrowRight className="w-5 h-5" />
          </a>
          <button 
            onClick={onOpenInscription}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-blue-50 hover:bg-blue-100 rounded-full shadow-sm hover:shadow-md transition-all duration-300 gap-2"
          >
            Inscribir Equipo
          </button>
        </div>
      </div>
    </section>
  );
}
