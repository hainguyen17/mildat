import React from 'react';
import Webcam from 'react-webcam';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeImage, resetImage } from '../../actions/appData';
import Button from './Button';
import CheckAnimation from './CheckAnimation';
import './Webcam.css';

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const { imgSrc } = useSelector((state) => state.appData);
  const dispatch = useDispatch();

  const history = useHistory();

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(changeImage(imageSrc));
  };

  const handleNext = () => {
    history.push('/finger-screen');
  };

  const handleRecapture = () => {
    dispatch(resetImage());
  };

  return (
    <>
      {imgSrc && (
        <>
          <CheckAnimation height="62px" width="62px">
            <img className="webcam-frame" src={imgSrc} alt="webcam-frame" />
          </CheckAnimation>
          <div className="webcam-button-container">
            <Button
              onClick={handleRecapture}
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
