import React, { useState } from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { arrowDrop } from '../../Utils/assets/DropDown/index.jsx';
import '../../Utils/style/animation.scss';

function DropDown({ title, content, id }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDow = () => {
    setIsOpen(!isOpen);
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
          className={`title-arrow__arrow ${isOpen ? 'rotate' : 'no-rotate'}`}
          onClick={toggleDropDow}
        ></img>
      </div>
      <div
        className={`drop-down__container-content  ${isOpen ? 'show-dropDown ' : 'hide-dropDown'}`}
      >
        {Array.isArray(content) ? (
          <ul className="container-content__content">
            {content.map((item) => (
              <li key={`${item}-${id}`}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="container-content__content">{content}</p>
        )}
      </div>
    </div>
  );
}

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  id: PropTypes.string.isRequired,
};

export default DropDown;
