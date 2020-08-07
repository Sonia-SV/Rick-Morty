import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/character.scss';

const Character = (props) => {
  const { id, name, image, species, speciesType } = props;
  return (
    <li>
      <Link to={`/character/${id}`}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>{species}</p>
        <small>{speciesType !== '' ? `-${speciesType}-` : ''}</small>
      </Link>
    </li>
  );
};

export default Character;
