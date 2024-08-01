import React from 'react';
import { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logementPropTypes } from '../../Utils/prop-types';
import Banner from '../../Components/Banner/index.jsx';
import { bannerHome } from '../../Utils/assets/Home/index.jsx';

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
//Ici la prop passé par Cards est un objet unique donc l'utilisation de arrayOf n'est pas neccessaire.
Card.propTypes = {
  logement: PropTypes.shape(logementPropTypes).isRequired,
};

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

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Vérifiez que ce chemin est correct
        const response = await fetch('/logements.json');
        const data = await response.json();
        setLogements(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="home">
      <Banner title="Chez vous, partout et ailleurs" image={bannerHome} />
      {/* On passe la prop logements à Cards.*/}
      <Cards logements={logements} />
    </main>
  );
}

export default Home;
