import React from 'react';
import '../stylesheets/layout/filters.scss';

const Filters = (props) => {
  const handleSearch = (event) => {
    event.preventDefault();
    props.handleFilterCharacters({
      key: event.currentTarget.id,
      value: event.currentTarget.value,
    });
  };
  return (
    <form className="filters">
      <label htmlFor="name" className="filters__label">
        <span className="filters__name">Search by name: </span>
        <input id="name" type="text" onChange={handleSearch} className="filters__input" value={props.filterName} />
      </label>
      <label htmlFor="species" className="filters__label">
        <span className="filters__name"> Search by species: </span>

        <select id="species" value={props.filterSpecies} className="filters__input" onChange={handleSearch}>
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
