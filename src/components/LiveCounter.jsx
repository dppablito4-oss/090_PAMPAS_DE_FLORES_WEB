import { useState, useEffect } from 'react';
import { Users, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';
import useIsMobile from '../hooks/useIsMobile';
import useScrollReveal from '../hooks/useScrollReveal';

export default function LiveCounter() {
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const isMobile = useIsMobile();
  const [ref, isVisible] = useScrollReveal(0.3);

  useEffect(() => {
    async function fetchCount() {
      if (!supabase) {
        // Demo mode — random count
        setCount(Math.floor(Math.random() * 8) + 4);
        return;
      }
      try {
        const { count: total, error } = await supabase
          .from('inscriptions')
          .select('*', { count: 'exact', head: true });
        if (!error && total !== null) setCount(total);
      } catch { setCount(0); }
    }
    fetchCount();
    // Poll every 30s
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, []);

  // Animated counter
  useEffect(() => {
    if (!isVisible) return;
    let current = 0;
    const step = Math.max(1, Math.floor(count / 20));
    const timer = setInterval(() => {
      current += step;
      if (current >= count) { current = count; clearInterval(timer); }
      setDisplayCount(current);
    }, 50);
    return () => clearInterval(timer);
  }, [count, isVisible]);

  return (
    <div ref={ref} style={{
      maxWidth: 700, margin: '0 auto', padding: isMobile ? '0 16px 40px' : '0 24px 60px',
      opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s ease-out',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? 16 : 24,
        padding: isMobile ? '16px 20px' : '20px 32px', borderRadius: 16,
        background: 'linear-gradient(135deg, rgba(0,240,255,0.06), rgba(124,58,237,0.06))',
        border: '1px solid rgba(0,240,255,0.12)',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'linear-gradient(135deg, rgba(0,240,255,0.2), rgba(124,58,237,0.2))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Users size={20} color="#00f0ff" />
          </div>
          <div>
            <div style={{
              fontSize: isMobile ? 24 : 32, fontWeight: 900, color: '#00f0ff',
              lineHeight: 1, fontVariantNumeric: 'tabular-nums',
            }}>{displayCount}</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>
              Equipos Inscritos
            </div>
          </div>
        </div>

        <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.08)', display: isMobile ? 'none' : 'block' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <TrendingUp size={14} color="#22c55e" />
          <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 600 }}>
            {count > 0 ? '¡Cupos llenándose!' : 'Inscripciones abiertas'}
          </span>
        </div>
      </div>
    </div>
  );
}
