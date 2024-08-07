import React from 'react';
import ReactDOM from 'react-dom/client';
import './Utils/style/globalStyle.scss';
import AppRouter from './Router/AppRouter'



// Récupère la racine du DOM où l'application sera rendue
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render l'application React à l'intérieur de la balise root du DOM
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
