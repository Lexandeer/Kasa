import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logementPropTypes } from '../../Utils/prop-types';
import './index.scss';

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="home__cards__card-link">
      <article className="home__cards__card-link__card">
        <img
          className="home__cards__card-link__card__card-image"
          src={logement.cover}
        ></img>
        <div className="home__cards__card-link__card__card-content">
          <h2>{logement.location}</h2>
        </div>
      </article>
    </Link>
  );
}

// Définition des types de props pour le composant Card et pour le props(logement(sans S)) avec propTypes.shape.
// '.shape' défini la prop passé comme ayant une structure particulière : (logement.PropTypes )
//Ici la prop passé par Cards est un objet unique donc l'utilisation de arrayOf n'est pas neccessaire.
Card.propTypes = {
  logement: PropTypes.shape(logementPropTypes).isRequired,
};

export default Card;
