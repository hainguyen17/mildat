import React from 'react';

const AppLogo = (props) => {
  const { title } = props;
  return (
    <img className="appLogo" src={process.env.PUBLIC_URL + '/mainLogo.svg'} />
  );
};

export default AppLogo;
