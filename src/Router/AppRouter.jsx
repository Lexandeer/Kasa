import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Pages/Home';
import FicheLogement from '../Pages/Fiche-Logement';
import APropos from '../Pages/A-Propos';
import NotFound from '../Pages/NotFound';

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;