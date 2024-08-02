import React from 'react';
import PropTypes from 'prop-types';
import { logementPropTypes } from '../../Utils/prop-types';
import Card from '../../Components/Card/index.jsx';
import './index.scss';

function Cards({ logements }) {
  return (
    <div className="home__cards">
      {/*On créer une card pour chaque logement trouvé dans la liste.*/}
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
}

// Définition des types de props pour le composant Cards et pour le props(logementS) avec propTypes.shape et arrayOf.
//ArrayOf définie la prop passé par Home comme un tableau d'objet.
Cards.propTypes = {
  logements: PropTypes.arrayOf(PropTypes.shape(logementPropTypes)).isRequired,
};

export default Cards;
