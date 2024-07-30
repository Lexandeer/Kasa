import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { headerLogo } from '../../Utils/assets/Header/index.jsx';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={headerLogo} alt="Logo Kasa"></img>
        </Link>
      </div>
      <nav className="nav">
        <ul className="liste">
          <li>
            <Link className="lien" to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className="lien" to="/a-propos">
              A-Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
