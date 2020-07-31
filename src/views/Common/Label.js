import React from 'react';
import './Label.css';

const classNames = {
  label1: 'label1',
  label2: 'label2',
};
const Label = (props) => {
  const { title, type } = props;
  return <div className={`common-label ${classNames[type]}`}> {title}</div>;
};

export default Label;
