import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/detailedCharacter.scss';

const DetailedCharacter = (props) => {
  console.log(props);
  const { id, name, species, image, planet, episodes, status } = props;
  return (
    <article className="detail">
      <div className="detail__card">
        <img className="detail__card__img" src={image} alt={name} />
        <div clasName="detail__card__info">
          <p>{id}</p>
          <p>Name: {name}</p>
          <p>Species: {species}</p>
          <p>Origin: {planet}</p>
          <p>Nº episodes: {episodes}</p>
          <p>Life situation: {status}</p>
          <Link to="/">Volver</Link>
        </div>
      </div>
    </article>
  );
};

export default DetailedCharacter;
