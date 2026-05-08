import { useState, useRef } from 'react';
import { ArrowLeft, Upload, Trash2, Save, RotateCcw, Image, Trophy, Utensils } from 'lucide-react';
import { getContent, saveContent, resetContent } from '../lib/contentService';

const c = {
  bg: '#06060d', card: 'rgba(13,13,24,0.97)', border: 'rgba(255,255,255,0.08)',
  accent: '#00f0ff', accent2: '#7c3aed', text: '#fff', muted: 'rgba(255,255,255,0.4)',
};

function ImageUploader({ image, onImageChange, label }) {
  const fileRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => onImageChange(ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontSize: 11, color: c.muted, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
      <div style={{
        width: '100%', aspectRatio: '16/10', borderRadius: 12, overflow: 'hidden',
        border: `1px dashed ${c.border}`, background: 'rgba(255,255,255,0.02)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
        cursor: 'pointer',
      }} onClick={() => fileRef.current?.click()}>
        {image ? (
          <>
            <img src={image} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <button onClick={(e) => { e.stopPropagation(); onImageChange(''); }} style={{
              position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,0.7)', border: 'none',
              borderRadius: 8, padding: 6, cursor: 'pointer', color: '#ef4444',
            }}><Trash2 size={14} /></button>
          </>
        ) : (
          <div style={{ textAlign: 'center', color: c.muted }}>
            <Upload size={24} style={{ margin: '0 auto 8px', opacity: 0.5 }} />
            <p style={{ margin: 0, fontSize: 12 }}>Click para subir imagen</p>
            <p style={{ margin: '4px 0 0', fontSize: 10, opacity: 0.5 }}>JPG, PNG, SVG</p>
          </div>
        )}
      </div>
      <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} style={{ display: 'none' }} />
    </div>
  );
}

export default function AdminPanel() {
  const [content, setContent] = useState(getContent);
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState('foods');

  const handleSave = () => {
    saveContent(content);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    const def = resetContent();
    setContent(def);
  };

  const updateFood = (id, image) => {
    setContent(prev => ({
      ...prev,
      foods: prev.foods.map(f => f.id === id ? { ...f, image } : f)
    }));
  };

  const updatePrize = (cat, id, image) => {
    setContent(prev => ({
      ...prev,
      prizes: {
        ...prev.prizes,
        [cat]: prev.prizes[cat].map(p => p.id === id ? { ...p, image } : p)
      }
    }));
  };

  const tabBtn = (id, label, icon) => (
    <button onClick={() => setTab(id)} style={{
      padding: '8px 16px', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 600,
      cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 6,
      background: tab === id ? 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(124,58,237,0.15))' : 'transparent',
      color: tab === id ? c.accent : c.muted, transition: '0.2s',
      border: tab === id ? `1px solid rgba(0,240,255,0.2)` : '1px solid transparent',
    }}>{icon}{label}</button>
  );

  return (
    <div style={{ minHeight: '100vh', background: c.bg, color: c.text, fontFamily: "Inter, 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50, borderBottom: `1px solid ${c.border}`,
        background: 'rgba(6,6,13,0.95)', backdropFilter: 'blur(20px)', padding: '0 20px',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="/" style={{ color: c.muted, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              <ArrowLeft size={16} /> <span style={{ fontSize: 12 }}>Volver</span>
            </a>
            <div style={{ width: 1, height: 20, background: c.border }} />
            <span style={{ fontSize: 14, fontWeight: 700 }}>Panel de Contenido</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={handleReset} style={{
              padding: '6px 14px', border: `1px solid ${c.border}`, borderRadius: 8,
              background: 'transparent', color: c.muted, fontSize: 12, cursor: 'pointer',
              fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 4,
            }}><RotateCcw size={12} /> Reset</button>
            <button onClick={handleSave} style={{
              padding: '6px 14px', border: 'none', borderRadius: 8,
              background: saved ? '#22c55e' : 'linear-gradient(135deg, #00f0ff, #7c3aed)',
              color: saved ? '#fff' : '#000', fontSize: 12, fontWeight: 700, cursor: 'pointer',
              fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 4,
              transition: 'background 0.3s',
            }}><Save size={12} /> {saved ? '¡Guardado!' : 'Guardar'}</button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '24px 20px 80px' }}>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
          {tabBtn('foods', 'Gastronomía', <Utensils size={14} />)}
          {tabBtn('prizes', 'Premios', <Trophy size={14} />)}
        </div>

        {tab === 'foods' && (
          <div>
            <p style={{ fontSize: 13, color: c.muted, margin: '0 0 20px' }}>
              Sube imágenes para cada plato típico. Se mostrarán en la sección de Gastronomía.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
              {content.foods.map(food => (
                <div key={food.id} style={{
                  background: c.card, borderRadius: 16, padding: 16,
                  border: `1px solid ${c.border}`,
                }}>
                  <h4 style={{ margin: '0 0 12px', fontSize: 14, fontWeight: 700 }}>{food.name}</h4>
                  <ImageUploader
                    image={food.image}
                    onImageChange={(img) => updateFood(food.id, img)}
                    label="Imagen del plato"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'prizes' && (
          <div>
            <p style={{ fontSize: 13, color: c.muted, margin: '0 0 20px' }}>
              Sube imágenes para los premios de cada categoría.
            </p>

            {['varones', 'mujeres'].map(cat => (
              <div key={cat} style={{ marginBottom: 32 }}>
                <h3 style={{
                  fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: cat === 'varones' ? c.accent : '#a78bfa', margin: '0 0 16px',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <Trophy size={14} /> Categoría {cat === 'varones' ? 'Varones' : 'Mujeres'}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
                  {content.prizes[cat].map(prize => (
                    <div key={prize.id} style={{
                      background: c.card, borderRadius: 16, padding: 16,
                      border: `1px solid ${c.border}`,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                        <div style={{
                          width: 28, height: 28, borderRadius: '50%',
                          background: prize.pos === '1°' ? 'rgba(250,204,21,0.15)' : 'rgba(148,163,184,0.15)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 12, fontWeight: 900, color: prize.pos === '1°' ? '#facc15' : '#94a3b8',
                        }}>{prize.pos}</div>
                        <div>
                          <p style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>{prize.prize}</p>
                          <p style={{ margin: 0, fontSize: 10, color: c.muted }}>{prize.label}</p>
                        </div>
                      </div>
                      <ImageUploader
                        image={prize.image}
                        onImageChange={(img) => updatePrize(cat, prize.id, img)}
                        label="Imagen del premio"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
