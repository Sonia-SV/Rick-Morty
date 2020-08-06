import React from 'react';
import '../stylesheets/layout/detailedCharacter.scss';

const DetailedCharacter = (props) => {
  console.log(props);
  const { id, name, species, image, planet, episodes, status } = props;
  return (
    <div>
      <img src={image} />
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
