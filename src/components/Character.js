import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/character.scss';

const Character = (props) => {
  const { id, name, image, species, speciesType, gender } = props;

  const genderIcon = gender === 'Female' ? '👱🏼‍♀️' : '🧔🏽';
  const speciesIcon = species === 'Human' ? genderIcon : '👽';

  const speciesDescription = speciesType !== '' ? `-${speciesType}-` : '';
  return (
    <article className="article">
      <span className="article__icon">{speciesIcon}</span>
      <img className="article__img" src={image} alt={name} />
      <div className="article__name">
        <h2>{name}</h2>
      </div>
      <div className="article__species">
        <p>
          {species}
          <span>{speciesDescription}</span>
        </p>
      </div>
      <div className="article__button">
        <Link to={`/character/${id}`}></Link>
        <p>More info...</p>
      </div>
    </article>
  );
};

export default Character;
