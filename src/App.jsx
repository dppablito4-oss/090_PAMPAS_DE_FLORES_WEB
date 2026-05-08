import { useState, useEffect } from 'react';
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
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if URL has ?admin parameter
    const checkAdmin = () => {
      const params = new URLSearchParams(window.location.search);
      setIsAdmin(params.has('admin'));
    };
    checkAdmin();
    window.addEventListener('popstate', checkAdmin);
    return () => window.removeEventListener('popstate', checkAdmin);
  }, []);

  if (isAdmin) return <AdminPanel />;
  return <LandingPage />;
}

export default App;
