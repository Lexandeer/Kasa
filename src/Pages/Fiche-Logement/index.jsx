import React, { useEffect, useState } from 'react';
import './index.scss';
import { useParams, useNavigate } from 'react-router-dom';
import DropDown from '../../Components/DropDown/index.jsx';
import Carrousel from '../../Components/Carrousel/index.jsx';

function FicheLogement() {
  // Récupère l'ID du logement à partir de l'URL grâce à useParams
  const { id } = useParams();
  // Initialise le hook useNavigate pour permettre la navigation programmée
  const navigate = useNavigate();
  // Déclare un état local 'logement' pour stocker les données du logement récupéré.
  // On initialise à null pour indiquer que le logement n'a pas encore été chargé.
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Récupère les données du fichier logements.json
        const response = await fetch('/logements.json');
        // Converti ces données
        const data = await response.json();
        // Trouve le logement correspondant à l'ID dans les données
        //(item) correspond au logement, on cherche à retrouver le logement qui a le même ID que dans l'URL
        const foundLogement = data.find((item) => item.id === id);

        if (foundLogement) {
          // Met à jour l'état avec le logement trouvé
          setLogement(foundLogement);
        } else {
          // Redirige vers la page NotFound si l'ID n'est pas trouvé grâce au hook useNavigate
          navigate('/not-found');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        navigate('/not-found');
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
      <main className="fiche-logement">
        <Carrousel logement={logement} />
        <div className="fiche-logement__drop-down-container">
          <DropDown
            title="Description"
            content={logement.description}
            id={id}
          />
          <DropDown title="Equipement" content={logement.equipments} id={id} />
        </div>
      </main>
    </div>
  );
}

export default FicheLogement;
