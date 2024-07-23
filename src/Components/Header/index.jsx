import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Kasa</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/fiche-logement">Fiche-Logement</Link>
          </li>
          <li>
            <Link to="/a-propos">A-Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
