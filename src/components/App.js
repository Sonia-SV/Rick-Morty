import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Filters from './Filters';
import DetailedCharacter from './DetailedCharacter';
import CharacterList from './CharacterList';
import getApiData from '../services/api';
import '../stylesheets/app.scss';

const App = () => {
  return (
    <div>
      <h1>Rick and Morty are coming...</h1>
    </div>
  );
};

export default App;
