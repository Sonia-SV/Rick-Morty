import React from 'react';
import Character from './Character';
import '../stylesheets/layout/characterList.scss';

const CharacterList = (props) => {
  const singleCharacter = props.characters.map((character) => {
    return (
      <Character key={character.id} name={character.name} species={character.species} speciesType={character.speciesType} image={character.image} />
    );
  });
  return <ul>{singleCharacter}</ul>;
};

export default CharacterList;
