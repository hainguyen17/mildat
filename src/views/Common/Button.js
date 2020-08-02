import React from 'react';
import './Button.css';

const Button = (props) => {
  const { title, buttonClass ,...extraProps } = props;
  return (
    <button className={buttonClass} type="button" {...extraProps}>
      {title}
    </button>
  );
};

export default Button;
