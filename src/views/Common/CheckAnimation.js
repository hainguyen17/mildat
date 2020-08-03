import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../lottie/checkGIF.json';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default (props) => {
  const { className, ...rest } = props;
  return (
    <div className={className}>
      <Lottie options={defaultOptions} {...rest} />
    </div>
  );
};
