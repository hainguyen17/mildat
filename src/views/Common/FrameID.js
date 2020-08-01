import React from 'react';

const FrameID = (props) => {
  const { title } = props;
  return (
    <div className="frame-id-container">
    <img className="" src={process.env.PUBLIC_URL + '/id.svg'} />
    </div>
  );
};
  
export default FrameID;
