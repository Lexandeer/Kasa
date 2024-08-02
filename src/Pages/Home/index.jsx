import React from 'react';
import { useEffect, useState } from 'react';
import './index.scss';
import Cards from '../../Components/Cards/index.jsx';
import Banner from '../../Components/Banner/index.jsx';
import { bannerHome } from '../../Utils/assets/Home/index.jsx';

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
