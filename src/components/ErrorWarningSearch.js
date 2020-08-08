import React from 'react';
import '../stylesheets/layout/errorWarning.scss';

const ErrorWarningSearch = (props) => {
  console.log(props);
  return (
    <section className="section__warning">
      <p>
        <span>We can't find nothing by</span> <span>{props.filterName}</span>
      </p>
      <img src="https://media.giphy.com/media/QuPFL61aiRYZOtPrTI/giphy.gif" alt="Rick and Morty gif" />
    </section>
  );
};

export default ErrorWarningSearch;
