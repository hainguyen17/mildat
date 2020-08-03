import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Common/Button';
import Label from '../Common/Label';
import Frame from '../Common/Frame';
import CheckAnimation from '../Common/CheckAnimation';

import './index.css';

const FingerScreen = () => {
  const history = useHistory();
  const [fingerprint, setFingerprint] = useState('');

  const handleClick = () => {
    setFingerprint('fingerprint');
  };

  const handleGoBack = () => {
    setFingerprint('');
  };

  const handleGoNext = () => {
    history.push('/id-screen');
  };

  return (
    <div className="finger-container">
      <Label type="label1" title="Bước 2: Quét vân tay" />
      <Label title="Vui lòng đặt hai ngón tay cái lên máy quét" type="label2" />
      {fingerprint ? (
        <>
          <CheckAnimation
            className="finger-animation"
            height="62px"
            width="62px"
          />
          <div className="frame">
            <Frame fileName="ColoredFrame.svg" />
          </div>
          <div id="finger-review">
            <Button
              onClick={() => handleGoBack()}
              title="QUÉT LẠI"
              small
              transparent
            />
            <Button onClick={() => handleGoNext()} title="TIẾP" small />
          </div>
        </>
      ) : (
        <>
          <div className="frame">
            <Frame fileName="Frame.svg" />
          </div>
          <div id="finger-scan">
            <Button onClick={() => handleClick()} title="QUÉT" small />
          </div>
        </>
      )}
    </div>
  );
};

export default FingerScreen;
