import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Filters from './Filters';
import CharacterList from './CharacterList';
import getDataFromApi from '../services/api';
import DetailedCharacter from './DetailedCharacter';
import ErrorURL from './error/ErrorURL';
import ErrorFilter from './error/ErrorFilter';
import '../stylesheets/app.scss';

getDataFromApi();

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))));
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('filter'));
    if (data) {
      setFilterName(data);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(filterName));
  });

  const handleFilterCharacters = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    }
    if (data.key === 'reset') {
      setFilterName('');
    }
  };

  const renderFilteredCharacters = () => {
    return characters.filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    });
  };

  const renderFilterResults = <CharacterList characters={renderFilteredCharacters()} />;

  const renderFilterError = <ErrorFilter filterName={filterName} handleFilterCharacters={handleFilterCharacters} />;

  const renderSearchResult = renderFilteredCharacters().length === 0 ? renderFilterError : renderFilterResults;

  const renderDetailedCharacter = (props) => {
    const routeCharacterId = props.match.params.id;
    const foundCharacter = characters.find((character) => character.id === parseInt(routeCharacterId));
    if (foundCharacter) {
      return (
        <DetailedCharacter
          name={foundCharacter.name}
          image={foundCharacter.image}
          status={foundCharacter.status}
          species={foundCharacter.species}
          gender={foundCharacter.gender}
          planet={foundCharacter.planet}
          episodes={foundCharacter.episodes}
        />
      );
    } else {
      return <ErrorURL />;
    }
  };

  return (
    <React.Fragment>
      <Header />
      <main>
        <Route exact path="/">
          <Filters handleFilterCharacters={handleFilterCharacters} filterName={filterName} />
          {renderSearchResult}
        </Route>
        <Switch>
          <Route exact path="/character/:id" render={renderDetailedCharacter} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
