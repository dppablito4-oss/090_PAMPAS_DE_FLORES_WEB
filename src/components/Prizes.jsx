import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';
import { getContent } from '../lib/contentService';

export default function Prizes() {
  const [activeTab, setActiveTab] = useState('varones');
  const [content, setContent] = useState(getContent);
  const isMobile = useIsMobile();

  // Re-read content on focus (after admin edits)
  useEffect(() => {
    const handleFocus = () => setContent(getContent());
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const prizeItem = (prize) => (
    <div key={prize.id} style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 16, padding: '12px 0' }}>
      {prize.image ? (
        <div style={{
          width: isMobile ? 48 : 56, height: isMobile ? 48 : 56, borderRadius: 12, overflow: 'hidden', flexShrink: 0,
          border: '2px solid rgba(255,255,255,0.06)',
        }}>
          <img src={prize.image} alt={prize.prize} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ) : (
        <div style={{
          width: isMobile ? 40 : 44, height: isMobile ? 40 : 44, borderRadius: '50%',
          background: prize.pos === '1°' ? 'rgba(250,204,21,0.15)' : 'rgba(148,163,184,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <span style={{ fontSize: isMobile ? 14 : 16, fontWeight: 900, color: prize.pos === '1°' ? '#facc15' : '#94a3b8' }}>{prize.pos}</span>
        </div>
      )}
      <div>
        <p style={{ margin: 0, fontSize: isMobile ? 9 : 10, color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{prize.label}</p>
        <p style={{ margin: 0, fontSize: isMobile ? 14 : 16, fontWeight: 800 }}>{prize.prize}</p>
      </div>
    </div>
  );

  const tabBtn = (id, label) => (
    <button key={id} onClick={() => setActiveTab(id)} style={{
      padding: isMobile ? '7px 16px' : '8px 20px', border: 'none', borderRadius: 10,
      fontSize: isMobile ? 12 : 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
      transition: '0.2s', flex: isMobile ? 1 : 'none',
      background: activeTab === id ? 'linear-gradient(135deg, rgba(0,240,255,0.85), rgba(124,58,237,0.85))' : 'transparent',
      color: activeTab === id ? '#000' : 'rgba(255,255,255,0.4)',
    }}>{label}</button>
  );

  return (
    <section id="premios" style={{ maxWidth: 700, margin: '0 auto', padding: isMobile ? '0 16px 48px' : '0 24px 80px' }}>
      <div style={{ marginBottom: isMobile ? 20 : 32 }}>
        <h2 style={{ margin: 0, fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>🏆 Categorías y Premios</h2>
        <p style={{ margin: '3px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Selecciona la categoría para ver premios.</p>
      </div>

      <div style={{
        display: 'flex', gap: 4, marginBottom: isMobile ? 16 : 24,
        background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 4,
        border: '1px solid rgba(255,255,255,0.06)',
      }}>
        {tabBtn('varones', 'Varones')}
        {tabBtn('mujeres', 'Mujeres')}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeTab}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          style={{
            background: 'rgba(13,13,24,0.8)', borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden',
          }}
        >
          <div style={{
            padding: isMobile ? '12px 16px' : '16px 24px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            <h4 style={{ margin: 0, fontSize: isMobile ? 13 : 15, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Users size={isMobile ? 16 : 18} color="#00f0ff" />
              {activeTab === 'varones' ? 'Cat. Varones' : 'Cat. Mujeres'}
            </h4>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>Inscripción</p>
              <p style={{ margin: 0, fontSize: isMobile ? 16 : 18, fontWeight: 900, color: '#00f0ff' }}>
                {activeTab === 'varones' ? 'S/ 150' : 'S/ 80'}
              </p>
            </div>
          </div>
          <div style={{ padding: isMobile ? '8px 16px 16px' : '12px 24px 20px' }}>
            {content.prizes[activeTab].map(prize => prizeItem(prize))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
