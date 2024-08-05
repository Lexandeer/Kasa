import React from 'react';
import './index.scss';
import checkType from '../../Utils/prop-types';

function Banner({ title, image }) {
  // Définition des types de props pour le composant Banner.
  checkType(title, 'string');
  checkType(image, 'string');

  return (
    <div className="banner">
      <div className="banner__overlay"></div>
      <img className="banner__img" src={image}></img>
      {/*On vérifie la présence du titre avant de la renvoyer */}
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
}

export default Banner;
