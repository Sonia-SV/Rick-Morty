import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/layout/character.scss';

const Character = (props) => {
  const { id, name, image, species, speciesType, status } = props;

  const speciesDescription = speciesType !== '' ? `-${speciesType}-` : '';
  return (
    <article className="article">
      <img className="article__icon" src={props.renderStatusIcon(species, status)} alt={'iconDescription'} />

      <Link to={`/character/${id}`}>
        <img className="article__img" src={image} alt={name} />
      </Link>

      <div className="article__name">
        <h2>{name}</h2>
      </div>
      <div className="article__species">
        <p>
          {species}
          <span>{speciesDescription}</span>
        </p>
      </div>
      <Link className="article__button" to={`/character/${id}`}>
        <div></div>
        <p>More info...</p>
      </Link>
    </article>
  );
};

export default Character;

Character.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  speciesType: PropTypes.string,
  status: PropTypes.string,
  renderStatusIcon: PropTypes.func,
};
