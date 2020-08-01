import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Common/Button';
import Label from '../Common/Label';
import Frame from '../Common/Frame';
import Webcam from '../Common/Webcam';

import './index.css';

const IdScreen = () => {
  const history = useHistory();

  return (
    <div className="container">
      <Label type="label1" title="Bước 2: Quét vân tay" />
      <Label title="Vui lòng đặt hai ngón tay cái lên máy quét" type="label2" />
      <div className="frame">
        <Frame />
      </div>
      <Button title="TIẾP" />
    </div>
  );
};

export default IdScreen;
