import React from 'react';
import { useEffect, useState } from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { logementPropTypes } from '../../Utils/prop-types';
import bannerImage from '../../Utils/assets/image-banner-backGround.png';

function Banner({ title, image }) {
  return (
    <div className="banner">
      <div className="overlay"></div>
      <img className="banner-img" src={image}></img>
      <h1 className="title">{title}</h1>
    </div>
  );
}
// Définition des types de props pour le composant Banner.
Banner.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function Card({ logement }) {
  return (
    <article className="card">
      <div className="card-content">
        <h2>{logement.location}</h2>
      </div>
    </article>
  );
}

// Définition des types de props pour le composant Card et pour le props(logement(sans S)) avec propTypes.shape.
//Ici la prop passé par Cards est un objet unique donc l'utilisation de arrayOf n'est pas neccessaire.
Card.propTypes = {
  logement: PropTypes.shape(logementPropTypes).isRequired,
};

function Cards({ logements }) {
  return (
    <div className="cards">
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
      <main className="home">
        <Banner title="Chez vous, partout et ailleurs" image={bannerImage} />
        {/* On passe la prop logements à Cards.*/}
        <Cards logements={logements} />
      </main>
    </div>
  );
}

export default Home;
