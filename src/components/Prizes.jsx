import { useState } from 'react';
import { Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Prizes() {
  const [activeTab, setActiveTab] = useState('varones');

  return (
    <section id="premios" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-dark mb-4">Categorías y Premios</h3>
          <p className="text-gray-600">Selecciona la categoría para ver los costos de inscripción y los grandes premios a disputarse.</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-full shadow-sm border border-gray-200 inline-flex relative">
            <button 
              onClick={() => setActiveTab('varones')} 
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'varones' ? 'text-white' : 'text-gray-500 hover:text-dark'}`}
            >
              Fulbito Varones
            </button>
            <button 
              onClick={() => setActiveTab('mujeres')} 
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'mujeres' ? 'text-white' : 'text-gray-500 hover:text-dark'}`}
            >
              Fulbito Mujeres
            </button>
            
            {/* Animated Tab Background */}
            <div className={`absolute top-1 bottom-1 w-1/2 rounded-full transition-all duration-300 ${activeTab === 'varones' ? 'left-1 bg-primary' : 'left-1/2 bg-secondary -ml-1 w-[calc(50%+2px)]'}`}></div>
          </div>
        </div>

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab === 'varones' && (
              <motion.div 
                key="varones"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 absolute w-full"
              >
                <div className="bg-primary px-8 py-6 text-white flex justify-between items-center">
                  <h4 className="text-2xl font-bold flex items-center gap-3">
                    <Users /> Categoría Varones
                  </h4>
                  <div className="text-right">
                    <p className="text-blue-200 text-sm">Inscripción por equipo</p>
                    <p className="text-2xl font-bold">S/ 150.00</p>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-6">
                    <li className="flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-50 transition">
                      <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 border-4 border-white shadow-sm">
                        <span className="text-2xl font-black text-yellow-600">1°</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Primer Puesto</p>
                        <p className="text-2xl font-bold text-dark">Un Chancho</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-50 transition">
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 border-4 border-white shadow-sm">
                        <span className="text-2xl font-black text-gray-600">2°</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Segundo Puesto</p>
                        <p className="text-2xl font-bold text-dark">Una Oveja Soltera</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'mujeres' && (
              <motion.div 
                key="mujeres"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 absolute w-full"
              >
                <div className="bg-secondary px-8 py-6 text-white flex justify-between items-center">
                  <h4 className="text-2xl font-bold flex items-center gap-3">
                    <Users /> Categoría Mujeres
                  </h4>
                  <div className="text-right">
                    <p className="text-red-200 text-sm">Inscripción por equipo</p>
                    <p className="text-2xl font-bold">S/ 80.00</p>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-6">
                    <li className="flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-50 transition">
                      <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 border-4 border-white shadow-sm">
                        <span className="text-2xl font-black text-yellow-600">1°</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Primer Puesto</p>
                        <p className="text-2xl font-bold text-dark">Una Oveja</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-50 transition">
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 border-4 border-white shadow-sm">
                        <span className="text-2xl font-black text-gray-600">2°</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Segundo Puesto</p>
                        <p className="text-2xl font-bold text-dark">Un Gallo Madrugador</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
