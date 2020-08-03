import React from 'react';
import Webcam from 'react-webcam';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import './Webcam.css';
import CheckAnimation from '../Common/CheckAnimation';

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
      {imgSrc && (
        <>
          <CheckAnimation
            className="check-animation"
            height="62px"
            width="62px"
          />
          <img className="webcam-frame" src={imgSrc} />
          <div className="webcam-button-container">
            <Button
              onClick={handleCapture}
              title="CHỤP LẠI"
              small
              transparent
            />
            <Button onClick={handleNext} title="TIẾP" small />
          </div>
        </>
      )}
      <div style={imgSrc ? { display: 'none' } : {}}>
        <Webcam
          className="webcam-frame"
          screenshotQuality={1}
          mirrored
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/png"
        />
        <Button onClick={capture} title="CHỤP ẢNH" small />
      </div>
    </>
  );
};
// https://www.npmjs.com/package/react-webcam

export default WebcamCapture;
