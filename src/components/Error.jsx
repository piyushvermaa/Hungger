import React from 'react';

const ErrorComponent = () => {
  return (
    <div id="error">
      <div id="box">
        <h3 className="error-header">ERROR 404</h3>
        <p>
          Things are a little <span className="unstable">unstable</span> here
        </p>
        <p>I suggest come back later</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
