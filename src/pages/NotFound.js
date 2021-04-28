import React from 'react';
import notFound from '../assets/images/404.png';

const NotFound = () => {
  return (
    <div className="centered">
      <img className="not-found" src={notFound} alt="notFound" />
    </div>
  );
};

export default NotFound;
