import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { EnrollmentModal } from './components/shared/EnrollmentModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Classes } from './pages/Classes';
import { Teachers } from './pages/Teachers';
import { Contact } from './pages/Contact';

function App() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onEnrollClick={() => setIsEnrollModalOpen(true)} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onEnrollClick={() => setIsEnrollModalOpen(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes onEnrollClick={() => setIsEnrollModalOpen(true)} />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/contact" element={<Contact onEnrollClick={() => setIsEnrollModalOpen(true)} />} />
          </Routes>
        </main>

        <Footer />
        <EnrollmentModal isOpen={isEnrollModalOpen} onClose={() => setIsEnrollModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
