import React from 'react';
import { useEffect, useState } from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { logementPropTypes } from '../../Utils/prop-types';
import { useParams } from 'react-router-dom';
//import DropDownOpen from '../../Components/Dropdown-open';

function Carrousel({ logement }) {
  const [index, setIndex] = useState(0);

  if (!logement || !logement.pictures) {
    // Affiche un message de chargement si logement ou pictures est null
    return <div>Chargement...</div>;
  }

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
        <div>
          <button className="arrow-right" onClick={handleNext}>
            <img src="assets\images\arrow_right.png" />
          </button>
          <button className="arrow-left" onClick={handlePrev}>
            <img src="assets\images\arrow_left.png" />
          </button>
          <img src={logement.pictures[index]}></img>
          <span className="numberOf">
            {index + 1}/{logement.pictures.length}
          </span>
        </div>
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <div>
          <span>{/* one span for every tags*/}</span>
          <i>{/* stars by rating*/}</i>
        </div>
        <div>
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

  return (
    <div>
      <main>
        <Carrousel logement={logement} />
      </main>
    </div>
  );
}

export default FicheLogement;
