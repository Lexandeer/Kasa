import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Banner({ title, image }) {
  return (
    <div className="banner">
      <div className="banner__overlay"></div>
      <img className="banner__img" src={image}></img>
      {/*On vérifie la présence du titre avant de la renvoyer */}
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
}
// Définition des types de props pour le composant Banner.
Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default Banner;
