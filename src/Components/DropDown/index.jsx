import React, { useState } from 'react';
import './index.scss';
import { arrowDrop } from '../../Utils/assets/DropDown/index.jsx';
import '../../Utils/style/animation.scss';
import checkType from '../../Utils/prop-types/index.jsx';

function DropDown({ title, content, id }) {
  checkType(title, 'string');
  checkType(id, 'string');
  // "Content" peut être un tableau ou une string en fonction du logement.
  if (typeof content !== 'string' && !Array.isArray(content)) {
    throw new Error(
      `Type error: expected type was string or array but got '${typeof content}'`
    );
  }
  // On déclare un état local 'isOpen' pour suivre l'état du drop-down (ouvert ou fermé).
  const [isOpen, setIsOpen] = useState(null);

  // La fonction toggleDropDown permet de changer le state de 'isOpen'
  const toggleDropDown = () => {
    // Si l'état précédent est null, on le passe à true (le drop-down s'ouvre)
    // Sinon, on inverse l'état actuel (true devient false, false devient true)
    // L'état null au départ permet d'éviter l'animation de fermeture lors du chargement initial de la page
    setIsOpen((prevState) => (prevState === null ? true : !prevState));
  };

  return (
    // Classe dynamique ->
    <div className={`drop-down-container ${isOpen ? 'expanded' : ''}`}>
      <div className="drop-down__title-arrow">
        <span className="title-arrow__title">{title}</span>
        <img
          src={arrowDrop}
          alt="Fleche"
          /*La classe dynamique permet de changer de classe en fonction d'un évenement ou d'une condition.
            ici j'utilise la méthode ternaire et useState pour créer cette condition */
          className={`title-arrow__arrow ${isOpen === null ? '' : isOpen ? 'rotate' : 'no-rotate'}`}
          // On déclanche la fonction toggleDropDown grâce à Onclick.
          onClick={toggleDropDown}
        ></img>
      </div>
      <div
        // Classe dynamique ->
        className={`drop-down__container-content  ${isOpen === null ? 'no-opacity' : isOpen ? 'show-dropDown ' : 'hide-dropDown'}`}
      >
        {/* Si le contenu est un tableau, on utilise .map pour afficher chaque élément sous forme de liste.  
            (Content) est une prop passé à DropDown, elle contient logement.description. 
            On vérifie si c'est un tableau grâce à la méthode 'array.isArray'. */}
        {Array.isArray(content) ? (
          <ul className="container-content__content">
            {content.map((item) => (
              // On crée une clé unique pour chaque élément de la liste en combinant l'item et l'id du logement
              // Cela permet à React de suivre efficacement chaque élément de la liste et de minimiser les mises à jour du DOM.
              <li key={`${item}-${id}`}>{item}</li>
            ))}
          </ul>
        ) : (
          // Si le contenu n'est pas un tableau, on affiche le contenu tel-quel
          <div className="container-content__content">{content}</div>
        )}
      </div>
    </div>
  );
}

// Définit les types de prop attendus pour le composant DropDown

export default DropDown;
