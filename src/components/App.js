import React, { useEffect, useState } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import Filters from './Filters';
// import DetailedCharacter from './DetailedCharacter';
import CharacterList from './CharacterList';
import getDataFromApi from '../services/api';
import '../stylesheets/app.scss';

getDataFromApi();

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
