import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import portadaImg from '../assets/portada_09.svg';

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
    <section id="inicio" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative min-h-screen flex items-center">
      {/* Imagen de fondo con degradado oscuro de izquierda a derecha */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${portadaImg})` }}
      ></div>
      {/* Gradiente oscuro de izquierda (opaco) a derecha (semi-transparente) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/85 to-[#0a0f1a]/40"></div>
      {/* Gradiente extra abajo para fusionar con la siguiente sección */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent"></div>

      {/* Glow decorativos */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-red-600/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full fade-in">
        <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/15 text-blue-400 text-sm font-semibold tracking-wide mb-6 border border-blue-500/20">
          Gran Evento Profondos
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          I Campeonato de Fulbito <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Varones y Mujeres
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-400 mx-auto mb-10">
          Únete a nosotros para fortalecer la integración deportiva y los lazos de fraternidad, en favor de la I.E. Inicial N° 090 - Pampas de Flores.
        </p>
        
        {/* Contador Regresivo */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="bg-white/5 backdrop-blur-md shadow-lg rounded-2xl p-4 w-24 border border-white/10">
            <span className="block text-3xl font-bold text-blue-400">{timeLeft.days}</span>
            <span className="text-xs text-gray-500 uppercase font-semibold">Días</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md shadow-lg rounded-2xl p-4 w-24 border border-white/10">
            <span className="block text-3xl font-bold text-blue-400">{timeLeft.hours}</span>
            <span className="text-xs text-gray-500 uppercase font-semibold">Horas</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md shadow-lg rounded-2xl p-4 w-24 border border-white/10">
            <span className="block text-3xl font-bold text-blue-400">{timeLeft.minutes}</span>
            <span className="text-xs text-gray-500 uppercase font-semibold">Min</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#premios" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-blue-700 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 gap-2">
            Ver Premios
            <ArrowRight className="w-5 h-5" />
          </a>
          <button 
            onClick={onOpenInscription}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 rounded-full border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 gap-2"
          >
            Inscribir Equipo
          </button>
        </div>
      </div>
    </section>
  );
}
