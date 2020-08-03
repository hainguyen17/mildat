import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Common/Button';
import Label from '../Common/Label';
import Frame from '../Common/Frame';
import CheckAnimation from '../Common/CheckAnimation';

import './index.css';

const FingerScreen = () => {
  const history = useHistory();
  const handleClick = () => {
    const fingerScan = document.getElementById('finger-scan');
    const fingerReview = document.getElementById('finger-review');
    fingerScan.style.display = 'none';
    fingerReview.style.display = 'flex';
  };

  const handleGoBack = () => {
    const fingerScan = document.getElementById('finger-scan');
    const fingerReview = document.getElementById('finger-review');
    fingerScan.style.display = 'block';
    fingerReview.style.display = 'none';
  };

  const handleGoNext = () => {
    history.push('/id-screen');
  };

  return (
    <div className="finger-container">
      <Label type="label1" title="Bước 2: Quét vân tay" />
      <Label title="Vui lòng đặt hai ngón tay cái lên máy quét" type="label2" />
      <div className="frame">
        <Frame />
      </div>

      <div id="finger-scan">
        <Button onClick={() => handleClick()} title="QUÉT" small />
      </div>
      <div id="finger-review" style={{ display: 'none' }}>
        <Button
          onClick={() => handleGoBack()}
          title="QUÉT LẠI"
          small
          transparent
        />
        <Button onClick={() => handleGoNext()} title="TIẾP" small />
      </div>
    </div>
  );
};

export default FingerScreen;
