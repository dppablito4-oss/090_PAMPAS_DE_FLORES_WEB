// Ambient glow orbs — animated background like Pablito Expo
export default function AmbientGlow() {
  return (
    <>
      <div style={{
        position: 'fixed', top: '-20%', left: '-10%', width: '40vw', height: '40vw',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
        animation: 'ambientFloat1 20s ease-in-out infinite',
      }} />
      <div style={{
        position: 'fixed', bottom: '-15%', right: '-10%', width: '35vw', height: '35vw',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
        animation: 'ambientFloat2 25s ease-in-out infinite',
      }} />
      <div style={{
        position: 'fixed', top: '40%', right: '20%', width: '20vw', height: '20vw',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,240,255,0.03) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        animation: 'ambientFloat3 18s ease-in-out infinite',
      }} />
    </>
  );
}
