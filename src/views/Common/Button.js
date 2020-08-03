import React from 'react';
import './Button.css';

const mapTypeToClassName = {
  transparent: 'trans-button',
  small: 'small-button',
  normal: 'button',
};

const Button = (props) => {
  const { title, className, small, transparent, ...extraProps } = props;

  let buttonClassName = small
    ? mapTypeToClassName.small
    : mapTypeToClassName.normal;

  if (transparent) {
    buttonClassName += ' ' + mapTypeToClassName.transparent;
  }

  return (
    <button
      className={`${buttonClassName} ${className || ''}`}
      type="button"
      {...extraProps}
    >
      {title}
    </button>
  );
};

export default Button;
