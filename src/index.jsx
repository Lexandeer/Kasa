import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import FicheLogement from './Pages/Fiche-Logement';
import APropos from './Pages/A-Propos';
import NotFound from './Pages/NotFound';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './Utils/style/globalStyle.scss';

// Récupère la racine du DOM où l'application sera rendue
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render l'application React à l'intérieur de la balise root du DOM
root.render(
  <React.StrictMode>
    <Router>
      {/* Header est toujours visible, quelle que soit la route */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Route dynamique qui affiche une fiche de logement spécifique en fonction de l'ID passé dans l'URL */}
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
        {/* Route par défaut qui redirige vers la page NotFound si aucune autre route ne correspond */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Footer est toujours visible, quelle que soit la route */}
      <Footer />
    </Router>
  </React.StrictMode>
);
