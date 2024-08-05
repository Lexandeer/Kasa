import React from 'react';
import Card from '../../Components/Card/index.jsx';
import './index.scss';
import checkType from '../../Utils/prop-types/index.jsx';

function Cards({ logements }) {
  checkType(logements, 'array');

  return (
    <div className="home__cards">
      {/*On créer une card pour chaque logement trouvé dans la liste.*/}
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
}

export default Cards;
