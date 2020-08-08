import React from 'react';
import '../stylesheets/layout/errorWarning.scss';

const ErrorWarning = () => {
  return (
    <section className="section__warning">
      <p>
        <span>The character you were</span> <span>looking for doesn't exist</span>
      </p>
      <img src="https://media.giphy.com/media/QuPFL61aiRYZOtPrTI/giphy.gif" alt="Rick and Morty gif" />
    </section>
  );
};

export default ErrorWarning;
