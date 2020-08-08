import React from 'react';
import Character from './Character';
import '../stylesheets/layout/characterList.scss';
import ErrorWarning from './ErrorWarning';

const CharacterList = (props) => {
  const resultsLenght = props.characters.length;
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

  const notFoundMessage = <ErrorWarning />;

  const renderSearchResult = resultsLenght === 0 ? notFoundMessage : <section className="section__list">{singleCharacter}</section>;

  return <>{renderSearchResult}</>;
};

export default CharacterList;
