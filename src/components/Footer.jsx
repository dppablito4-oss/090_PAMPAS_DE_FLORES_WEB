import useIsMobile from '../hooks/useIsMobile';

export default function Footer({ onOpenInscription }) {
  const isMobile = useIsMobile();

  return (
    <footer style={{
      width: '100%', borderTop: '1px solid rgba(255,255,255,0.04)',
      padding: isMobile ? '12px 16px' : '14px 24px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 8 : '4px 12px',
        textAlign: isMobile ? 'center' : 'left',
      }}>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', margin: 0, letterSpacing: '0.04em' }}>
          ORGANIZADO POR <span style={{ color: 'rgba(0,240,255,0.5)', fontWeight: 700 }}>I.E.I. N° 090</span> · PAMPAS DE FLORES
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={onOpenInscription} style={{
            fontSize: 11, color: 'rgba(0,240,255,0.6)', background: 'none', border: 'none',
            cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600,
          }}>Inscribirse</button>
          <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: 11 }}>·</span>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>© 2026 Evento Profondos</span>
        </div>
      </div>
    </footer>
  );
}
