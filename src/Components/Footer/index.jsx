import React from 'react';
import './index.scss';
import { footerLogo } from '../../Utils/assets/Footer/index.jsx';

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__image" src={footerLogo}></img>
      <h1 className="footer__rights">© 2020 Kasa. All rights reserved</h1>
    </footer>
  );
}

export default Footer;
