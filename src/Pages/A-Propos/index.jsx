import React from 'react';
import './index.scss';
import DropDown from '../../Components/DropDown';
import Banner from '../../Components/Banner/index.jsx';
import { BannerApropos } from '../../Utils/assets/A-Propos/index.jsx';

function APropos() {
  const dropDownContent1 = (
    <p>
      Les annonces sur Kasa grantissent une fiabilité totale. Les photos sont
      conformes aux logements, et toutes les informations sont régulièrement
      vérifiées par nos équipes.
    </p>
  );

  const dropDownContent2 = (
    <p>
      La bienveillance fait partie des valeurs fondatrices de Kasa.
      <span style={{ fontWeight: 'bold' }}> T</span>out comportement
      discriminatoire ou de perturbation du voisinage entraînera une exclusion
      de notre platforme.
    </p>
  );

  const dropDownContent4 = (
    <p>
      La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
      les voyageurs, chaque logement correspond aux critères de sécurité établis
      par nos services. En laissant une note aussi bien à l&#39;hôte qu&#39;au
      locataire, cela permet à nos équipes de vérifier que les standards sont
      bien respectés. Nous organisons également des ateliers sur la sécurité
      domestique pour nos hôtes.
    </p>
  );

  return (
    <div className="a-propos-container">
      <Banner image={BannerApropos}></Banner>
      <div className="a-propos-container__container-drop-down">
        <DropDown title="Fiabilité" content={dropDownContent1}></DropDown>
        <DropDown title="Respect" content={dropDownContent2}></DropDown>
        <DropDown title="Service" content={dropDownContent2}></DropDown>
        <DropDown title="Sécurité" content={dropDownContent4}></DropDown>
      </div>
    </div>
  );
}

export default APropos;
