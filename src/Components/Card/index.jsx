import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import checkType from '../../Utils/prop-types';

function Card({ logement }) {
  // Définition des types de props pour le composant Card
  checkType(logement, 'object');
  checkType(logement.id, 'string');
  checkType(logement.cover, 'string');
  checkType(logement.location, 'string');

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

export default Card;
