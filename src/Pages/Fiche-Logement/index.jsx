import React from 'react';
import { useEffect, useState } from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { logementPropTypes } from '../../Utils/prop-types';
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
  logements: PropTypes.shape(logementPropTypes).isRequired,
};

function FicheLogement() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Vérifiez que ce chemin est correct
        const response = await fetch('/logements.json');
        const data = await response.json();
        console.log('Données récupérées:', data); // Debug: log des données récupérées
        setLogements(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <main>
        <Carrousel logements={logements} />
      </main>
    </div>
  );
}

export default FicheLogement;
