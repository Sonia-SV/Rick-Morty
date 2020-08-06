import React, { useEffect, useState } from 'react';
// import { Switch, Route } from 'react-router-dom';
import Filters from './Filters';
//import DetailedCharacter from './DetailedCharacter';
import CharacterList from './CharacterList';
import getDataFromApi from '../services/api';
import '../stylesheets/app.scss';

getDataFromApi();

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilterText = (text) => {
    setFilterText(text);
  };

  const renderFilteredCharacters = () => {
    return characters.filter((character) => {
      return character.name.toLowerCase().includes(filterText.toLowerCase());
    });
  };

  return (
    <div>
      <Filters handleFilterText={handleFilterText} filterText={filterText} />
      <CharacterList characters={renderFilteredCharacters()} />
    </div>
  );
};

export default App;
