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
  // Déclare un state local 'index' pour suivre l'image actuellement affichée dans le carrousel.
  const [index, setIndex] = useState(0);

  // Fonciton pour passer à l'image suivante.
  const handleNext = () => {
    // Utilisation de %(modulo) pour boucler l'index et s'assurer que l'index reste entre 0 et logement.pictures.length - 1
    setIndex(
      (prevIndex) =>
        // Exemple :
        // [ (4 + 1 = 5) % 6 = 5 ] l'index à bien été incrémenté
        // [ (5 + 1 = 6) % 6 = 0 ] l'index à bien été bouclé et retourne à index = 0
        (prevIndex + 1) % logement.pictures.length
    );
  };

  // Fonction pour passer à l'image précédante.
  const handlePrev = () => {
    // Utilisation de %(modulo) pour boucler l'index vers l'arrière, en s'assurant que l'index reste toujours compris entre 0 et logement.pictures.length - 1
    setIndex(
      (prevIndex) =>
        // Exemple :
        // [ (2 - 1 = 1 + 4 = 5) % 4 = 1 ] l'index à bien été décrémenté
        // [ (0 - 1 = -1 + 4 = 3) % 4 = 3 ] lorsque le dividende est plus petit que le diviseur, le résultat du modulo est toujours le dividende lui-même.
        // C'est comme ça que l'on boucle le carrousel
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
              {/* On utilise 'array.from' pour créer un tableau de 5 éléments, pour 5 étoiles.
              Le premier paramètre de la fonction fléchée est un underscore (_) parce que
              nous n'avons pas besoin d'utiliser la valeur de cet argument dans notre logique car nous utilisont déjà logement.rating.
              Le underscore est une convention qui indique que ce paramètre est intentionnellement
              ignoré. 
              Ici, seul l'index (i) est utilisé pour comparer l'indice de chaque étoile
              avec le rating du logement, afin de déterminer si l'étoile doit être remplie ou vide.*/}
              {Array.from({ length: 5 }, (_, i) => (
                // Chaque étoile est remplie ou vide en fonction du rating du logement
                <img
                  key={`${logement.id}-${i}`} // On créer un clé avec l'id du logement et l'index.
                  // Si l'index est plus petit que le rating du logement alors on génère une étoile pleine.
                  // Sinon on génère une étoile vide.
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
