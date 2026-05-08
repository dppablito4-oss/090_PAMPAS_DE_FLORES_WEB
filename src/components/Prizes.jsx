import { useState } from 'react';
import { Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const prizeItem = (pos, label, prize, color) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0' }}>
    <div style={{
      width: 44, height: 44, borderRadius: '50%', background: `${color}15`,
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    }}>
      <span style={{ fontSize: 16, fontWeight: 900, color }}>{pos}</span>
    </div>
    <div>
      <p style={{ margin: 0, fontSize: 10, color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</p>
      <p style={{ margin: 0, fontSize: 16, fontWeight: 800 }}>{prize}</p>
    </div>
  </div>
);

export default function Prizes() {
  const [activeTab, setActiveTab] = useState('varones');

  const tabBtn = (id, label) => (
    <button onClick={() => setActiveTab(id)} style={{
      padding: '8px 20px', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 700,
      cursor: 'pointer', fontFamily: 'inherit', transition: '0.2s',
      background: activeTab === id ? 'linear-gradient(135deg, rgba(0,240,255,0.85), rgba(124,58,237,0.85))' : 'transparent',
      color: activeTab === id ? '#000' : 'rgba(255,255,255,0.4)',
    }}>{label}</button>
  );

  return (
    <section id="premios" style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px 80px' }}>
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>🏆 Categorías y Premios</h2>
        <p style={{ margin: '3px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Selecciona la categoría para ver premios e inscripción.</p>
      </div>

      <div style={{ display: 'flex', gap: 4, marginBottom: 24, background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 4, border: '1px solid rgba(255,255,255,0.06)', width: 'fit-content' }}>
        {tabBtn('varones', 'Varones')}
        {tabBtn('mujeres', 'Mujeres')}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeTab}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          style={{ background: 'rgba(13,13,24,0.8)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}
        >
          <div style={{
            padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            <h4 style={{ margin: 0, fontSize: 15, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Users size={18} color="#00f0ff" />
              {activeTab === 'varones' ? 'Categoría Varones' : 'Categoría Mujeres'}
            </h4>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>Inscripción</p>
              <p style={{ margin: 0, fontSize: 18, fontWeight: 900, color: '#00f0ff' }}>
                {activeTab === 'varones' ? 'S/ 150' : 'S/ 80'}
              </p>
            </div>
          </div>
          <div style={{ padding: '12px 24px 20px' }}>
            {activeTab === 'varones' ? (
              <>
                {prizeItem('1°', 'Primer Puesto', 'Un Chancho', '#facc15')}
                {prizeItem('2°', 'Segundo Puesto', 'Una Oveja Soltera', '#94a3b8')}
              </>
            ) : (
              <>
                {prizeItem('1°', 'Primer Puesto', 'Una Oveja', '#facc15')}
                {prizeItem('2°', 'Segundo Puesto', 'Un Gallo Madrugador', '#94a3b8')}
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
