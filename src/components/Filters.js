import React from 'react';
import '../stylesheets/layout/filters.scss';

const Filters = (props) => {
  const handleSearch = (event) => {
    event.preventDefault();
    props.handleFilterCharacters({
      key: event.currentTarget.name,
      value: event.currentTarget.value,
    });
  };
  console.log(props);
  return (
    <form>
      <label htmlFor="name">
        Search a character:
        <input id="name" name="name" type="text" onChange={handleSearch} value={props.filterName} />
      </label>
      <label htmlFor="species">
        Species:
        <select name="species" value={props.filterSpecies} onChange={handleSearch}>
          <option value="All">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Humanoid">Humanoid</option>
          <option value="Unknown">Unknown</option>
        </select>
      </label>
    </form>
  );
};

export default Filters;
