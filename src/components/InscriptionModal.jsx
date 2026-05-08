import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';

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
        // Supabase no configurado - modo demo
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Modo demo - datos de inscripción:", data);
      } else {
        const { error } = await supabase
          .from('inscriptions')
          .insert([
            { 
              team_name: data.teamName, 
              category: data.category, 
              delegate_name: data.delegateName, 
              phone: data.phone 
            }
          ]);

        if (error) throw error;
      }
      
      setIsSuccess(true);
      
      // Ocultar mensaje de éxito después de unos segundos y cerrar
      setTimeout(() => {
        setIsSuccess(false);
        reset();
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error al guardar la inscripción:", error);
      setErrorMessage("Ocurrió un error al enviar tu inscripción. Inténtalo nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 pt-4 pb-20 text-center sm:p-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 transition-opacity bg-black/80 backdrop-blur-sm"
          ></motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative inline-block w-full max-w-md p-8 overflow-hidden text-left align-middle transition-all transform bg-[#111827] border border-white/10 shadow-2xl rounded-3xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-500 hover:text-gray-300 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {isSuccess ? (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Inscripción Exitosa!</h3>
                <p className="text-gray-400">Hemos registrado a tu equipo. Te contactaremos pronto para confirmar los detalles.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white">Inscribe a tu Equipo</h3>
                  <p className="text-gray-500 mt-2 text-sm">Completa los datos para separar tu cupo en el campeonato.</p>
                </div>

                {errorMessage && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-300">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Nombre del Equipo</label>
                    <input 
                      {...register("teamName", { required: true })}
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition"
                      placeholder="Ej. Los Leones de Pampas"
                    />
                    {errors.teamName && <span className="text-red-400 text-xs mt-1">Este campo es requerido</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Categoría</label>
                    <select 
                      {...register("category", { required: true })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition"
                    >
                      <option value="" className="bg-[#111827]">Selecciona una categoría...</option>
                      <option value="varones" className="bg-[#111827]">Fulbito Varones (S/ 150.00)</option>
                      <option value="mujeres" className="bg-[#111827]">Fulbito Mujeres (S/ 80.00)</option>
                    </select>
                    {errors.category && <span className="text-red-400 text-xs mt-1">Selecciona una categoría</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Nombre del Delegado</label>
                    <input 
                      {...register("delegateName", { required: true })}
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition"
                      placeholder="Nombre completo"
                    />
                    {errors.delegateName && <span className="text-red-400 text-xs mt-1">Este campo es requerido</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Teléfono / WhatsApp</label>
                    <input 
                      {...register("phone", { required: true, pattern: /^[0-9]+$/ })}
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition"
                      placeholder="Ej. 987654321"
                    />
                    {errors.phone && <span className="text-red-400 text-xs mt-1">Ingresa un teléfono válido</span>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition duration-200 mt-4 disabled:opacity-70 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      "Enviar Inscripción"
                    )}
                  </button>
                  <p className="text-xs text-center text-gray-600 mt-4">
                    Al enviar, aceptas que los datos sean procesados para la organización del evento.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
