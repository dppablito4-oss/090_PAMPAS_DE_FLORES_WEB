import { useState, useEffect } from 'react';
import { Utensils } from 'lucide-react';
import useIsMobile from '../hooks/useIsMobile';
import useScrollReveal from '../hooks/useScrollReveal';
import { getContent } from '../lib/contentService';

export default function Gastronomy() {
  const [content, setContent] = useState(getContent);
  const isMobile = useIsMobile();
  const [ref, isVisible] = useScrollReveal();

  useEffect(() => {
    const handleFocus = () => setContent(getContent());
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  return (
    <section ref={ref} id="gastronomia" style={{
      maxWidth: 1100, margin: '0 auto', padding: isMobile ? '0 16px 48px' : '0 24px 80px',
      opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
      transition: 'all 0.7s ease-out 0.2s',
    }}>
      <div style={{ marginBottom: isMobile ? 20 : 32 }}>
        <h2 style={{ margin: 0, fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>🍽️ Gastronomía</h2>
        <p style={{ margin: '3px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Platos típicos preparados con ingredientes locales.</p>
      </div>

      <div style={{
        padding: isMobile ? 20 : 32, borderRadius: isMobile ? 16 : 20,
        background: 'rgba(0,240,255,0.03)', border: '1px solid rgba(0,240,255,0.1)',
      }}>
        <p style={{
          fontSize: isMobile ? 13 : 14, color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.7, margin: '0 0 20px', maxWidth: 600,
        }}>
          Durante el encuentro contaremos con la venta de deliciosos platos típicos. ¡Acompáñanos en familia!
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 12,
        }}>
          {content.foods.map(food => (
            <div key={food.id} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: isMobile ? '8px 12px' : '10px 14px',
              background: 'rgba(255,255,255,0.03)', borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.04)',
              overflow: 'hidden',
            }}>
              {food.image ? (
                <div style={{
                  width: 40, height: 40, borderRadius: 8, overflow: 'hidden', flexShrink: 0,
                }}>
                  <img src={food.image} alt={food.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ) : (
                <Utensils size={14} color="#00f0ff" style={{ flexShrink: 0 }} />
              )}
              <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>{food.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
