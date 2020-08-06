import React from 'react';
import Character from './Character';
import '../stylesheets/layout/characterList.scss';

const CharacterList = (props) => {
  console.log(props);
  const singleCharacter = props.characters.map((character) => {
    return <Character key={character.id} name={character.name} species={character.species} image={character.image} />;
  });
  return <ul>{singleCharacter}</ul>;
};

export default CharacterList;
