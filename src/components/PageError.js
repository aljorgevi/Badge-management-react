import React from 'react';
import '../styles/components/PageError.css';

const PageError = (props) => {
  return <div className="PageError">{props.error.message}</div>;
};

export default PageError;
