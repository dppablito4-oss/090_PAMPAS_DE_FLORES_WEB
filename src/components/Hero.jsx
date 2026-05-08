import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import useIsMobile from '../hooks/useIsMobile';
import portadaImg from '../assets/portada_01.svg';

export default function Hero({ onOpenInscription }) {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00' });
  const isMobile = useIsMobile();

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
    <section id="inicio" style={{
      position: 'relative', overflow: 'hidden',
      minHeight: isMobile ? '85vh' : '100vh',
      display: 'flex', alignItems: 'center',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${portadaImg})`,
        backgroundSize: 'cover', backgroundPosition: isMobile ? 'center' : 'center right',
        opacity: isMobile ? 0.25 : 0.45,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: isMobile
          ? 'radial-gradient(circle at center, rgba(6,6,13,0.5) 0%, rgba(6,6,13,0.9) 100%)'
          : 'linear-gradient(to right, rgba(6,6,13,0.95) 0%, rgba(6,6,13,0.7) 35%, rgba(6,6,13,0.15) 70%, rgba(6,6,13,0.05) 100%)',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,13,0.6) 0%, transparent 30%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #06060d 0%, transparent 25%)' }} />

      <div style={{
        position: 'relative', zIndex: 10, textAlign: 'center',
        padding: isMobile ? '60px 20px 40px' : '80px 24px 48px',
        width: '100%',
      }} className="fade-in">
        <div style={{
          display: 'inline-block', padding: '4px 12px',
          background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.2)',
          borderRadius: 20, fontSize: isMobile ? 10 : 11, color: '#00f0ff',
          fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14,
        }}>⚽ I Campeonato Profondos</div>

        <h1 style={{
          margin: '0 0 12px', fontSize: isMobile ? '1.8rem' : 'clamp(2.2rem, 5vw, 3.5rem)',
          fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1,
          background: 'linear-gradient(135deg, #fff 0%, #a78bfa 50%, #00f0ff 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>Campeonato de Fulbito<br/>Varones y Mujeres</h1>

        <p style={{
          margin: '0 auto 24px', maxWidth: isMobile ? 320 : 460,
          fontSize: isMobile ? 13 : 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
          padding: isMobile ? '0 8px' : 0,
        }}>
          Únete a nosotros para fortalecer la integración deportiva y los lazos de fraternidad, en favor de la I.E. Inicial N° 090 - Pampas de Flores.
        </p>

        <div style={{
          display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: isMobile ? 32 : 48,
          flexDirection: isMobile ? 'column' : 'row', alignItems: 'center',
          padding: isMobile ? '0 24px' : 0,
        }}>
          <a href="#premios" style={{
            padding: isMobile ? '12px 24px' : '14px 28px',
            background: 'linear-gradient(135deg, #00f0ff, #7c3aed)',
            border: 'none', borderRadius: 12, color: '#000', fontWeight: 800,
            fontSize: isMobile ? 14 : 15, cursor: 'pointer', textDecoration: 'none',
            boxShadow: '0 0 28px rgba(0,240,255,0.25)',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            width: isMobile ? '100%' : 'auto', justifyContent: 'center',
          }}>
            Ver Premios <ArrowRight size={16} />
          </a>
          <button onClick={onOpenInscription} style={{
            padding: isMobile ? '12px 24px' : '14px 28px',
            background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 12, color: 'rgba(255,255,255,0.7)',
            fontWeight: 600, fontSize: isMobile ? 14 : 15,
            cursor: 'pointer', fontFamily: 'inherit',
            width: isMobile ? '100%' : 'auto',
          }}>Inscribir Equipo</button>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: isMobile ? 12 : 20, maxWidth: isMobile ? 260 : 320, margin: '0 auto',
        }}>
          {[
            { val: timeLeft.days, label: 'Días' },
            { val: timeLeft.hours, label: 'Horas' },
            { val: timeLeft.minutes, label: 'Min' }
          ].map(item => (
            <div key={item.label} style={{
              textAlign: 'center', padding: isMobile ? 6 : 8,
              background: 'rgba(255,255,255,0.02)', borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.04)',
            }}>
              <div style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: 900, color: '#00f0ff' }}>{item.val}</div>
              <div style={{ fontSize: isMobile ? 9 : 10, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
