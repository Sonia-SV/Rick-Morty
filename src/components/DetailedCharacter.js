import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/layout/detailedCharacter.scss';

const DetailedCharacter = (props) => {
  const handleDetailContentClick = (event) => {
    event.preventDefault();
  };
  const { name, species, image, planet, episodes, status } = props;

  return (
    <Link to="/">
      <article className="detail">
        <div className="detail__card" onClick={handleDetailContentClick}>
          <div className="detail__card__img">
            <img src={image} alt={name} />
          </div>
          <div className="detail__card__info">
            <Link to="/" className="detail__card__info__link">
              <span>
                <i className="fas fa-arrow-left"></i> Back
              </span>
            </Link>
            <img className="detail__card__icon" src={props.renderStatusIcon(species, status)} alt={'iconDescription'} />
            <div className="detail__card__info__content">
              <h3>
                <span className="detail__card__info__content__title">Name:</span> <span className="detail__card__info__content__result"> {name}</span>
              </h3>
              <p>
                <span className="detail__card__info__content__title">Species:</span>
                <span className="detail__card__info__content__result"> {species}</span>
              </p>

              <p>
                <span className="detail__card__info__content__title">Life situation:</span>
                <span className="detail__card__info__content__result"> {status} </span>
              </p>
              <p>
                <span className="detail__card__info__content__title">Origin:</span>
                <span className="detail__card__info__content__result"> {planet}</span>
              </p>
              <p>
                <span className="detail__card__info__content__title">Nº episodes:</span>
                <span className="detail__card__info__content__result"> {episodes}</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default DetailedCharacter;

DetailedCharacter.propTypes = {
  episodes: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  planet: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  renderStatusIcon: PropTypes.func,
};
