import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Common/Button';
import Label from '../Common/Label';
import FrameID from '../Common/FrameID';
import './index.css';

const IDScreen = () => {
  const history = useHistory();
  const handleClick = () => {
    const IDScan = document.getElementById('id-scan');
    const IDReview = document.getElementById('id-review');
    IDScan.style.display = 'none';
    IDReview.style.display = 'flex';
  }

  const handleGoBack = () => {
    const IDScan = document.getElementById('id-scan');
    const IDReview = document.getElementById('id-review');
    IDScan.style.display = 'block';
    IDReview.style.display = 'none';
  }

  const handleGoNext = () => {
    history.push('/review-screen');
  }

  return (
    <div className="container">
      <Label title="Bước 3: Quét CMND/CCCD/Hộ Chiếu" type="label1" />
      <Label
        title="Vui lòng đặt CMND/CCCD/Hộ Chiếu lên máy quét và chờ vài giây"
        type="label2"
      />
      <div className="frameid">
        <FrameID />
      </div>
      <div id="id-scan">
        <Button onClick={() => handleClick()} title="TIẾP" buttonClass="small-button"/>
      </div>
      <div id="id-review" style={{display: 'none'}}>
        <Button onClick={() => handleGoBack()} title="QUÉT LẠI" buttonClass="small-button trans-button"/>
        <Button onClick={() => handleGoNext()} title="TIẾP" buttonClass="small-button"/>
      </div>
    </div>
  );
};

export default IDScreen;
