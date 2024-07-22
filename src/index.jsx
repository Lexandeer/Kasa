import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Utils/style/index.sass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/A-Propos">A-Propos</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
