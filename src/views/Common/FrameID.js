import React from 'react';

const FrameID = () => {
  return (
    <div className="frame-id-container">
      <img
        className="frame-image"
        src={`${process.env.PUBLIC_URL}/id.svg`}
        alt="id-frame"
      />
    </div>
  );
};

export default FrameID;
