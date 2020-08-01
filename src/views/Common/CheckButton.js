import React from 'react';

const CheckButton = (props) => {
  const { title } = props;
  return (
    <img className="appLogo" src={process.env.PUBLIC_URL + '/checkbutton.svg'} />
  );
};
  
export default CheckButton;
