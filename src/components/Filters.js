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
    </form>
  );
};

export default Filters;

Filters.propTypes = {
  filterName: PropTypes.string,
  handleFilterCharacters: PropTypes.func,
};
