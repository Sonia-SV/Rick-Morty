import React from 'react';
import PropTypes from 'prop-types';
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
        <input id="name" type="text" maxLength="10" onChange={handleSearch} className="filters__input" value={props.filterName} />
      </label>
      <label htmlFor="species" className="filters__label">
        <span className="filters__name"> Search by species: </span>

        <select id="species" value={props.filterSpecies} className="filters__input" onChange={handleSearch}>
          <option value="All">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          {/* <option value="Humanoid">Humanoid</option>
          <option value="Unknown">Unknown</option> */}
        </select>
      </label>
      <label htmlFor="species" className="filters__label">
        <span className="filters__name"> Search by status: </span>

        <select id="status" value={props.filterStatus} className="filters__input" onChange={handleSearch}>
          <option value="All">All</option>
          <option value="Dead">Dead</option>
          <option value="Alive">Alive</option>
          <option value="Unknown">Unknown</option>
        </select>
      </label>
      <label htmlFor="rest" className="filters__label">
        <span className="filters__name"> Clear: </span>
        <button id="reset" className="filters__input filters__button" onClick={handleSearch}>
          <i className="fas fa-ban"></i>
        </button>
      </label>
    </form>
  );
};

export default Filters;

Filters.propTypes = {
  filterName: PropTypes.string,
  handleFilterCharacters: PropTypes.func,
};
