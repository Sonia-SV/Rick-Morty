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
        <span>The creature that you are looking for isn't here</span>
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
