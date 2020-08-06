import React, { useEffect, useState } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import Filters from './Filters';
// import DetailedCharacter from './DetailedCharacter';
// import CharacterList from './CharacterList';
import getDataFromApi from '../services/api';
import '../stylesheets/app.scss';

getDataFromApi();

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  console.log(characters);

  return (
    <div>
      <h1>Rick and Morty are coming...</h1>
    </div>
  );
};

export default App;
