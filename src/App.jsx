import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Details from './components/Details';
import Prizes from './components/Prizes';
import Gastronomy from './components/Gastronomy';
import Footer from './components/Footer';
import InscriptionModal from './components/InscriptionModal';
import AdminPanel from './components/AdminPanel';

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#06060d', fontFamily: "Inter, 'Segoe UI', sans-serif", color: '#fff' }}>
      <Navbar />
      <Hero onOpenInscription={() => setIsModalOpen(true)} />
      <Details />
      <Prizes />
      <Gastronomy />
      <Footer onOpenInscription={() => setIsModalOpen(true)} />
      <InscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
