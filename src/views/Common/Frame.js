import React from 'react';

const Frame = (props) => {
  const { title } = props;
  return (
    <img className="appLogo" src={process.env.PUBLIC_URL + '/frame.svg'} />
  );
};

export default Frame;
