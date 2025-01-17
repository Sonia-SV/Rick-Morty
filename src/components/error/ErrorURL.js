import React from 'react';
import '../../stylesheets/layout/errorWarning.scss';

const ErrorURL = () => {
  return (
    <section className="section__warning">
      <p>
        <span>The character's page you were</span> <span>looking for doesn't exist</span>
      </p>
      <img src="https://media.giphy.com/media/QuPFL61aiRYZOtPrTI/giphy.gif" alt="Rick and Morty gif" />
    </section>
  );
};

export default ErrorURL;
