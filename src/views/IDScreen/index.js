import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Common/Button';
import Label from '../Common/Label';
import FrameID from '../Common/FrameID';
import CheckAnimation from '../Common/CheckAnimation';

const IDScreen = () => {
  const history = useHistory();
  const [id, setId] = useState('');

  const handleClick = () => {
    setId('id');
  };

  const handleGoBack = () => {
    setId('');
  };

  const handleGoNext = () => {
    history.push('/review-screen');
  };

  return (
    <div className="container">
      <Label title="Bước 3: Quét CMND/CCCD/Hộ Chiếu" type="label1" />
      <Label
        title="Vui lòng đặt CMND/CCCD/Hộ Chiếu lên máy quét và chờ vài giây"
        type="label2"
      />
      {id ? (
        <>
          <CheckAnimation height="62px" width="62px">
            <div className="id-frame">
              <FrameID />
            </div>
          </CheckAnimation>
          <div id="id-review">
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
          <div className="id-frame">
            <FrameID />
          </div>
          <div id="id-scan">
            <Button onClick={() => handleClick()} title="TIẾP" small />
          </div>
        </>
      )}
    </div>
  );
};

export default IDScreen;
