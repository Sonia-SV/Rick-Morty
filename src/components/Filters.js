import React from 'react';
import '../stylesheets/layout/filters.scss';

const Filters = (props) => {
  const handleInputText = (event) => {
    props.handleFilterText(event.target.value);
  };
  return (
    <form>
      <label htmlFor="name">
        Search a character:
        <input id="name" type="text" onChange={handleInputText} value={props.filterText} />
      </label>
    </form>
  );
};

export default Filters;
