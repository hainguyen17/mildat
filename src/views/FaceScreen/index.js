import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Common/Button';
import Label from '../Common/Label';
import Frame from '../Common/Frame';
import Webcam from '../Common/Webcam';

import './index.css';

const FaceScreen = () => {
  const history = useHistory();

  return (
    <div className="container">
      <Label title="Bước 1: Chụp ảnh" type="label1" />
      <Label
        title="Giữ khuôn mặt ở giữa camera và bấm nút Chụp ảnh"
        type="label2"
      />
      <div className="frame">
        <Webcam />
      </div>
    </div>
  );
};

export default FaceScreen;
