import React from 'react';

const AppLogo = () => (
  <img
    className="appLogo"
    src={`${process.env.PUBLIC_URL}/mainLogo.svg`}
    alt="app-logo"
  />
);

export default AppLogo;
