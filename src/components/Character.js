import React from 'react';
import '../stylesheets/layout/character.scss';

const Character = (props) => {
  return (
    <li>
      <h2>{props.name}</h2>
      <img src={props.image} />
      <p>{props.species}</p>
    </li>
  );
};

export default Character;
