import { MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '51987654321'; // Cambia al número real
const EVENT_URL = 'https://iein090-pampas-de-flores.sypablitodp.site';
const SHARE_TEXT = '⚽ ¡Inscríbete en el I Campeonato de Fulbito Varones y Mujeres! Pampas de Flores, 17 de Mayo. Premios increíbles 🏆';

export default function FloatingActions() {
  const [showShare, setShowShare] = useState(false);

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + '\n\n' + EVENT_URL)}`, '_blank');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(EVENT_URL);
      alert('¡Link copiado!');
    } catch {
      // Fallback
      const input = document.createElement('input');
      input.value = EVENT_URL;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      alert('¡Link copiado!');
    }
  };

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 90,
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10,
    }}>
      {/* Share popup */}
      {showShare && (
        <div style={{
          background: 'rgba(13,13,24,0.97)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0,240,255,0.2)', borderRadius: 16,
          padding: 14, maxWidth: 220,
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          animation: 'fadeIn 0.2s ease-out',
        }}>
          <p style={{ margin: '0 0 10px', fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
            Comparte el evento con tus amigos ⚽
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={shareWhatsApp} style={{
              flex: 1, padding: '8px 12px', border: 'none', borderRadius: 8,
              background: '#25d366', color: '#fff', fontSize: 11, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>WhatsApp</button>
            <button onClick={copyLink} style={{
              flex: 1, padding: '8px 12px', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8, background: 'transparent', color: 'rgba(255,255,255,0.6)',
              fontSize: 11, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
            }}>Copiar Link</button>
          </div>
        </div>
      )}

      {/* Share button */}
      <button onClick={() => setShowShare(!showShare)} style={{
        width: 44, height: 44, borderRadius: '50%',
        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', color: 'rgba(255,255,255,0.5)',
        transition: '0.2s',
      }}>
        <Share2 size={18} />
      </button>

      {/* WhatsApp button */}
      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero info sobre el Campeonato de Fulbito 090')}`}
        target="_blank" rel="noopener noreferrer"
        style={{
          width: 52, height: 52, borderRadius: '50%',
          background: '#25d366', border: '2px solid rgba(37,211,102,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', boxShadow: '0 0 24px rgba(37,211,102,0.3)',
          textDecoration: 'none',
          animation: 'pulse 2s ease-in-out infinite',
        }}>
        <MessageCircle size={22} color="#fff" fill="#fff" />
      </a>
    </div>
  );
}
