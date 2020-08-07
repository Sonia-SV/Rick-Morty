import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/detailedCharacter.scss';

const DetailedCharacter = (props) => {
  console.log(props);
  const { id, name, species, image, planet, episodes, status } = props;
  return (
    <div>
      <Link to="/">Volver</Link>
      <img src={image} alt={name} />
      <p>{id}</p>
      <p>{name}</p>
      <p>{species}</p>
      <p>{planet}</p>
      <p>{episodes}</p>
      <p>{status}</p>
    </div>
  );
};

export default DetailedCharacter;
