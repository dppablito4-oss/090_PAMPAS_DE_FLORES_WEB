import { useState, useEffect } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import useIsMobile from '../hooks/useIsMobile';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      background: 'rgba(6,6,13,0.92)', backdropFilter: 'blur(20px)',
      padding: isMobile ? '0 16px' : '0 32px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', height: isMobile ? 54 : 62,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: isMobile ? 30 : 36, height: isMobile ? 30 : 36, borderRadius: 8,
            background: 'linear-gradient(135deg, #1e3a8a, #1d4ed8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 800, fontSize: isMobile ? 9 : 11,
            boxShadow: '0 0 12px rgba(0,240,255,0.2)',
          }}>090</div>
          <span style={{
            fontWeight: 800, fontSize: isMobile ? 13 : 15, letterSpacing: '-0.02em',
            background: 'linear-gradient(90deg, #00f0ff, #a78bfa)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>I.E.I. N° 090</span>
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {['Inicio', 'Detalles', 'Premios', 'Gastronomía'].map(item => (
              <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', padding: '6px 10px', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
              >{item}</a>
            ))}
            <a href="#/admin" style={{
              display: 'flex', alignItems: 'center', gap: 4, padding: '6px 10px',
              color: 'rgba(255,255,255,0.25)', textDecoration: 'none', fontSize: 12,
            }}><Settings size={12} /></a>
          </nav>
        )}

        {/* Mobile menu button */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <a href="#/admin" style={{ color: 'rgba(255,255,255,0.25)', display: 'flex' }}><Settings size={16} /></a>
            <button onClick={() => setIsOpen(!isOpen)}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', padding: 4 }}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile dropdown */}
      {isOpen && isMobile && (
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '8px 0' }}>
          {['Inicio', 'Detalles', 'Premios', 'Gastronomía'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}
              style={{ display: 'block', padding: '12px 16px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
