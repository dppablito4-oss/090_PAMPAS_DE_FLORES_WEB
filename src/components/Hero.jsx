import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import portadaImg from '../assets/portada_01.svg';

export default function Hero({ onOpenInscription }) {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00' });

  useEffect(() => {
    const targetDate = new Date("May 17, 2026 09:00:00").getTime();
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) { clearInterval(countdown); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000*60*60*24)).toString().padStart(2,'0'),
        hours: Math.floor((distance % (1000*60*60*24)) / (1000*60*60)).toString().padStart(2,'0'),
        minutes: Math.floor((distance % (1000*60*60)) / (1000*60)).toString().padStart(2,'0')
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  return (
    <section id="inicio" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Background image — visible like Grafiplot */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${portadaImg})`,
        backgroundSize: 'cover', backgroundPosition: 'center right',
        opacity: 0.45,
      }} />
      {/* Gradient overlay: left dark → right shows image */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(6,6,13,0.95) 0%, rgba(6,6,13,0.7) 35%, rgba(6,6,13,0.15) 70%, rgba(6,6,13,0.05) 100%)',
      }} />
      {/* Top subtle vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(6,6,13,0.6) 0%, transparent 30%)',
      }} />
      {/* Bottom fade into next section */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, #06060d 0%, transparent 25%)',
      }} />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '80px 24px 48px', width: '100%' }} className="fade-in">
        {/* Badge */}
        <div style={{
          display: 'inline-block', padding: '4px 14px',
          background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.2)',
          borderRadius: 20, fontSize: 11, color: '#00f0ff',
          fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16
        }}>⚽ I Campeonato Profondos</div>

        {/* Title */}
        <h1 style={{
          margin: '0 0 14px', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1,
          background: 'linear-gradient(135deg, #fff 0%, #a78bfa 50%, #00f0ff 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>Campeonato de Fulbito<br/>Varones y Mujeres</h1>

        <p style={{
          margin: '0 auto 28px', maxWidth: 460, fontSize: 16,
          color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
        }}>
          Únete a nosotros para fortalecer la integración deportiva y los lazos de fraternidad, en favor de la I.E. Inicial N° 090 - Pampas de Flores.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          <a href="#premios" style={{
            padding: '14px 28px', background: 'linear-gradient(135deg, #00f0ff, #7c3aed)',
            border: 'none', borderRadius: 12, color: '#000', fontWeight: 800, fontSize: 15,
            cursor: 'pointer', letterSpacing: '0.02em', textDecoration: 'none',
            boxShadow: '0 0 28px rgba(0,240,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 8
          }}>
            Ver Premios <ArrowRight size={16} />
          </a>
          <button onClick={onOpenInscription} style={{
            padding: '14px 28px', background: 'transparent',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12,
            color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: 15,
            cursor: 'pointer', fontFamily: 'inherit',
          }}>Inscribir Equipo</button>
        </div>

        {/* Countdown */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, justifyContent: 'center', maxWidth: 320, margin: '0 auto' }}>
          {[
            { val: timeLeft.days, label: 'Días' },
            { val: timeLeft.hours, label: 'Horas' },
            { val: timeLeft.minutes, label: 'Min' }
          ].map(item => (
            <div key={item.label} style={{
              textAlign: 'center', padding: 8,
              background: 'rgba(255,255,255,0.02)', borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.04)',
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#00f0ff' }}>{item.val}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
