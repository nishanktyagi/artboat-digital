import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { ContactModal } from './components/ContactModal';

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <motion.button
        type="button"
        aria-label="Open enquiry form"
        onClick={() => setIsEnquiryOpen(true)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-4 left-auto right-4 md:left-auto z-40 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-4 text-white font-semibold shadow-2xl shadow-purple-900/25 transition-shadow hover:shadow-purple-900/40 md:bottom-6 md:left-6 md:px-7 md:py-4"
      >
        <MessageCircle size={20} aria-hidden="true" />
        Enquire Now
      </motion.button>
      <ContactModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}
