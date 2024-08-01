import React, { useState } from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { arrowDrop } from '../../Utils/assets/DropDown/index.jsx';
import '../../Utils/style/animation.scss';

function DropDown({ title, content, id }) {
  const [isOpen, setIsOpen] = useState(null);

  const toggleDropDow = () => {
    //Si l'état prev est null alors le state passe à true et si il est à true il passe à false
    //Mettre le state à Null permet de ne pas afficher l'animation 'retour' lorsque le dropDown est fermé
    setIsOpen((prevState) => (prevState === null ? true : !prevState));
  };

  return (
    <div className={`drop-down-container ${isOpen ? 'expanded' : ''}`}>
      <div className="drop-down__title-arrow">
        <span className="title-arrow__title">{title}</span>
        <img
          src={arrowDrop}
          alt="Fleche"
          /*La classe dynamique permet de changer de classe en fonction d'un évenement ou d'une condition.
            ici j'utilise la méthode ternaire et useState pour créer cette condition */
          className={`title-arrow__arrow ${isOpen === null ? '' : isOpen ? 'rotate' : 'no-rotate'}`}
          onClick={toggleDropDow}
        ></img>
      </div>
      <div
        className={`drop-down__container-content  ${isOpen === null ? 'no-opacity' : isOpen ? 'show-dropDown ' : 'hide-dropDown'}`}
      >
        {Array.isArray(content) ? (
          <ul className="container-content__content">
            {content.map((item) => (
              <li key={`${item}-${id}`}>{item}</li>
            ))}
          </ul>
        ) : (
          <div className="container-content__content">{content}</div>
        )}
      </div>
    </div>
  );
}

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element, //Permet d'accepter du contenu jsx en prop
  ]).isRequired,
  id: PropTypes.string,
};

export default DropDown;
