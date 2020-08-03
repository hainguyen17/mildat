import React from 'react';
import Label from '../Common/Label';
import Webcam from '../Common/Webcam';
import './index.css';

const FaceScreen = () => {
  return (
    <div className="container">
      <Label title="Bước 1: Chụp ảnh" type="label1" />
      <Label
        title="Giữ khuôn mặt ở giữa camera và bấm nút Chụp ảnh"
        type="label2"
      />
      <Webcam />
    </div>
  );
};

export default FaceScreen;
