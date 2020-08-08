import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import '../stylesheets/layout/characterList.scss';
const CharacterList = (props) => {
  const singleCharacter = props.characters.map((character) => {
    return (
      <Character
        key={character.id}
        id={character.id}
        name={character.name}
        species={character.species}
        speciesType={character.speciesType}
        image={character.image}
        gender={character.gender}
      />
    );
  });

  return <section className="section__list">{singleCharacter}</section>;
};

export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.array,
};
