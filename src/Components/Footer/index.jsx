import React from 'react';
import './index.scss';
import whiteLogo from '../../Utils/assets/white-logo.png';

function Footer() {
  return (
    <footer className="footer">
      <img className="image" src={whiteLogo}></img>
      <h1 className="rights">© 2020 Kasa. All rights reserved</h1>
    </footer>
  );
}

export default Footer;
