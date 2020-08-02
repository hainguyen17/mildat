import React from 'react';
import Webcam from 'react-webcam';
import Button from './Button';
import { useHistory } from 'react-router-dom';

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const history = useHistory();

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  };

  const handleNext = () => {
    history.push('/finger-screen');
  };

  const handleCapture = () => {
    setImgSrc(null);
  };

  return (
    <>
      {imgSrc ? (
        <>
          <img src={imgSrc} />
          <Button onClick={handleCapture} title="CHỤP LẠI" buttonClass="small-button trans-button"/>
          <Button onClick={handleNext} title="TIẾP" buttonClass="small-button"/>
        </>
      ) : (
        <>
          <Webcam
            screenshotQuality={1}
            mirrored
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
          <Button onClick={capture} title="CHỤP ẢNH" buttonClass="small-button"/>
        </>
      )}
    </>
  );
};
// https://www.npmjs.com/package/react-webcam

export default WebcamCapture;
