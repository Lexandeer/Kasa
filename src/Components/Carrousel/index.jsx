import React, { useState } from 'react';
import {
  arrowLeft,
  arrowRight,
  starFilled,
  starEmpty,
} from '../../Utils/assets/Carrousel/index.jsx';
import './index.scss';
import PropTypes from 'prop-types';
import { logementPropTypes } from '../../Utils/prop-types';

function Carrousel({ logement }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    // Utilisation de %(modulo) pour boucler l'index et m'assurer que l'index reste entre 0 et n-1
    setIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + logement.pictures.length) % logement.pictures.length
    );
  };

  return (
    <div>
      <section>
        <div className="fiche-logement__carrousel">
          <button
            className="carrousel__arrow carrousel__arrow--right"
            onClick={handleNext}
          >
            <img src={arrowRight} alt="Next" />
          </button>
          <button
            className="carrousel__arrow carrousel__arrow--left"
            onClick={handlePrev}
          >
            <img src={arrowLeft} alt="Previous" />
          </button>
          {/* Images de pictures pour le carrousel */}
          <img
            src={logement.pictures[index]}
            className="carrousel__pictures"
            alt={logement.title}
          />
          <span className="carrousel__number-of">
            {index + 1}/{logement.pictures.length}
          </span>
        </div>
        <div className="fiche-logement__description">
          <div className="description__title-tags">
            <h1 className="title-tags__title">{logement.title}</h1>
            <span className="title-tags__location">{logement.location}</span>
            <div className="title-tags__tags">
              {logement.tags.map((tag) => (
                <span className="tags__tag" key={`${logement.id}-${tag}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="description__profile-rating">
            <div className="profile-rating__profile">
              <h3 className="profile__name">{logement.host.name}</h3>
              <div className="profile__image-container">
                <img
                  className="profile__image"
                  src={logement.host.picture}
                  alt={logement.host.name}
                />
              </div>
            </div>
            <div className="profile-rating__rating">
              {Array.from({ length: 5 }, (_, i) => (
                <img
                  key={`${logement.id}-${i}`}
                  src={i < logement.rating ? starFilled : starEmpty}
                  alt={i < logement.rating ? 'Filled Star' : 'Empty Star'}
                  className="rating__star"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Carrousel.propTypes = {
  logement: PropTypes.shape(logementPropTypes).isRequired,
};

export default Carrousel;
