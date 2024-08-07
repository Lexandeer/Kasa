import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import { headerLogo } from '../../Utils/assets/Header/index.jsx';

function Header() {
  return (
    <header className="header">
      <div>
        {/* Lien de navigation vers la page d'accueil */}
        <NavLink to="/">
          <img className="header__logo" src={headerLogo} alt="Logo Kasa"></img>
        </NavLink>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__liste">
          <li>
            {/* Lien de navigation vers la page d'accueil */}
            <NavLink
              className={({ isActive }) =>
                isActive ? 'header__nav__liste__lien active' : 'header__nav__liste__lien'
              }
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            {/* Lien de navigation vers la page À propos */}
            <NavLink
              className={({ isActive }) =>
                isActive ? 'header__nav__liste__lien active' : 'header__nav__liste__lien'
              }
              to="/a-propos"
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
