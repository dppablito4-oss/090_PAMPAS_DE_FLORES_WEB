import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'sticky', top: 0, zIndex: 50,
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    background: 'rgba(6,6,13,0.92)',
    backdropFilter: 'blur(20px)',
    padding: '0 32px',
  };

  const linkStyle = {
    fontSize: '13px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', padding: '6px 10px',
    transition: 'color 0.2s', fontWeight: 500,
  };

  return (
    <header style={navStyle}>
      <div style={{ maxWidth: 1200, margin: '0 auto', height: 62, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8, background: 'linear-gradient(135deg, #1e3a8a, #1d4ed8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 800, fontSize: 11,
            boxShadow: '0 0 12px rgba(0,240,255,0.2)'
          }}>090</div>
          <span style={{
            fontWeight: 800, fontSize: 15, letterSpacing: '-0.02em',
            background: 'linear-gradient(90deg, #00f0ff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>I.E.I. N° 090</span>
        </div>

        <nav className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {['Inicio', 'Detalles', 'Premios', 'Gastronomía'].map(item => (
            <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} style={linkStyle}
              onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
            >{item}</a>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '8px 0' }}>
          {['Inicio', 'Detalles', 'Premios', 'Gastronomía'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}
              style={{ display: 'block', padding: '10px 16px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 14 }}>
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
