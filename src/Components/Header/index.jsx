import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { headerLogo } from '../../Utils/assets/Header/index.jsx';

function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img className="header__logo" src={headerLogo} alt="Logo Kasa"></img>
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__liste">
          <li>
            <Link className="header__nav__liste__lien" to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className="header__nav__liste__lien" to="/a-propos">
              A-Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
