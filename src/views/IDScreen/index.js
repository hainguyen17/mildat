import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Common/Button';
import Label from '../Common/Label';
import FrameID from '../Common/FrameID';
import './index.css';

const IDScreen = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/face-screen/face-confirm');
  };

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
      <Button onClick={handleClick} title="TIẾP" />
    </div>
  );
};

export default IDScreen;
