import React from 'react';
import './Button.css';

const Button = (props) => {
  const { title, ...extraProps } = props;
  return (
    <button className="button" type="button" {...extraProps}>
      {title}
    </button>
  );
};

export default Button;
