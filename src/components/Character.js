import React from 'react';
import '../stylesheets/layout/character.scss';

const Character = (props) => {
  const { name, image, species } = props;
  return (
    <li>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{species}</p>
    </li>
  );
};

export default Character;
