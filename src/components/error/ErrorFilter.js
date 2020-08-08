import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/layout/errorWarning.scss';

const ErrorFilter = (props) => {
  const handleReset = (event) => {
    event.preventDefault();
    props.handleFilterCharacters({
      key: event.currentTarget.id,
    });
  };
  return (
    <section className="section__warning">
      <p>
        <span>There's no one </span> <span>here called</span>
        <span>
          <em>{props.filterName}</em>
        </span>
      </p>
      <button id="reset" onClick={handleReset}>
        Try again!
      </button>
      .
    </section>
  );
};

export default ErrorFilter;

ErrorFilter.propTypes = {
  filterName: PropTypes.string,
  handleFilterCharacters: PropTypes.func,
};
