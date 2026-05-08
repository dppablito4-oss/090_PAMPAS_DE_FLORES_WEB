import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { supabase } from '../lib/supabase';

const inputStyle = {
  width: '100%', padding: '10px 14px', borderRadius: 10, fontSize: 14,
  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
  color: '#fff', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box',
};

export default function InscriptionModal({ isOpen, onClose }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMessage('');
    try {
      if (!supabase) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        const { error } = await supabase.from('inscriptions').insert([{
          team_name: data.teamName, category: data.category,
          delegate_name: data.delegateName, phone: data.phone
        }]);
        if (error) throw error;
      }
      setIsSuccess(true);
      // 🎉 Confetti explosion!
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: ['#00f0ff', '#7c3aed', '#facc15', '#22c55e'] });
      setTimeout(() => confetti({ particleCount: 60, spread: 100, origin: { y: 0.5 } }), 300);
      setTimeout(() => { setIsSuccess(false); reset(); onClose(); }, 3500);
    } catch (error) {
      setErrorMessage("Error al enviar. Inténtalo nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }} />

          <motion.div initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 16 }}
            style={{
              position: 'relative', width: '100%', maxWidth: 420, padding: 24,
              background: 'rgba(13,13,24,0.97)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20, backdropFilter: 'blur(20px)',
            }}>

            <button onClick={onClose} style={{
              position: 'absolute', top: 16, right: 16, background: 'none', border: 'none',
              color: 'rgba(255,255,255,0.3)', cursor: 'pointer',
            }}><X size={20} /></button>

            {isSuccess ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <CheckCircle size={48} color="#22c55e" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 800 }}>¡Inscripción Exitosa!</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Te contactaremos pronto.</p>
              </div>
            ) : (
              <>
                <h3 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 800 }}>Inscribe tu Equipo</h3>
                <p style={{ margin: '0 0 20px', fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>Completa los datos para reservar tu cupo.</p>

                {errorMessage && (
                  <div style={{ marginBottom: 16, padding: '10px 14px', borderRadius: 10, background: 'rgba(255,0,0,0.08)', border: '1px solid rgba(255,0,0,0.15)', display: 'flex', gap: 8, alignItems: 'center' }}>
                    <AlertCircle size={16} color="#ef4444" />
                    <span style={{ fontSize: 12, color: '#fca5a5' }}>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div>
                    <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 4, display: 'block' }}>Nombre del Equipo</label>
                    <input {...register("teamName", { required: true })} type="text" style={inputStyle} placeholder="Ej. Los Leones" />
                    {errors.teamName && <span style={{ fontSize: 11, color: '#ef4444' }}>Requerido</span>}
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 4, display: 'block' }}>Categoría</label>
                    <select {...register("category", { required: true })} style={{ ...inputStyle, appearance: 'none' }}>
                      <option value="" style={{ background: '#0d0d18' }}>Selecciona...</option>
                      <option value="varones" style={{ background: '#0d0d18' }}>Varones (S/ 150)</option>
                      <option value="mujeres" style={{ background: '#0d0d18' }}>Mujeres (S/ 80)</option>
                    </select>
                    {errors.category && <span style={{ fontSize: 11, color: '#ef4444' }}>Requerido</span>}
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 4, display: 'block' }}>Delegado</label>
                    <input {...register("delegateName", { required: true })} type="text" style={inputStyle} placeholder="Nombre completo" />
                    {errors.delegateName && <span style={{ fontSize: 11, color: '#ef4444' }}>Requerido</span>}
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 4, display: 'block' }}>WhatsApp</label>
                    <input {...register("phone", { required: true, pattern: /^[0-9]+$/ })} type="tel" style={inputStyle} placeholder="987654321" />
                    {errors.phone && <span style={{ fontSize: 11, color: '#ef4444' }}>Teléfono inválido</span>}
                  </div>
                  <button type="submit" disabled={isSubmitting} style={{
                    padding: '12px', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 800,
                    cursor: 'pointer', fontFamily: 'inherit', marginTop: 4,
                    background: 'linear-gradient(135deg, #00f0ff, #7c3aed)', color: '#000',
                    boxShadow: '0 0 20px rgba(0,240,255,0.2)', opacity: isSubmitting ? 0.6 : 1,
                  }}>
                    {isSubmitting ? '...' : 'Enviar Inscripción'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
