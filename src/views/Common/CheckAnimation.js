import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../lottie/checkGIF.json';
import './CheckAnimation.css';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default (props) => {
  const { children, ...rest } = props;
  return (
    <div>
      <div className="check-wrapper">
        <Lottie
          className="check-animation"
          style={{
            margin: '0',
            transform: 'translateX(-30%) translateY(25%)',
          }}
          options={defaultOptions}
          {...rest}
        />
      </div>
      {children}
    </div>
  );
};
