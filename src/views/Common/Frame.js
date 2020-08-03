import React from 'react';
import './FrameID.css';

const Frame = (props) => {
  const { fileName } = props;
  return (
    <img
      className="appLogo"
      src={`${process.env.PUBLIC_URL}/${fileName}`}
      alt="frame"
    />
  );
};

export default Frame;
