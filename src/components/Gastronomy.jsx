import { Utensils } from 'lucide-react';

const foods = ['Pachamanca de Chancho', 'Trucha Frita', 'Mazamorra de Chuñusca', 'Picarones'];

export default function Gastronomy() {
  return (
    <section id="gastronomia" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 80px' }}>
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>🍽️ Gastronomía</h2>
        <p style={{ margin: '3px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Platos típicos preparados con ingredientes locales.</p>
      </div>

      <div style={{
        padding: '32px', borderRadius: 20,
        background: 'rgba(0,240,255,0.03)', border: '1px solid rgba(0,240,255,0.1)',
      }}>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 600 }}>
          Durante el encuentro, no solo disfrutarás del mejor deporte, sino también contaremos con la venta de deliciosos platos típicos preparados especialmente para la ocasión. ¡Acompáñanos en familia!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {foods.map(food => (
            <div key={food} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px',
              background: 'rgba(255,255,255,0.03)', borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.04)',
            }}>
              <Utensils size={14} color="#00f0ff" />
              <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>{food}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
