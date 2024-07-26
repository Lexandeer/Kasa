import React from 'react';
import { useEffect, useState } from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { logementPropTypes } from '../../Utils/prop-types';
import { useParams } from 'react-router-dom';
import arrowLeft from '../../Utils/assets/arrow_left.png';
import arrowRight from '../../Utils/assets/arrow_right.png';
import starFilled from '../../Utils/assets/starFilled.png';
import starEmpty from '../../Utils/assets/starEmpty.png';
//import DropDownOpen from '../../Components/Dropdown-open';

function Carrousel({ logement }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    //Je me sert ici de %(modulo) pour boucler l'index et m'assurer que l'index reste entre 0 et n-1
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
        <div className="ficheLogement__carrousel">
          <button
            className="ficheLogement__carrousel__arrow ficheLogement__carrousel__arrow--right"
            onClick={handleNext}
          >
            <img src={arrowRight} />
          </button>
          <button
            className="ficheLogement__carrousel__arrow ficheLogement__carrousel__arrow--left"
            onClick={handlePrev}
          >
            <img src={arrowLeft} />
          </button>
          {/*Images de pictures pour le carrousel */}
          <img
            src={logement.pictures[index]}
            className="ficheLogement__carrousel__pictures"
          ></img>
          <span className="ficheLogement__carrousel__numberOf">
            {index + 1}/{logement.pictures.length}
          </span>
        </div>

        <div className="ficheLogement__carrousel__description">
          <div className="ficheLogement__carrousel__description__titleAndTags">
            <h1 className="ficheLogement__carrousel__description__titleAndTags__title">
              {logement.title}
            </h1>
            <span className="ficheLogement__carrousel__description__titleAndTags__location">
              {logement.location}
            </span>
            <div className="ficheLogement__carrousel__description__titleAndTags__tags">
              {logement.tags.map((tag) => (
                <span
                  className="ficheLogement__carrousel__description__titleAndTags__tags__tag"
                  key={`${logement.id}-${tag}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="ficheLogement__carrousel__description__nameAndRating">
            <div className="ficheLogement__carrousel__description__nameAndRating__profile">
              <h3 className="ficheLogement__carrousel__description__nameAndRating__profile__name">
                {logement.host.name}
              </h3>
              <div className="ficheLogement__carrousel__description__nameAndRating__profile__image-container">
                <img
                  className="ficheLogement__carrousel__description__nameAndRating__profile__image"
                  src={logement.host.picture}
                ></img>
              </div>
            </div>

            <div className="ficheLogement__carrousel__description__nameAndRating__rating">
              {Array.from({ length: 5 }, (_, i) => (
                <img
                  key={`${logement.id}-${i}`}
                  src={i < logement.rating ? starFilled : starEmpty}
                  alt={i < logement.rating ? 'Filled Star' : 'Empty Star'}
                  className="ficheLogement__carrousel__description__nameAndRating__rating__image"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="dropDownOpen">
          {/* <DropDownOpen />
          <DropDownOpen />*/}
        </div>
      </section>
    </div>
  );
}

Carrousel.propTypes = {
  logement: PropTypes.shape(logementPropTypes).isRequired,
};

function FicheLogement() {
  // Récupère l'ID du logement à partir de l'URL
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Récupère les données du fichier logements.json
        const response = await fetch('/logements.json');
        const data = await response.json();
        // Trouve le logement correspondant à l'ID dans les données
        //(item) correspond au logement, on cherche à retrouver le logement qui à le même ID que dans l'URL
        const foundLogement = data.find((item) => item.id === id);
        // Met à jour l'état avec le logement trouvé
        setLogement(foundLogement);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    }

    fetchData();
  }, [id]);

  // Affiche un message de chargement si logement ou pictures est null pour éviter les erreurs
  // et informer l'utilisateur que les données sont en cours de récupération.
  if (!logement) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <main className="ficheLogement">
        <Carrousel
          logement={logement}
          arrow-right-img={arrowRight}
          arrow-left-img={arrowLeft}
        />
      </main>
    </div>
  );
}

export default FicheLogement;
