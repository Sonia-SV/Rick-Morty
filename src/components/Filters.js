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
      <label htmlFor="name">
        Search by name:
        <input id="name" type="text" onChange={handleSearch} value={props.filterName} />
      </label>
      <label htmlFor="species">
        Search by species:
        <select id="species" value={props.filterSpecies} onChange={handleSearch}>
          <option value="All">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          {/* <option value="Humanoid">Humanoid</option>
          <option value="Unknown">Unknown</option> */}
        </select>
      </label>
    </form>
  );
};

export default Filters;
