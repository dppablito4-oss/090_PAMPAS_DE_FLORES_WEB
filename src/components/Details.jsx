import { CalendarDays, MapPin, Target } from 'lucide-react';
import useIsMobile from '../hooks/useIsMobile';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Details() {
  const isMobile = useIsMobile();
  const [ref, isVisible] = useScrollReveal();

  const cardStyle = (hoverColor) => ({
    textAlign: 'center', padding: isMobile ? 20 : 24,
    background: 'rgba(255,255,255,0.02)', borderRadius: 16,
    border: '1px solid rgba(255,255,255,0.06)',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  });

  return (
    <section ref={ref} id="detalles" style={{
      maxWidth: 1100, margin: '0 auto', padding: isMobile ? '48px 16px' : '80px 24px',
      opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
      transition: 'all 0.7s ease-out',
    }}>
      <div style={{ marginBottom: isMobile ? 24 : 40 }}>
        <h2 style={{ margin: 0, fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>📋 Información del Evento</h2>
        <p style={{ margin: '3px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Todo lo que necesitas saber sobre el campeonato.</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: isMobile ? 12 : 16,
      }}>
        <div style={cardStyle()}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,240,255,0.2)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0,240,255,0.05)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}>
          <CalendarDays size={isMobile ? 24 : 28} color="#00f0ff" style={{ margin: '0 auto 10px' }} />
          <h4 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 800, margin: '0 0 4px' }}>Fecha y Hora</h4>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: '0 0 4px' }}>Domingo, 17 de Mayo de 2026</p>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#00f0ff', margin: 0 }}>9:00 AM</p>
        </div>

        <div style={cardStyle()}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.05)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}>
          <MapPin size={isMobile ? 24 : 28} color="#a78bfa" style={{ margin: '0 auto 10px' }} />
          <h4 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 800, margin: '0 0 4px' }}>Ubicación</h4>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: '0 0 4px' }}>Centro Poblado Pampas de Flores</p>
          <p style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>Grass Sintético del C.P.</p>
        </div>

        <div style={cardStyle()}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(34,197,94,0.05)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}>
          <Target size={isMobile ? 24 : 28} color="#22c55e" style={{ margin: '0 auto 10px' }} />
          <h4 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 800, margin: '0 0 4px' }}>Propósito</h4>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Fortalecer la integración deportiva y recaudar fondos a favor de la I.E.I. N° 090.</p>
        </div>
      </div>
    </section>
  );
}
