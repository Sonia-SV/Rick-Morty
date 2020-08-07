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
  const [filterName, setFilterName] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('All');

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilterCharacters = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    }
    if (data.key === 'species') {
      setFilterSpecies(data.value);
    }
  };

  const renderFilteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return filterSpecies === 'All' ? true : character.species === filterSpecies;
    });
  return (
    <div>
      <Filters handleFilterCharacters={handleFilterCharacters} filterName={filterName} filterSpecies={filterSpecies} />
      <CharacterList characters={renderFilteredCharacters} />
    </div>
  );
};

export default App;
