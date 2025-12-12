import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { PageRoute } from './types';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={PageRoute.HOME} element={<Home />} />
            <Route path={PageRoute.ABOUT} element={<About />} />
            <Route path={PageRoute.SERVICES} element={<Services />} />
            <Route path={PageRoute.CONTACT} element={<Contact />} />
            <Route path={PageRoute.PRIVACY} element={<Legal />} />
            <Route path={PageRoute.TERMS} element={<Legal />} />
            <Route path="*" element={<Navigate to={PageRoute.HOME} replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;