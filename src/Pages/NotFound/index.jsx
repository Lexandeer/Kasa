import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container-error">
      <span className="container-error__error">404</span>
      <span className="container-error__message">
        Oups! La page que vous demandez n&#39;existe pas.
      </span>
      <Link className="container-error__link" to="/">
        Retourner sur la page d&#39;accueil
      </Link>
    </div>
  );
}

export default NotFound;
