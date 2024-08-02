import React from 'react';
import { useEffect, useState } from 'react';
import './index.scss';
import Cards from '../../Components/Cards/index.jsx';
import Banner from '../../Components/Banner/index.jsx';
import { bannerHome } from '../../Utils/assets/Home/index.jsx';

function Home() {
  // Déclare un état local 'logements' pour stocker les données récupérées.
  const [logements, setLogements] = useState([]);

  // On Utilise useEffect pour exécuter le code de récupération des données lorsque le composant est monté
  useEffect(() => {
    async function fetchData() {
      try {
        // Fait une requête HTTP GET pour obtenir les données
        const response = await fetch('/logements.json');
        // Convertit la réponse en JSON
        const data = await response.json();
        // Met à jour l'état 'logements' avec les données récupérées
        setLogements(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    }

    fetchData();
  }, []); // Le tableau de dépendances vide indique que cet effet doit s'exécuter uniquement lors du montage du composant

  return (
    <main className="home">
      <Banner title="Chez vous, partout et ailleurs" image={bannerHome} />
      {/* On passe la prop logements à Cards.*/}
      <Cards logements={logements} />
    </main>
  );
}

export default Home;
